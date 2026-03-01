import { NextRequest, NextResponse } from 'next/server';
import { generateNames } from '@/lib/generators/names';
import { checkDomainsForName } from '@/lib/generators/domain-check';
import { NamesRequest, BrandName } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as NamesRequest;
    const { idea, industry, vibe, namePrefs } = body;

    if (!idea || !industry || !vibe) {
      return NextResponse.json(
        { error: 'Missing required fields: idea, industry, vibe' },
        { status: 400 }
      );
    }

    // Generate names via GPT-4
    const names = await generateNames(idea, industry, vibe, namePrefs || '');

    // Check domains for each name in parallel
    const namesWithDomains: BrandName[] = await Promise.all(
      names.map(async (name) => {
        const domains = await checkDomainsForName(name);
        return { name, domains };
      })
    );

    return NextResponse.json({ names: namesWithDomains });
  } catch (error) {
    console.error('Names API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate names' },
      { status: 500 }
    );
  }
}
