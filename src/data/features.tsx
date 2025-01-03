import { Music2, PenTool, Palette } from 'lucide-react';
import type { Feature } from '../types/feature';

export const features: Feature[] = [
  {
    icon: <Music2 className="w-8 h-8" />,
    title: "Music Innovation",
    description: "Exploring the intersection of AI and musical creativity through composition and analysis."
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Writing & Poetry",
    description: "Using AI to analyze and generate poetry, exploring the boundaries of creative writing."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Visual Arts",
    description: "Creating unique visual experiences through AI-powered art generation and manipulation."
  }
];