import { DomainResult } from '../types';

export async function checkDomain(name: string, tld: string): Promise<DomainResult> {
  const domain = `${name.toLowerCase().replace(/[^a-z0-9]/g, '')}${tld}`;

  try {
    const response = await fetch(
      `https://domainr.p.rapidapi.com/v2/status?domain=${domain}`,
      {
        headers: {
          'X-RapidAPI-Key': process.env.DOMAINR_API_KEY || '',
          'X-RapidAPI-Host': 'domainr.p.rapidapi.com',
        },
      }
    );

    if (!response.ok) {
      return { domain, available: false };
    }

    const data = await response.json();
    const status = data?.status?.[0]?.status || '';
    // Domainr statuses: "undelegated" = available, "active" = taken
    const available = status.includes('undelegated') || status.includes('inactive');

    return {
      domain,
      available,
      registerUrl: available ? `https://www.namecheap.com/domains/registration/results/?domain=${domain}` : undefined,
    };
  } catch {
    // If API fails, mark as unknown/unavailable
    return { domain, available: false };
  }
}

export async function checkDomains(name: string, tlds: string[]): Promise<DomainResult[]> {
  const results = await Promise.all(tlds.map((tld) => checkDomain(name, tld)));
  return results;
}
