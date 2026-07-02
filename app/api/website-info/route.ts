import { NextRequest, NextResponse } from 'next/server';
import { websiteInfoService, servicesService, articlesService, type WebsiteInfo } from '@/lib/firebase-services';

// In-memory cache for website info
let websiteInfoCache: {
  data: any;
  timestamp: number;
} | null = null;

const CACHE_DURATION = 60 * 60 * 1000; // 1 hour (website info changes less frequently)

function isCacheValid(): boolean {
  if (!websiteInfoCache) return false;
  return (Date.now() - websiteInfoCache.timestamp) < CACHE_DURATION;
}

function invalidateCache(): void {
  websiteInfoCache = null;
  console.log('🗑️ Website info cache invalidated');
}

// GET /api/website-info - Get all website information for chatbot
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const section = searchParams.get('section');

    // Check if we have valid cached data
    if (isCacheValid()) {
      console.log('🚀 Serving website info from cache');
      
      const response = NextResponse.json({ 
        success: true, 
        data: websiteInfoCache!.data,
        cached: true,
        cacheTime: new Date(websiteInfoCache!.timestamp).toISOString()
      });
      
      // Add cache headers
      response.headers.set('Cache-Control', 's-maxage=3600, stale-while-revalidate=7200'); // 1 hour cache, 2 hour stale
      response.headers.set('X-Cache-Status', 'HIT');
      
      return response;
    }

    console.log('💾 Fetching website info from Firebase');
    
    // Fetch all data needed for chatbot
    const [websiteInfo, services, articles] = await Promise.all([
      section ? websiteInfoService.getBySection(section as 'company' | 'services' | 'contact' | 'features') : websiteInfoService.getAll(),
      servicesService.getAll(),
      articlesService.getFeatured()
    ]);

    // Structure the data for the chatbot
    const chatbotData = {
      websiteInfo: websiteInfo,
      services: services.map(service => ({
        id: service.id,
        title: service.title,
        description: service.description,
        slug: service.slug,
        features: service.features || [],
        benefits: service.benefits || [],
        href: service.href
      })),
      articles: articles.slice(0, 10).map(article => ({ // Limit to 10 recent articles
        id: article.id,
        title: article.title,
        excerpt: article.excerpt,
        slug: article.slug,
        category: article.category,
        industry: article.industry,
        topic: article.topic
      })),
      lastUpdated: new Date().toISOString()
    };

    // Update cache
    websiteInfoCache = {
      data: chatbotData,
      timestamp: Date.now()
    };

    const response = NextResponse.json({ 
      success: true, 
      data: chatbotData,
      cached: false,
      timestamp: new Date().toISOString()
    });

    // Add cache headers for browsers/CDN
    response.headers.set('Cache-Control', 's-maxage=3600, stale-while-revalidate=7200'); // 1 hour cache, 2 hour stale
    response.headers.set('X-Cache-Status', 'MISS');
    
    return response;
  } catch (error) {
    console.error('Error fetching website info:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch website info' },
      { status: 500 }
    );
  }
}

// POST /api/website-info - Create new website info (admin only)
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

    const body = await request.json();
    const { info } = body;

    const infoId = await websiteInfoService.create(info);

    // Invalidate cache when new info is created
    invalidateCache();

    return NextResponse.json({ 
      success: true, 
      infoId,
      message: 'Website info created successfully' 
    });
  } catch (error) {
    console.error('Error creating website info:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create website info' },
      { status: 500 }
    );
  }
}