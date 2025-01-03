import { LucideIcon } from 'lucide-react';

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  icon?: LucideIcon;
}