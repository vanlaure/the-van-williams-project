import type { WritingProject } from '../types/writing';
import { Book, Feather, Plane } from 'lucide-react';

export const writingProjects: WritingProject[] = [
  {
    title: 'The Cole Adams Series',
    description: 'A groundbreaking experiment in AI-assisted novel writing, producing two compelling thriller novels available on Amazon.',
    details: [
      'Complete AI-assisted novel writing process',
      'Professional editing and publishing workflow',
      'Available worldwide on Amazon',
      'Thriller genre with complex plot structures',
      'Integration of multiple AI writing tools',
      'Human-AI collaborative storytelling'
    ],
    books: [
      {
        title: 'The Corruption Within',
        link: 'https://www.amazon.com/CORRUPTION-WITHIN-riveting-thriller-corruption/dp/B0CW5VWBPX/'
      },
      {
        title: 'The Singularity Dawn',
        link: 'https://www.amazon.com/SINGULARITY-DAWN-Thrilling-Odyssey-Apocalypse/dp/B0CW6L8HRG/'
      }
    ],
    upcomingBook: 'The Destruction',
    icon: Book,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80',
    accent: 'blue'
  },
  {
    title: 'The Mark of Cain',
    description: 'An ambitious Christian thriller series that reimagines the biblical story of Cain in a contemporary fantasy setting.',
    details: [
      'Biblical fantasy thriller genre',
      'Deep character development with AI assistance',
      'Complex world-building elements',
      'Integration of theological themes',
      'Multi-layered narrative structure',
      'Advanced plot generation techniques'
    ],
    icon: Feather,
    image: 'https://images.unsplash.com/photo-1504610926078-a1611febcad3?auto=format&fit=crop&q=80',
    accent: 'purple'
  },
  {
    title: 'On Our Way Series',
    description: 'A revolutionary travel guidebook series that combines practical information with personal growth narratives.',
    details: [
      'AI-enhanced travel writing',
      'Personal development integration',
      'Cultural insights and analysis',
      'Focus on major travel destinations',
      'Included Journal makes it easy and fun to capture your greatest memories',
      'Launching Summer 2024'
    ],
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80',
    accent: 'emerald'
  }
];