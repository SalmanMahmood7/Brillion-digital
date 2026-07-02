import { NextRequest, NextResponse } from 'next/server';
import { articlesService, type Article } from '@/lib/firebase-services';
import { auth } from '@/lib/firebase';
import { Timestamp } from 'firebase/firestore';

// In-memory cache for articles
let articlesCache: {
  data: any;
  timestamp: number;
  key: string;
} | null = null;

const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

function getCacheKey(category?: string, industry?: string, featured?: string): string {
  return `${category || 'all'}-${industry || 'all'}-${featured || 'false'}`;
}

function isCacheValid(cacheKey: string): boolean {
  if (!articlesCache) return false;
  if (articlesCache.key !== cacheKey) return false;
  return (Date.now() - articlesCache.timestamp) < CACHE_DURATION;
}

function invalidateCache(): void {
  articlesCache = null;
  console.log('🗑️ Articles cache invalidated');
}

// GET /api/articles - Get all published articles with caching
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const industry = searchParams.get('industry');
    const featured = searchParams.get('featured');

    const cacheKey = getCacheKey(category || undefined, industry || undefined, featured || undefined);
    
    // Check if we have valid cached data
    if (isCacheValid(cacheKey)) {
      console.log('🚀 Serving articles from cache');
      
      const response = NextResponse.json({ 
        success: true, 
        articles: articlesCache!.data,
        cached: true,
        cacheTime: new Date(articlesCache!.timestamp).toISOString()
      });
      
      // Add cache headers
      response.headers.set('Cache-Control', 's-maxage=900, stale-while-revalidate=1800'); // 15 min cache, 30 min stale
      response.headers.set('X-Cache-Status', 'HIT');
      
      return response;
    }

    console.log('💾 Fetching articles from Firebase');
    let articles: Article[];

    if (featured === 'true') {
      articles = await articlesService.getFeatured();
    } else if (category) {
      articles = await articlesService.getByCategory(category);
    } else {
      articles = await articlesService.getAll();
    }

    // Filter by industry if specified
    if (industry && industry !== 'All') {
      articles = articles.filter(article => article.industry === industry);
    }

    // Convert Timestamp objects to ISO strings for JSON serialization
    const serializedArticles = articles.map(article => ({
      ...article,
      dateValue: article.dateValue instanceof Timestamp ? article.dateValue.toDate().toISOString() : article.dateValue,
      createdAt: article.createdAt instanceof Timestamp ? article.createdAt.toDate().toISOString() : article.createdAt,
      updatedAt: article.updatedAt instanceof Timestamp ? article.updatedAt.toDate().toISOString() : article.updatedAt
    }));

    // Update cache
    articlesCache = {
      data: serializedArticles,
      timestamp: Date.now(),
      key: cacheKey
    };

    const response = NextResponse.json({ 
      success: true, 
      articles: serializedArticles,
      cached: false,
      timestamp: new Date().toISOString()
    });

    // Add cache headers for browsers/CDN
    response.headers.set('Cache-Control', 's-maxage=900, stale-while-revalidate=1800'); // 15 min cache, 30 min stale
    response.headers.set('X-Cache-Status', 'MISS');
    
    return response;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

// POST /api/articles - Create new article (admin only)
export async function POST(request: NextRequest) {
  try {
    // Check authentication header
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, error: 'Authentication required' },
        { status: 401 }
      );
    }

    const token = authHeader.split('Bearer ')[1];
    
    // Verify Firebase ID token here
    // For now, we'll assume the token is valid and extract userId
    // In production, you should verify this with Firebase Admin SDK
    
    const body = await request.json();
    const { article, adminUserId } = body;

    if (!adminUserId) {
      return NextResponse.json(
        { success: false, error: 'Admin user ID required' },
        { status: 400 }
      );
    }

    // Convert ISO string back to Timestamp for Firestore
    const articleData = {
      ...article,
      dateValue: new Date(article.dateValue ? article.dateValue : article.date),
    };

    const articleId = await articlesService.create(articleData, adminUserId);

    // Invalidate cache when new article is created
    invalidateCache();

    return NextResponse.json({ 
      success: true, 
      articleId,
      message: 'Article created successfully' 
    });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create article' },
      { status: 500 }
    );
  }
}