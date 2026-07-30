import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { experiences, timelineEvents } from '@/data/experience';
import { HiBriefcase, HiAcademicCap, HiCalendar } from 'react-icons/hi';

const typeIcons = {
  internship: <HiBriefcase className="w-5 h-5" />,
  education: <HiAcademicCap className="w-5 h-5" />,
  certification: <HiCalendar className="w-5 h-5" />,
};

const typeColors = {
  internship: 'text-primary border-primary/30',
  education: 'text-secondary border-secondary/30',
  certification: 'text-accent border-accent/30',
};

export function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Experience */}
        <div>
          <ScrollReveal>
            <span className="section-label">Professional Journey</span>
            <h2 className="section-title">Experience</h2>
          </ScrollReveal>

          <div className="space-y-8 mt-10">
            {experiences.filter(e => e.type === 'internship').map((exp, index) => (
              <ScrollReveal key={exp.title} delay={index * 0.1}>
                <div className="relative pl-8 border-l border-white/10">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                  <div className="mb-2">
                    <span className="text-primary font-label text-xs uppercase tracking-wider">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="font-display text-heading-md">{exp.title}</h3>
                  <p className="text-on-surface-variant font-body text-body-md mb-3">{exp.organization}</p>
                  <p className="text-on-surface-variant/70 font-body text-body-sm leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 glass-card rounded-full text-caption text-on-surface-variant">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <ScrollReveal>
            <span className="section-label">Academic Excellence</span>
            <h2 className="section-title">Education</h2>
          </ScrollReveal>

          <div className="space-y-8 mt-10">
            {experiences.filter(e => e.type === 'education').map((edu, index) => (
              <ScrollReveal key={edu.title} delay={index * 0.1}>
                <div className="relative pl-8 border-l border-white/10">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
                  <div className="mb-2">
                    <span className="text-secondary font-label text-xs uppercase tracking-wider">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="font-display text-heading-md">{edu.title}</h3>
                  <p className="text-on-surface-variant font-body text-body-md mb-3">{edu.organization}</p>
                  <p className="text-on-surface-variant/70 font-body text-body-sm leading-relaxed">
                    {edu.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {edu.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 glass-card rounded-full text-caption text-on-surface-variant">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <ScrollReveal>
        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="section-label">Timeline</span>
            <h2 className="section-title">My Journey</h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-px bg-white/10 hidden md:block" />
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <GlassCard className="p-6 inline-block max-w-md">
                      <span className="text-primary font-label text-xs uppercase tracking-wider">
                        {event.date}
                      </span>
                      <h3 className="font-display text-heading-sm mt-1">{event.title}</h3>
                      <p className="text-on-surface-variant font-body text-body-sm mt-2">
                        {event.description}
                      </p>
                    </GlassCard>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(37,99,235,0.5)] z-10" />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

