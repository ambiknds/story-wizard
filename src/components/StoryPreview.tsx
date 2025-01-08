import React from 'react';
import { Book } from 'lucide-react';
import type { Story } from '../types';

interface StoryPreviewProps {
  story: Story | null;
  isLoading: boolean;
}

export function StoryPreview({ story, isLoading }: StoryPreviewProps) {
  if (isLoading) {
    return (
      <div className="animate-pulse space-y-4 p-6 bg-white rounded-lg shadow-lg">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg text-gray-500">
        <Book className="w-12 h-12 mb-2" />
        <p className="text-center">Your story will appear here</p>
      </div>
    );
  }

  // Split content into title and body
  const [title, ...bodyParts] = story.content.split('\n').filter(line => line.trim());

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{title || story.title}</h2>
      <div className="prose max-w-none">
        {bodyParts.map((paragraph, index) => (
          paragraph.trim() && (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          )
        ))}
      </div>
    </div>
  );
}