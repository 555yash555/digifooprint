import { chatCompletion } from '../services/openai';

export async function generateSimilarNames(
  baseName: string,
  idea: string,
  industry: string,
  vibe: string
): Promise<string[]> {
  const systemPrompt = `You are a branding expert. Your task is to generate similar variations of a specific brand name.
  
  Rules:
  - Generate 3 variations that sound similar or share the same core syllable/vibe as the base name.
  - One variation should be a slight spelling tweak.
  - One variation should be the base name with a common prefix or suffix (e.g., Get, Try, App, Ly, Ify).
  - One variation should be a brand-new name that captures the exact same "mouthfeel" and rhythm.
  - Return ONLY a valid JSON array of strings.`;

  const userPrompt = `Base Name: ${baseName}
  Original Idea: ${idea}
  Industry: ${industry}
  Vibe: ${vibe}
  
  Generate 3 similar variations for "${baseName}". Return ONLY a JSON array.`;

  const response = await chatCompletion(systemPrompt, userPrompt);
  const cleaned = response.replace(/```json?\n?/g, '').replace(/```/g, '').trim();
  return JSON.parse(cleaned) as string[];
}
