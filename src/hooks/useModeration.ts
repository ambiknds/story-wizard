import { useState } from 'react';
import { moderateContent } from '../lib/moderation';
import { useContentSettings } from './useContentSettings';

export function useModeration() {
  const [isChecking, setIsChecking] = useState(false);
  const { settings } = useContentSettings();

  const checkContent = async (text: string) => {
    setIsChecking(true);
    try {
      return await moderateContent(text, settings);
    } finally {
      setIsChecking(false);
    }
  };

  return {
    checkContent,
    isChecking,
  };
}