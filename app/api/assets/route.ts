import { NextRequest, NextResponse } from 'next/server';
import { assetsService, type DownloadableAsset } from '@/lib/firebase-services';
import { Timestamp } from 'firebase/firestore';

// In-memory cache for assets
let assetsCache: {
  data: any;
  timestamp: number;
  key: string;
} | null = null;

const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

function getCacheKey(industry?: string): string {
  return `${industry || 'all'}`;
}

function isCacheValid(cacheKey: string): boolean {
  if (!assetsCache) return false;
  if (assetsCache.key !== cacheKey) return false;
  return (Date.now() - assetsCache.timestamp) < CACHE_DURATION;
}

function invalidateCache(): void {
  assetsCache = null;
  console.log('🗑️ Assets cache invalidated');
}

// GET /api/assets - Get all downloadable assets
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const industry = searchParams.get('industry');

    const cacheKey = getCacheKey(industry || undefined);
    
    // Check if we have valid cached data
    if (isCacheValid(cacheKey)) {
      console.log('🚀 Serving assets from cache');
      
      const response = NextResponse.json({ 
        success: true, 
        assets: assetsCache!.data,
        cached: true,
        cacheTime: new Date(assetsCache!.timestamp).toISOString()
      });
      
      // Add cache headers
      response.headers.set('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600'); // 30 min cache, 60 min stale
      response.headers.set('X-Cache-Status', 'HIT');
      
      return response;
    }

    console.log('💾 Fetching assets from Firebase');
    let assets: DownloadableAsset[];

    if (industry && industry !== 'All Industries') {
      assets = await assetsService.getByIndustry(industry);
    } else {
      assets = await assetsService.getAll();
    }

    // Convert Timestamp objects to ISO strings for JSON serialization
    const serializedAssets = assets.map(asset => ({
      ...asset,
      createdAt: asset.createdAt instanceof Timestamp ? asset.createdAt.toDate().toISOString() : asset.createdAt,
      updatedAt: asset.updatedAt instanceof Timestamp ? asset.updatedAt.toDate().toISOString() : asset.updatedAt
    }));

    // Update cache
    assetsCache = {
      data: serializedAssets,
      timestamp: Date.now(),
      key: cacheKey
    };

    const response = NextResponse.json({ 
      success: true, 
      assets: serializedAssets,
      cached: false,
      timestamp: new Date().toISOString()
    });

    // Add cache headers for browsers/CDN
    response.headers.set('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600'); // 30 min cache, 60 min stale
    response.headers.set('X-Cache-Status', 'MISS');
    
    return response;
  } catch (error) {
    console.error('Error fetching assets:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch assets' },
      { status: 500 }
    );
  }
}

// POST /api/assets - Create new asset (admin only)
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
    const { asset } = body;

    const assetId = await assetsService.create(asset);

    // Invalidate cache when new asset is created
    invalidateCache();

    return NextResponse.json({ 
      success: true, 
      assetId,
      message: 'Asset created successfully' 
    });
  } catch (error) {
    console.error('Error creating asset:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create asset' },
      { status: 500 }
    );
  }
}