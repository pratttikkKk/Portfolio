import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
}

export function GradientText({ children, className = '', as: Tag = 'span' }: GradientTextProps) {
  return (
    <Tag className={`animated-gradient bg-clip-text text-transparent ${className}`}>
      {children}
    </Tag>
  );
}
