import { NextRequest, NextResponse } from 'next/server';
import { articlesService, type Article } from '@/lib/firebase-services';
import { Timestamp } from 'firebase/firestore';

interface RouteParams {
  params: {
    slug: string;
  };
}

// GET /api/articles/[slug] - Get single article by slug
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { slug } = params;
    
    if (!slug) {
      return NextResponse.json(
        { success: false, error: 'Slug parameter required' },
        { status: 400 }
      );
    }

    const article = await articlesService.getBySlug(slug);

    if (!article) {
      return NextResponse.json(
        { success: false, error: 'Article not found' },
        { status: 404 }
      );
    }

    // Convert Timestamp objects to ISO strings for JSON serialization
    const serializedArticle = {
      ...article,
      dateValue: article.dateValue instanceof Timestamp ? article.dateValue.toDate().toISOString() : article.dateValue,
      createdAt: article.createdAt instanceof Timestamp ? article.createdAt.toDate().toISOString() : article.createdAt,
      updatedAt: article.updatedAt instanceof Timestamp ? article.updatedAt.toDate().toISOString() : article.updatedAt
    };

    return NextResponse.json({ 
      success: true, 
      article: serializedArticle 
    });
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch article' },
      { status: 500 }
    );
  }
}

// PUT /api/articles/[slug] - Update article (admin only)
export async function PUT(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    // Check authentication header
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { slug } = params;
    const body = await request.json();
    const { updates } = body;

    if (!slug) {
      return NextResponse.json(
        { success: false, error: 'Slug parameter required' },
        { status: 400 }
      );
    }

    // First get the article to get its ID
    const article = await articlesService.getBySlug(slug);
    if (!article || !article.id) {
      return NextResponse.json(
        { success: false, error: 'Article not found' },
        { status: 404 }
      );
    }

    // Convert ISO string back to Timestamp if dateValue is being updated
    if (updates.dateValue) {
      updates.dateValue = new Date(updates.dateValue);
    }

    await articlesService.update(article.id, updates);

    return NextResponse.json({ 
      success: true, 
      message: 'Article updated successfully' 
    });
  } catch (error) {
    console.error('Error updating article:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update article' },
      { status: 500 }
    );
  }
}

// DELETE /api/articles/[slug] - Delete article (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    // Check authentication header
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { slug } = params;

    if (!slug) {
      return NextResponse.json(
        { success: false, error: 'Slug parameter required' },
        { status: 400 }
      );
    }

    // First get the article to get its ID
    const article = await articlesService.getBySlug(slug);
    if (!article || !article.id) {
      return NextResponse.json(
        { success: false, error: 'Article not found' },
        { status: 404 }
      );
    }

    await articlesService.delete(article.id);

    return NextResponse.json({ 
      success: true, 
      message: 'Article deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting article:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete article' },
      { status: 500 }
    );
  }
}