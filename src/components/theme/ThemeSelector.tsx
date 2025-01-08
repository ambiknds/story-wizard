import React from 'react';
import { themes } from './ThemeData';
import { ThemeButton } from './ThemeButton';

interface ThemeSelectorProps {
  selectedTheme: string;
  onThemeSelect: (theme: string) => void;
}

export function ThemeSelector({ selectedTheme, onThemeSelect }: ThemeSelectorProps) {
  return (
    <div className="w-full">
      <label className="block text-lg font-medium text-gray-700 mb-2">
        Choose Your Story Theme
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {themes.map((theme) => (
          <ThemeButton
            key={theme.id}
            theme={theme}
            isSelected={selectedTheme === theme.id}
            onSelect={onThemeSelect}
          />
        ))}
      </div>
    </div>
  );
}