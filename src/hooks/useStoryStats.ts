import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useStoryStats() {
  const [stats, setStats] = useState({ totalStories: 0, readingTime: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const { data, error } = await supabase
          .from('stories')
          .select('content')
          .then(({ data }) => ({
            data: {
              totalStories: data?.length ?? 0,
              readingTime: data?.reduce((acc, story) => {
                // Estimate reading time: 200 words per minute
                const words = story.content.split(/\s+/).length;
                return acc + Math.ceil(words / 200);
              }, 0) ?? 0,
            },
            error: null,
          }));

        if (error) throw error;
        setStats(data);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  return { ...stats, loading };
}