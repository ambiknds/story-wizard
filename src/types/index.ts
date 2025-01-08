export interface Story {
  title: string;
  content: string;
  createdAt: Date;
}

export interface Character {
  name: string;
  personality: string[];
}

export interface StorySettings {
  theme: string;
  character: Character;
  readingLevel: number;
  length: 'short' | 'medium' | 'long';
  tone: number;
  style: 'prose' | 'rhyming' | 'interactive';
}