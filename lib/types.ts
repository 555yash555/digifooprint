// Form data collected from multi-step form
export interface FormData {
  idea: string;
  industry: string;
  vibe: string;
  namePrefs: string;
}

// Domain availability result
export interface DomainResult {
  domain: string;
  available: boolean;
  registerUrl?: string;
}

// Generated brand name with domain results
export interface BrandName {
  name: string;
  domains: DomainResult[];
  trademarkRisk?: number;
  similarNames?: BrandName[];
}

// Names API response
export interface NamesResponse {
  names: BrandName[];
}

// Color palette
export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  dark: string;
  light: string;
}

// Font pairing
export interface FontPairing {
  heading: string;
  body: string;
}

// SEO data
export interface SeoData {
  primary: string;
  secondary: string[];
  longTail: string[];
  metaTitle: string;
  metaDescription: string;
  ogTags: {
    title: string;
    description: string;
    type: string;
  };
}

// Full brand kit response
export interface BrandKit {
  colors: ColorPalette;
  fonts: FontPairing;
  logoPrompt: string;
  seo: SeoData;
  brandingMd: string;
  copywriteMd: string;
}

// Brand API request
export interface BrandRequest {
  idea: string;
  industry: string;
  vibe: string;
  chosenName: string;
  chosenDomain: string;
  trademarkStatus?: string;
}

// Names API request
export interface NamesRequest {
  idea: string;
  industry: string;
  vibe: string;
  namePrefs: string;
}
