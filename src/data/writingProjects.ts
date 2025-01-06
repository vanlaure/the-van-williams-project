import type { WritingProject } from '../types/writing';
import { Book, Feather, Plane } from 'lucide-react';

export const writingProjects: WritingProject[] = [
  {
    title: 'The Cole Adams Series',
    description: 'We asked ourselves, can you really write a book with AI? How hard would it be? Well, we tried and produced two thriller novels, "The Corruption Within" and "The Singularity Dawn". And we did it in an unconventional way as well.',
    details: [
      'Complete AI-assisted novel writing process',
      'Professional editing and publishing workflow',
      'Available worldwide on Amazon',
      'Thriller genre with complex plot structures',
      'Integration of multiple AI writing tools',
      'Human-AI collaborative storytelling',
      'Created between reps during morning workouts'
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
    images: ['/public/The_Corruption_Within2.jpg', '/public/Singularity2.jpg'],
    accent: 'blue'
  },
  {
    title: 'The Mark of Cain',
    description: 'In this riveting Christian thriller, Cain, a timeless wanderer with secrets that have shaped millennia, collides with Michael, a passionate young scholar wrestling with enigmas larger than life. As the world edges closer to unprecedented upheaval, Michael finds himself thrust into a maze where the lines between ancient legends and modern dilemmas blur. Journey with them into a narrative where every turn reveals deeper mysteries and where destiny is carved from the echoes of the past. Discover a tale where faith challenges fate, and where the past holds the key to the future. A three part novel series coming soon.',
    details: [
      'Biblical fantasy thriller genre',
      'Deep character development with AI assistance',
      'Complex world-building elements',
      'Integration of theological themes',
      'Multi-layered narrative structure',
      'Advanced plot generation techniques'
    ],
    icon: Feather,
    images: ['/public/Screenshot 2024-09-08 151023.png', '/public/cain.jpg'],
    accent: 'purple'
  },
  {
    title: 'On Our Way Series',
    description: 'In one of our other experiments we asked our "friend" ChatGPT questions about what interests young adults. One of the answers was travel. So, in a series of conversations with ChatGPT we arrived at a new travel series for young adults. It\'s a revolutionary travel guidebook series that combines practical travel information focused on young adults; and it includes a journal to capture all the great memories. COMING SOON!',
    details: [
      'AI-enhanced travel writing',
      'Personal development integration',
      'Cultural insights and analysis',
      'Focus on major travel destinations',
      'Included Journal makes it easy and fun to capture your greatest memories',
      'Launching Summer 2025'
    ],
    icon: Plane,
    images: ['/public/On-Our_Way.jpg'],
    accent: 'emerald'
  }
];
