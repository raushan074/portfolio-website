import { LucideIcon } from 'lucide-react';
import { ComponentType } from 'react';

// Allow any component that accepts generic props, or specifically LucideIcon
export type IconType = LucideIcon | ComponentType<{ size?: string | number; className?: string; }>;

export interface Experience {
  role: string;
  company: string;
  period: string; // implied from context
  description: string[];
  techStack?: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  score: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; icon?: IconType; color?: string }[];
}

export interface Achievement {
  title: string;
  description: string;
}