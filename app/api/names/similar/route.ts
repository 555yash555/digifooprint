import { NextRequest, NextResponse } from 'next/server';
import { generateSimilarNames } from '@/lib/generators/similar-names';
import { checkDomainsForName } from '@/lib/generators/domain-check';
import { checkTrademarkRisk } from '@/lib/generators/trademark-check';
import { BrandName } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, idea, industry, vibe } = body;

    if (!name) {
      return NextResponse.json({ error: 'Missing base name' }, { status: 400 });
    }

    const variants = await generateSimilarNames(name, idea, industry, vibe);

    const namesWithDomains: BrandName[] = await Promise.all(
      variants.map(async (v) => {
        const domains = await checkDomainsForName(v);
        const trademarkRisk = await checkTrademarkRisk(v, domains);
        return { name: v, domains, trademarkRisk };
      })
    );

    return NextResponse.json({ names: namesWithDomains });
  } catch (error) {
    console.error('Similar Names API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate similar names' },
      { status: 500 }
    );
  }
}
