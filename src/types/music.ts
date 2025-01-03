import { LucideIcon } from 'lucide-react';

export interface Track {
  id: string;
  title: string;
  description: string;
  duration: string;
  audioUrl: string;
  coverImage: string;
  artist: string;
  genre?: string;
  icon?: LucideIcon;
}

export interface Album {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  tracks: Track[];
}