import React, { useState } from 'react';
import { ThemeSelector } from './components/ThemeSelector';
import { CharacterBuilder } from './components/CharacterBuilder';
import { StoryControls } from './components/StoryControls';
import { StoryPreview } from './components/StoryPreview';
import { useStoryGeneration } from './hooks/useStoryGeneration';
import type { StorySettings, Story } from './types';

function App() {
  const [settings, setSettings] = useState<StorySettings>({
    theme: '',
    character: {
      name: '',
      personality: [],
    },
    readingLevel: 6,
    length: 'medium',
    tone: 50,
    style: 'prose',
  });

  const [generatedStory, setGeneratedStory] = useState<Story | null>(null);
  const { generateContent, isLoading, error } = useStoryGeneration();

  const handleGenerate = async () => {
    const result = await generateContent(settings);
    if (result) {
      setGeneratedStory({
        title: `${settings.character.name}'s ${settings.theme} Adventure`,
        content: result.story,
        createdAt: new Date(),
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Story Wizard
          </h1>
          <p className="text-lg text-gray-600">
            Create magical stories for young minds
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-8">
              <ThemeSelector
                selectedTheme={settings.theme}
                onThemeSelect={(theme) => setSettings({ ...settings, theme })}
              />

              <CharacterBuilder
                name={settings.character.name}
                onNameChange={(name) =>
                  setSettings({
                    ...settings,
                    character: { ...settings.character, name },
                  })
                }
                personality={settings.character.personality}
                onPersonalityChange={(personality) =>
                  setSettings({
                    ...settings,
                    character: { ...settings.character, personality },
                  })
                }
              />

              <StoryControls
                length={settings.length}
                onLengthChange={(length) => setSettings({ ...settings, length })}
                tone={settings.tone}
                onToneChange={(tone) => setSettings({ ...settings, tone })}
                style={settings.style}
                onStyleChange={(style) => setSettings({ ...settings, style })}
              />

              <button
                className="w-full px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleGenerate}
                disabled={isLoading || !settings.theme || !settings.character.name}
              >
                {isLoading ? 'Generating...' : 'Generate Story'}
              </button>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
            </div>
          </div>

          <div>
            <StoryPreview story={generatedStory} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;