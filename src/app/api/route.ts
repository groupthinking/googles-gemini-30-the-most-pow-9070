import { NextRequest, NextResponse } from 'next/server';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Handler for GET requests
export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse<string>>> {
  try {
    // You can access query parameters like this:
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query') || 'default';

    // Simulate some async operation
    await new Promise(resolve => setTimeout(resolve, 100));

    return NextResponse.json({
      success: true,
      data: `GET request received with query: ${query}. This is Gemini 3.0's API!`,
      message: 'Data fetched successfully.',
    }, { status: 200 });
  } catch (error: any) {
    console.error('GET request error:', error);
    return NextResponse.json({
      success: false,
      error: error.message || 'An unexpected error occurred during GET request.',
      message: 'Failed to process GET request.',
    }, { status: 500 });
  }
}

// Handler for POST requests
export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse<any>>> {
  try {
    const body = await request.json();

    // Basic validation (optional)
    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json({
        success: false,
        error: 'Request body cannot be empty.',
        message: 'Invalid request payload.',
      }, { status: 400 });
    }

    // Simulate some async operation, e.g., saving data to a DB
    await new Promise(resolve => setTimeout(resolve, 200));

    // For demonstration, we'll echo back the received data
    const processedData = {
      ...body,
      receivedAt: new Date().toISOString(),
      processedBy: "Gemini 3.0 API",
    };

    return NextResponse.json({
      success: true,
      data: processedData,
      message: 'Data successfully processed and received.',
    }, { status: 200 });
  } catch (error: any) {
    console.error('POST request error:', error);
    return NextResponse.json({
      success: false,
      error: error.message || 'An unexpected error occurred during POST request.',
      message: 'Failed to process POST request.',
    }, { status: 500 });
  }
}