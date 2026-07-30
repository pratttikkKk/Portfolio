import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { skills, skillCategories } from '@/data/skills';
import { HiCode, HiDeviceMobile, HiServer, HiDatabase, HiCog, HiLightningBolt } from 'react-icons/hi';
import { FaAndroid } from 'react-icons/fa';

const categoryIcons: Record<string, React.ReactNode> = {
  languages: <HiCode className="w-5 h-5" />,
  android: <FaAndroid className="w-5 h-5" />,
  backend: <HiServer className="w-5 h-5" />,
  database: <HiDatabase className="w-5 h-5" />,
  tools: <HiCog className="w-5 h-5" />,
  core: <HiLightningBolt className="w-5 h-5" />,
};

export function Skills() {
  return (
    <section id="skills" className="section-container bg-surface-container-lowest/50">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="section-label">Technical Arsenal</span>
          <h2 className="section-title">Tools & Technologies</h2>
          <p className="section-subtitle mx-auto">
            The tools and technologies I use to bring ideas to life, from concept to production.
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-12">
        {skillCategories.map((category, catIndex) => {
          const categorySkills = skills.filter((s) => s.category === category.id);
          if (categorySkills.length === 0) return null;

          return (
            <ScrollReveal key={category.id} delay={catIndex * 0.1}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {categoryIcons[category.id] || <HiCode className="w-5 h-5" />}
                  </div>
                  <h3 className="font-display text-heading-md">{category.label}</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                    >
                      <GlassCard className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-display text-heading-sm">{skill.name}</span>
                          <span className="text-primary font-bold font-body text-body-sm">
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                          />
                        </div>
                        {skill.description && (
                          <p className="text-on-surface-variant text-caption mt-3">{skill.description}</p>
                        )}
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}

