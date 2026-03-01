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
    step1Title: 'What are you building?',
    step1Subtitle: 'Don\'t overthink it. Just tell us what your business does and who it helps in plain english.',
    step1Placeholder: 'e.g. A marketplace where indie makers can sell their digital tools and courses...',
    step2Title: 'Pick your industry',
    step2Subtitle: 'Select the industry that best fits your idea.',
    step3Title: 'What\'s the vibe?',
    step3Subtitle: 'How do you want your customers to feel when they see your brand?',
    step4Title: 'Any constraints?',
    step4Subtitle: 'Optional: Give us keywords, preferred lengths, or rules for the AI.',
    step4Placeholder: 'e.g. short, modern, must sound like a tech startup...',
    next: 'Next',
    back: 'Back',
    generate: 'Generate names',
  },
  names: {
    title: 'Choose your weapon',
    subtitle: 'We analysed your idea and generated these high-converting names. Pick the winner.',
    loading: 'Finding the perfect name...',
    loadingSubtitle: 'Our AI is crafting brandable names for your idea',
    cta: 'Continue with this name',
    domainAvailable: 'Available',
    domainUnavailable: 'Taken',
  },
  results: {
    title: 'Your Brand is ready.',
    subtitle: 'Your complete visual and verbal identity, engineered to convert.',
    loading: 'Building your brand kit...',
    colors: {
      title: 'Color Palette',
      description: 'A curated 5-color palette that matches your brand vibe. Click any hex code to copy.',
    },
    fonts: {
      title: 'Typography',
      description: 'A perfect heading and body font pairing loaded from Google Fonts.',
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
      title: 'Export & Build',
      description: 'Download your brand assets and structured copywriting as markdown files.',
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
