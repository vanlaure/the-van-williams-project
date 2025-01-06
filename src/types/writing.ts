import { LucideIcon } from 'lucide-react';

export interface Book {
  title: string;
  link: string;
}

export interface WritingProject {
  title: string;
  description: string;
  details: string[];
  books?: Book[];
  upcomingBook?: string;
  icon: LucideIcon;
  images: string[];
  accent: 'blue' | 'purple' | 'emerald';
}
