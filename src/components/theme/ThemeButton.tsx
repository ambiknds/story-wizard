import React from 'react';
import type { Theme } from './ThemeData';

interface ThemeButtonProps {
  theme: Theme;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function ThemeButton({ theme, isSelected, onSelect }: ThemeButtonProps) {
  const Icon = theme.icon;
  
  return (
    <button
      onClick={() => onSelect(theme.id)}
      className={`p-4 rounded-lg border-2 transition-all ${
        isSelected
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 hover:border-blue-200'
      }`}
    >
      <div className="flex flex-col items-center gap-2">
        <Icon className="w-8 h-8" />
        <span className="text-sm font-medium">{theme.label}</span>
      </div>
    </button>
  );
}