import { Skill } from '@/types';

export const skills: Skill[] = [
  // Languages
  { name: 'Java', category: 'languages', proficiency: 90, description: 'Strong OOP foundation, used in Android development' },
  { name: 'Kotlin', category: 'languages', proficiency: 92, description: 'Primary language for modern Android development' },
  { name: 'JavaScript', category: 'languages', proficiency: 85, description: 'Full-stack web and Node.js development' },
  { name: 'TypeScript', category: 'languages', proficiency: 80, description: 'Type-safe JavaScript for scalable applications' },
  { name: 'SQL', category: 'languages', proficiency: 82, description: 'Relational database querying and design' },
  // Android
  { name: 'Jetpack Compose', category: 'android', proficiency: 90, description: 'Modern declarative UI toolkit for Android' },
  { name: 'Android Studio', category: 'android', proficiency: 92, description: 'Primary IDE for Android development' },
  { name: 'MVVM Architecture', category: 'android', proficiency: 88, description: 'Clean architecture pattern for Android apps' },
  { name: 'Material Design 3', category: 'android', proficiency: 85, description: 'Modern design language for Android UIs' },
  { name: 'Navigation Compose', category: 'android', proficiency: 86, description: 'Type-safe navigation for Compose apps' },
  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 88, description: 'JavaScript runtime for scalable server applications' },
  { name: 'Express.js', category: 'backend', proficiency: 85, description: 'Web framework for building REST APIs' },
  { name: 'REST APIs', category: 'backend', proficiency: 90, description: 'Designing and implementing RESTful services' },
  { name: 'JWT Authentication', category: 'backend', proficiency: 87, description: 'Stateless authentication for secure APIs' },
  { name: 'Express Middleware', category: 'backend', proficiency: 84, description: 'Request/response pipeline processing' },
  // Database
  { name: 'MongoDB', category: 'database', proficiency: 88, description: 'NoSQL database for flexible data models' },
  { name: 'Mongoose', category: 'database', proficiency: 85, description: 'MongoDB object modeling for Node.js' },
  // Tools
  { name: 'Git', category: 'tools', proficiency: 90, description: 'Version control and collaboration' },
  { name: 'GitHub', category: 'tools', proficiency: 90, description: 'Code hosting and CI/CD workflows' },
  { name: 'Postman', category: 'tools', proficiency: 85, description: 'API testing and documentation' },
  // Core
  { name: 'Data Structures & Algorithms', category: 'core', proficiency: 88, description: 'Problem-solving foundation for optimized code' },
  { name: 'Object-Oriented Programming', category: 'core', proficiency: 92, description: 'Design patterns and clean code principles' },
  { name: 'System Design', category: 'core', proficiency: 80, description: 'Scalable architecture and distributed systems' },
];

export const skillCategories = [
  { id: 'languages' as const, label: 'Languages', icon: 'code' },
  { id: 'android' as const, label: 'Android', icon: 'smartphone' },
  { id: 'backend' as const, label: 'Backend', icon: 'dns' },
  { id: 'database' as const, label: 'Database', icon: 'storage' },
  { id: 'tools' as const, label: 'Tools', icon: 'handyman' },
  { id: 'core' as const, label: 'Core CS', icon: 'psychology' },
];

