import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useReadingProgress() {
  const [progress, setProgress] = useState({
    level: 1,
    nextLevel: 2,
    progress: 0,
  });

  useEffect(() => {
    async function loadProgress() {
      const { data } = await supabase
        .from('stories')
        .select('settings->readingLevel')
        .order('created_at', { ascending: false })
        .limit(10);

      if (data && data.length > 0) {
        const levels = data.map((story) => story.settings.readingLevel);
        const avgLevel = Math.round(levels.reduce((a, b) => a + b, 0) / levels.length);
        const progress = ((avgLevel % 1) * 100);
        
        setProgress({
          level: Math.floor(avgLevel),
          nextLevel: Math.floor(avgLevel) + 1,
          progress,
        });
      }
    }

    loadProgress();
  }, []);

  return progress;
}