export const text = {
  site: {
    name: 'DigiFootprint',
    tagline: 'Brand Identity Toolkit',
  },
  hero: {
    title: 'From idea to brand in 60 seconds',
    subtitle: 'Enter your business idea and get a complete brand kit — name, colors, fonts, copy, SEO keywords, and a logo prompt. All powered by AI.',
    cta: 'Start building your brand',
  },
  form: {
    step1Title: 'Describe your business idea',
    step1Subtitle: 'Tell us what your business does in a few sentences.',
    step1Placeholder: 'e.g. A platform for solo travelers to find and join group trips around the world...',
    step2Title: 'Pick your industry',
    step2Subtitle: 'Select the industry that best fits your idea.',
    step3Title: 'Pick your brand vibe',
    step3Subtitle: 'How should your brand feel to your audience?',
    step4Title: 'Any name preferences?',
    step4Subtitle: 'Optional — give us keywords, style hints, or constraints.',
    step4Placeholder: 'e.g. short, one word, modern, starts with "S"...',
    next: 'Next',
    back: 'Back',
    generate: 'Generate names',
  },
  names: {
    title: 'Pick your brand name',
    subtitle: 'We generated 5 names for your brand. Choose the one that resonates.',
    loading: 'Finding the perfect name...',
    loadingSubtitle: 'Our AI is crafting brandable names for your idea',
    cta: 'Continue with this name',
    domainAvailable: 'Available',
    domainUnavailable: 'Taken',
  },
  results: {
    title: 'Your Brand Kit',
    subtitle: 'Everything you need to launch your brand, generated in seconds.',
    loading: 'Building your brand kit...',
    colors: {
      title: 'Color Palette',
      description: 'A curated 5-color palette that matches your brand vibe. Click any hex code to copy.',
    },
    fonts: {
      title: 'Font Pairing',
      description: 'A heading and body font combination from Google Fonts.',
    },
    logo: {
      title: 'Logo Generation Prompt',
      description: 'Use this prompt in Midjourney or DALL-E to generate your logo.',
    },
    seo: {
      title: 'SEO Keywords',
      description: 'Keywords and meta tags to help your brand get discovered.',
    },
    downloads: {
      title: 'Download Brand Files',
      description: 'Get your complete brand guide and website copy as markdown files.',
      branding: 'Download branding.md',
      copywrite: 'Download copywrite.md',
    },
  },
  loadingSteps: [
    'Building color palette...',
    'Pairing fonts...',
    'Crafting logo prompt...',
    'Writing brand copy...',
    'Finding SEO keywords...',
  ],
} as const;
