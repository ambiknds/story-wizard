import React from 'react';
import { BookOpen, Music, Sparkles } from 'lucide-react';

interface StoryControlsProps {
  length: 'short' | 'medium' | 'long';
  onLengthChange: (length: 'short' | 'medium' | 'long') => void;
  tone: number;
  onToneChange: (tone: number) => void;
  style: 'prose' | 'rhyming' | 'interactive';
  onStyleChange: (style: 'prose' | 'rhyming' | 'interactive') => void;
}

export function StoryControls({
  length,
  onLengthChange,
  tone,
  onToneChange,
  style,
  onStyleChange,
}: StoryControlsProps) {
  return (
    <div className="space-y-8">
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-4">
          Story Length
        </label>
        <div className="flex gap-4">
          {(['short', 'medium', 'long'] as const).map((option) => (
            <button
              key={option}
              onClick={() => onLengthChange(option)}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium capitalize transition-colors
                ${length === option
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-700 mb-4">
          Story Tone
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={tone}
          onChange={(e) => onToneChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Funny</span>
          <span>Serious</span>
        </div>
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-700 mb-4">
          Story Style
        </label>
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => onStyleChange('prose')}
            className={`p-4 rounded-lg flex flex-col items-center gap-2 transition-colors
              ${style === 'prose'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-sm font-medium">Prose</span>
          </button>
          <button
            onClick={() => onStyleChange('rhyming')}
            className={`p-4 rounded-lg flex flex-col items-center gap-2 transition-colors
              ${style === 'rhyming'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            <Music className="w-6 h-6" />
            <span className="text-sm font-medium">Rhyming</span>
          </button>
          <button
            onClick={() => onStyleChange('interactive')}
            className={`p-4 rounded-lg flex flex-col items-center gap-2 transition-colors
              ${style === 'interactive'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            <Sparkles className="w-6 h-6" />
            <span className="text-sm font-medium">Interactive</span>
          </button>
        </div>
      </div>
    </div>
  );
}