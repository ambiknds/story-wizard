import React from 'react';
import { User } from 'lucide-react';

interface CharacterBuilderProps {
  name: string;
  onNameChange: (name: string) => void;
  personality: string[];
  onPersonalityChange: (traits: string[]) => void;
}

const personalityTraits = [
  'Brave', 'Kind', 'Curious', 'Silly', 'Smart',
  'Creative', 'Friendly', 'Adventurous'
];

export function CharacterBuilder({
  name,
  onNameChange,
  personality,
  onPersonalityChange,
}: CharacterBuilderProps) {
  const toggleTrait = (trait: string) => {
    if (personality.includes(trait)) {
      onPersonalityChange(personality.filter(t => t !== trait));
    } else if (personality.length < 3) {
      onPersonalityChange([...personality, trait]);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Character Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="pl-10 w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter character name"
          />
        </div>
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Personality Traits (Choose up to 3)
        </label>
        <div className="flex flex-wrap gap-2">
          {personalityTraits.map(trait => (
            <button
              key={trait}
              onClick={() => toggleTrait(trait)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${personality.includes(trait)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {trait}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}