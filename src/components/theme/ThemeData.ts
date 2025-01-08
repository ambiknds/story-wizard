import { 
  Wand2, 
  Rocket, 
  Trees, 
  Ship, 
  Castle, 
  Fish, 
  Dog 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Theme {
  id: string;
  icon: LucideIcon;
  label: string;
}

export const themes: Theme[] = [
  { id: 'fantasy', icon: Wand2, label: 'Fantasy' },
  { id: 'space', icon: Rocket, label: 'Space Adventure' },
  { id: 'nature', icon: Trees, label: 'Nature' },
  { id: 'ocean', icon: Ship, label: 'Ocean' },
  { id: 'fairytale', icon: Castle, label: 'Fairy Tale' },
  { id: 'underwater', icon: Fish, label: 'Underwater' },
  { id: 'animals', icon: Dog, label: 'Animals' },
];