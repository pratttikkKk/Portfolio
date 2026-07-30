import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
}

export function GradientText({ children, className = '', as: Tag = 'span' }: GradientTextProps) {
  return (
    <motion.div
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      className="inline-block"
    >
      <Tag
        className={`bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_200%] ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  );
}

