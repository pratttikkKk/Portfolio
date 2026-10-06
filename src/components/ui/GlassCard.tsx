import { motion, useReducedMotion } from 'framer-motion';
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`bg-white/[0.055] backdrop-blur-xl border border-white/15 rounded-3xl transition-all duration-300 ${
        hover ? 'hover:bg-white/[0.09] hover:border-white/30' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
      whileHover={
        hover && !shouldReduceMotion
          ? {
              y: -7,
              scale: 1.012,
              boxShadow: `0 18px 55px -14px ${glowColor}`,
              borderColor: 'rgba(255,255,255,0.35)',
            }
          : undefined
      }
      whileTap={onClick && !shouldReduceMotion ? { scale: 0.985 } : undefined}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
