export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: string;
  status: 'completed' | 'in-development' | 'production-ready';
  duration: string;
  role: string;
  type: string;
  description: string;
  fullDescription: string;
  image: string;
  logo?: string;
  technologies: Tech[];
  metrics: Metric[];
  github?: string;
  demo?: string;
  isPrivate: boolean;
  features: Feature[];
  architecture: ArchitectureLayer[];
  database: DatabaseCollection[];
  apiGroups: APIGroup[];
  screenshots: Screenshot[];
  challenges: Challenge[];
  timeline: TimelineEvent[];
  roadmap: RoadmapItem[];
  contributions: Contribution[];
  learnings: Learning[];
  story: StorySection[];
}

export interface Tech {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'auth' | 'architecture' | 'state' | 'networking' | 'maps' | 'ai' | 'tools' | 'devops';
  description: string;
  whyChosen: string;
  alternatives: string[];
}

export interface Metric {
  label: string;
  value: string;
  icon?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  implementation: string;
  challenges: string;
  futureImprovements: string;
}

export interface ArchitectureLayer {
  name: string;
  description: string;
  icon: string;
  children?: ArchitectureLayer[];
}

export interface DatabaseCollection {
  name: string;
  purpose: string;
  fields: string[];
  relationships: string[];
  indexes: string[];
  validation: string;
  sampleDocument: Record<string, unknown>;
}

export interface APIEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  endpoint: string;
  headers: string[];
  auth: string;
  body: string;
  sampleRequest: string;
  sampleResponse: string;
  errors: string[];
  statusCodes: string[];
}

export interface APIGroup {
  group: string;
  description: string;
  endpoints: APIEndpoint[];
}

export interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface Challenge {
  problem: string;
  difficulty: string;
  solution: string;
  result: string;
  lessons: string[];
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon?: string;
}

export interface RoadmapItem {
  title: string;
  description: string;
  status: 'planned' | 'in-progress' | 'completed';
  icon: string;
}

export interface Contribution {
  area: string;
  details: string;
}

export interface Learning {
  category: string;
  skills: string[];
  description: string;
}

export interface StorySection {
  title: string;
  content: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: number;
  icon?: string;
  description?: string;
}

export type SkillCategory = 
  | 'languages'
  | 'android'
  | 'backend'
  | 'database'
  | 'tools'
  | 'core';

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
  skills: string[];
  type: 'internship' | 'education' | 'certification';
  projectHref?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
  skills: string[];
  status: 'completed' | 'in-progress';
}

export interface NavLink {
  label: string;
  href: string;
  section: string;
}
