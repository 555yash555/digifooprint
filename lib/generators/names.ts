import { chatCompletion } from '../services/openai';
import { nameGenerationPrompt } from '@/prompts/name-generation';

export async function generateNames(
  idea: string,
  industry: string,
  vibe: string,
  namePrefs: string
): Promise<string[]> {
  const response = await chatCompletion(
    nameGenerationPrompt.system,
    nameGenerationPrompt.user(idea, industry, vibe, namePrefs)
  );

  // Parse JSON array from response
  const cleaned = response.replace(/```json?\n?/g, '').replace(/```/g, '').trim();
  const names = JSON.parse(cleaned) as string[];
  return names.slice(0, 5);
}
