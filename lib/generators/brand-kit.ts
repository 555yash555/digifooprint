import { chatCompletion } from '../services/openai';
import { brandKitPrompt } from '@/prompts/brand-kit';
import { BrandKit } from '../types';

export async function generateBrandKit(
  idea: string,
  industry: string,
  vibe: string,
  chosenName: string,
  chosenDomain: string
): Promise<BrandKit> {
  const response = await chatCompletion(
    brandKitPrompt.system,
    brandKitPrompt.user(idea, industry, vibe, chosenName, chosenDomain)
  );

  // Parse JSON from response
  const cleaned = response.replace(/```json?\n?/g, '').replace(/```/g, '').trim();
  const kit = JSON.parse(cleaned) as BrandKit;
  return kit;
}
