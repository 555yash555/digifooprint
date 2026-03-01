import { checkDomains } from '../services/domainr';
import { tlds } from '@/constants/tlds';
import { DomainResult } from '../types';

export async function checkDomainsForName(name: string): Promise<DomainResult[]> {
  return checkDomains(name, [...tlds]);
}
