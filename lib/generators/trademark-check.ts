import { BrandName, DomainResult } from '../types';

/**
 * Performs a basic trademark risk assessment.
 * Now includes "Commercial Crowd" detection based on domain availability.
 */
export async function checkTrademarkRisk(
  name: string, 
  domains: DomainResult[] = []
): Promise<number> {
  // Simulated delay
  await new Promise(resolve => setTimeout(resolve, 50));

  let risk = 10; // Base risk for any commercial name

  const lowerName = name.toLowerCase();
  
  // 1. High-risk giants (Max risk)
  const highRiskKeywords = ['apple', 'google', 'meta', 'amazon', 'nike', 'uber', 'tesla', 'disney'];
  if (highRiskKeywords.some(kw => lowerName.includes(kw))) {
    risk += 80;
  }

  // 2. Length Check (Short names = High risk)
  if (name.length <= 3) risk += 60;
  else if (name.length === 4) risk += 40;
  else if (name.length === 5) risk += 20;

  // 3. Domain Saturation Logic
  if (domains.length > 0) {
    const comDomain = domains.find(d => d.domain.toLowerCase().endsWith('.com'));
    const unavailableCount = domains.filter(d => !d.available).length;
    const saturationRate = unavailableCount / domains.length;

    // HUGE BIAS ON .COM
    if (comDomain && !comDomain.available) {
      risk += 50;
    }

    // GENERAL CROWDEDNESS
    risk += Math.round(saturationRate * 30);
  }

  // 4. Common Dictionary Words
  const commonWords = ['smart', 'cloud', 'digital', 'global', 'nexus', 'prime', 'elite', 'spark', 'force'];
  if (commonWords.includes(lowerName)) {
    risk += 30;
  }

  // Cap risk at 99 (never 100% sure, but close)
  return Math.min(risk, 99);
}

/**
 * Generates a direct search URL for the USPTO (TESS) system for a given name.
 */
export function getTrademarkSearchUrl(name: string): string {
  // Newer USPTO search system link
  return `https://tmsearch.uspto.gov/search/search-results?q=${encodeURIComponent(name)}`;
}
