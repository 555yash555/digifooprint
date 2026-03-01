import dns from 'dns/promises';
import { DomainResult } from '../types';

export async function checkDomain(name: string, tld: string): Promise<DomainResult> {
  const domain = `${name.toLowerCase().replace(/[^a-z0-9]/g, '')}${tld}`;

  try {
    // Try resolving DNS records — if it resolves, domain is taken
    await dns.resolve(domain);
    return { domain, available: false };
  } catch (err: unknown) {
    const code = (err as NodeJS.ErrnoException).code;
    if (code === 'ENOTFOUND' || code === 'ENODATA') {
      // No DNS records — likely available
      return {
        domain,
        available: true,
        registerUrl: `https://www.namecheap.com/domains/registration/results/?domain=${domain}`,
      };
    }
    // Other DNS errors — can't determine, mark as unknown
    return { domain, available: false };
  }
}

export async function checkDomains(name: string, tlds: string[]): Promise<DomainResult[]> {
  const results = await Promise.all(tlds.map((tld) => checkDomain(name, tld)));
  return results;
}
