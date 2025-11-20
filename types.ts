import React from 'react';

export interface ContentItem {
  t: string; // Title (e.g., "Maternal")
  i: string; // Icon class (e.g., "fa-paw")
  d: string; // Description
}

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  content?: string; // Full article content
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  desc: string;
  image: string;
}

export interface Feature {
  title: string;
  desc: string;
  icon: string;
}

export interface AboutSection {
  history: string;
  mission: string;
  vision: string;
  values: string[];
}

export interface NodeData {
  id: string;
  name: string;
  color: string;
  icon: string;
  type: 'intel' | 'func';
  title: string;
  desc?: string;
  content?: ContentItem[];
  htmlContent?: React.ReactNode;
  // Extended Data Types
  blogPosts?: BlogPost[];
  galleryImages?: string[];
  teamMembers?: TeamMember[];
  features?: Feature[];
  about?: AboutSection;
  showForm?: boolean;
  showMap?: boolean;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  c: string;
}