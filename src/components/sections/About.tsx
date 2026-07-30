import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { HiCode, HiServer, HiChip, HiLightBulb } from 'react-icons/hi';
import { FaAndroid } from 'react-icons/fa';

const specializations = [
  {
    icon: <FaAndroid className="w-8 h-8" />,
    title: 'Android Development',
    description: 'Expertise in Jetpack Compose, Kotlin Multiplatform, MVVM architecture, and modern Android development practices.',
    color: 'text-primary',
    gradient: 'from-primary/20 to-transparent',
  },
  {
    icon: <HiServer className="w-8 h-8" />,
    title: 'Backend Development',
    description: 'Building scalable REST APIs with Node.js, Express.js, and MongoDB. Focused on clean architecture and security.',
    color: 'text-secondary',
    gradient: 'from-secondary/20 to-transparent',
  },
  {
    icon: <HiChip className="w-8 h-8" />,
    title: 'Artificial Intelligence',
    description: 'Integrating AI capabilities into applications using LLMs, prompt engineering, and on-device ML solutions.',
    color: 'text-accent',
    gradient: 'from-accent/20 to-transparent',
  },
  {
    icon: <HiCode className="w-8 h-8" />,
    title: 'Problem Solving',
    description: 'Strong foundation in Data Structures, Algorithms, and System Design. 300+ DSA problems solved across platforms.',
    color: 'text-primary',
    gradient: 'from-primary/20 to-transparent',
  },
];

export function About() {
  return (
    <section id="about" className="section-container">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Building Products That Matter</h2>
          <p className="section-subtitle mx-auto">
            Final year Computer Science Engineering student passionate about Android development, 
            backend engineering, and solving real-world problems with technology.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {specializations.map((spec, index) => (
          <ScrollReveal key={spec.title} delay={index * 0.1}>
            <GlassCard className="p-8 text-center space-y-4 relative overflow-hidden group">
              <div className={`absolute inset-0 bg-gradient-to-b ${spec.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 ${spec.color}`}>
                {spec.icon}
              </div>
              <h3 className="font-display text-heading-sm">{spec.title}</h3>
              <p className="text-on-surface-variant font-body text-body-sm leading-relaxed">
                {spec.description}
              </p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="mt-16 glass-card p-10 md:p-12 rounded-3xl text-center max-w-3xl mx-auto">
          <HiLightBulb className="w-10 h-10 text-primary mx-auto mb-4" />
          <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
            "I enjoy solving real-world problems using technology. Currently building an AI-powered 
            Smart Mechanic platform that connects car owners with verified mechanics through 
            intelligent diagnosis and seamless booking management."
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

