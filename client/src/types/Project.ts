export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveLink?: string;
    codeLink?: string;
    category: 'frontend' | 'backend' | 'fullstack';
  }