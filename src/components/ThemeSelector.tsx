import React from 'react';
import { 
  Wand2, 
  Rocket, 
  Trees, 
  Ship, 
  Castle, 
  Fish,
  Dog
} from 'lucide-react';

const themes = [
  { id: 'fantasy', icon: Wand2, label: 'Fantasy' },
  { id: 'space', icon: Rocket, label: 'Space Adventure' },
  { id: 'nature', icon: Trees, label: 'Nature' },
  { id: 'ocean', icon: Ship, label: 'Ocean' },
  { id: 'fairytale', icon: Castle, label: 'Fairy Tale' },
  { id: 'underwater', icon: Fish, label: 'Underwater' },
  { id: 'animals', icon: Dog, label: 'Animals' },
];

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
        {themes.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onThemeSelect(id)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedTheme === id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <Icon className="w-8 h-8" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}