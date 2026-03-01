import { NextRequest, NextResponse } from 'next/server';
import { generateNames } from '@/lib/generators/names';
import { checkDomainsForName } from '@/lib/generators/domain-check';
import { NamesRequest, BrandName } from '@/lib/types';

const MAX_RETRIES = 3;

async function generateAndCheckNames(
  idea: string,
  industry: string,
  vibe: string,
  namePrefs: string,
  excludeNames: string[] = []
): Promise<BrandName[]> {
  const prefs = excludeNames.length > 0
    ? `${namePrefs}\n\nDo NOT use any of these names (already tried, no domains available): ${excludeNames.join(', ')}`
    : namePrefs;

  const names = await generateNames(idea, industry, vibe, prefs);

  const namesWithDomains: BrandName[] = await Promise.all(
    names.map(async (name) => {
      const domains = await checkDomainsForName(name);
      return { name, domains };
    })
  );

  return namesWithDomains;
}

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

    const allResults: BrandName[] = [];
    const excludeNames: string[] = [];

    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
      const batch = await generateAndCheckNames(idea, industry, vibe, namePrefs || '', excludeNames);

      for (const brandName of batch) {
        const hasAvailable = brandName.domains.some((d) => d.available);
        if (hasAvailable) {
          allResults.push(brandName);
        } else {
          excludeNames.push(brandName.name);
        }
      }

      // If we have at least 5 names with available domains, we're done
      if (allResults.length >= 5) break;
    }

    // If we still don't have 5 after retries, pad with whatever we got
    // (include ones without domains as last resort)
    if (allResults.length < 5) {
      const lastBatch = await generateAndCheckNames(idea, industry, vibe, namePrefs || '', excludeNames);
      for (const brandName of lastBatch) {
        if (allResults.length >= 5) break;
        if (!allResults.some((r) => r.name === brandName.name)) {
          allResults.push(brandName);
        }
      }
    }

    // Sort by most available domains first
    allResults.sort((a, b) => {
      const aCount = a.domains.filter((d) => d.available).length;
      const bCount = b.domains.filter((d) => d.available).length;
      return bCount - aCount;
    });

    return NextResponse.json({ names: allResults.slice(0, 5) });
  } catch (error) {
    console.error('Names API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate names' },
      { status: 500 }
    );
  }
}
