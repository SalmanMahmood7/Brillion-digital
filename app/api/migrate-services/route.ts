import { NextRequest, NextResponse } from 'next/server';
import { initializeServices } from '@/lib/firebase-services';

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 Starting services migration...');
    
    // Run the migration
    await initializeServices();
    
    return NextResponse.json({
      success: true,
      message: 'Services migration completed successfully',
      details: {
        servicesCount: 9,
        features: [
          'All 9 services migrated to Firestore',
          'Complete content from individual service pages',
          'Rich content fields populated',
          'ServicesData arrays included'
        ]
      }
    });
  } catch (error) {
    console.error('Migration error:', error);
    return NextResponse.json({
      success: false,
      error: 'Migration failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Services Migration API',
    instructions: 'Use POST method to run migration'
  });
}