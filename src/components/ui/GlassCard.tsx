import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glowColor?: string;
  onClick?: () => void;
}

export function GlassCard({
  children,
  className = '',
  hover = true,
  glowColor = 'rgba(37, 99, 235, 0.15)',
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      className={`bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-300 ${
        hover ? 'hover:bg-white/[0.05] hover:border-white/20' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: `0 10px 40px -10px ${glowColor}`,
              borderColor: 'rgba(255,255,255,0.2)',
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

