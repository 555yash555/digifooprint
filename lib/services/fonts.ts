// Google Fonts URL builder for embedding fonts
export function getGoogleFontsUrl(fonts: string[]): string {
  const families = fonts
    .map((f) => `family=${encodeURIComponent(f)}:wght@400;500;600;700`)
    .join('&');
  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
}
