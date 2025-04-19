export interface Skill {
    id: string;
    name: string;
    icon: string;
    level: number;
  }
  
  export interface SkillCategory {
    id: string;
    title: string;
    skills: Skill[];
  }