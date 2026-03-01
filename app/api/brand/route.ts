import { NextRequest, NextResponse } from 'next/server';
import { generateBrandKit } from '@/lib/generators/brand-kit';
import { BrandRequest } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as BrandRequest;
    const { idea, industry, vibe, chosenName, chosenDomain } = body;

    if (!idea || !industry || !vibe || !chosenName || !chosenDomain) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate full brand kit via GPT-4
    const kit = await generateBrandKit(idea, industry, vibe, chosenName, chosenDomain);

    return NextResponse.json(kit);
  } catch (error) {
    console.error('Brand API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate brand kit' },
      { status: 500 }
    );
  }
}
