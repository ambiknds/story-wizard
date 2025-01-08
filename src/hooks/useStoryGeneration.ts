import { useState } from 'react';
import { generateStory } from '../lib/ai';
import type { StorySettings } from '../types';

export function useStoryGeneration() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateContent = async (settings: StorySettings) => {
    setIsLoading(true);
    setError(null);

    try {
      const prompt = `Create a ${settings.length} ${settings.style} story for children about a ${settings.character.personality.join(', ')} character named ${settings.character.name} in a ${settings.theme} setting. Make it ${settings.tone < 50 ? 'funny' : 'serious'}.`;

      const story = await generateStory(prompt);
      return { story };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate story');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { generateContent, isLoading, error };
}