export const theme = {
  colors: {
    bg: '#0A0A0B',
    surface: '#141415',
    surfaceHover: '#1C1C1E',
    border: '#2A2A2D',
    primary: '#6366F1',
    primaryHover: '#818CF8',
    secondary: '#A78BFA',
    text: '#F5F5F7',
    textMuted: '#9CA3AF',
    textDim: '#6B7280',
    success: '#34D399',
    error: '#F87171',
    warning: '#FBBF24',
  },
  fonts: {
    heading: 'Plus Jakarta Sans',
    body: 'Inter',
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.3)',
    md: '0 4px 12px rgba(0,0,0,0.4)',
    lg: '0 8px 24px rgba(0,0,0,0.5)',
    glow: '0 0 20px rgba(99,102,241,0.3)',
  },
} as const;
