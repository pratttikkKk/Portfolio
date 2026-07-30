import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientText } from '@/components/ui/GradientText';
import { projects } from '@/data/projects';
import { HiArrowLeft, HiCheckCircle } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

export function SAMVEDCaseStudy() {
  const navigate = useNavigate();
  const project = projects.find(p => p.id === 'samved');
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-on-surface-variant">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-body text-body-sm"
        >
          <HiArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
      </div>

      <section className="relative">
        <div className="h-[50vh] relative overflow-hidden">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-2 glass-card rounded-full text-primary font-label text-xs uppercase tracking-widest mb-4">Case Study</span>
            <h1 className="font-display text-display-md leading-tight">{project.name}</h1>
            <p className="font-display text-heading-lg text-on-surface-variant mt-2">{project.tagline}</p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full font-label text-xs uppercase tracking-wider">Completed</span>
              {project.isPrivate && (
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full font-label text-xs uppercase tracking-wider">Private Repository</span>
              )}
            </div>

            <div className="flex flex-wrap gap-6 mt-6 text-on-surface-variant font-body text-body-sm">
              <div><span className="text-primary">Duration:</span> {project.duration}</div>
              <div><span className="text-primary">Role:</span> {project.role}</div>
              <div><span className="text-primary">Type:</span> {project.type}</div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        <ScrollReveal>
          <section>
            <span className="section-label">Overview</span>
            <h2 className="section-title">Project Overview</h2>
            <div className="grid lg:grid-cols-2 gap-12 mt-8">
              <div>
                <p className="text-on-surface-variant font-body text-body-lg leading-relaxed">{project.fullDescription}</p>
              </div>
              <div className="space-y-4">
                {project.metrics.map((metric) => (
                  <GlassCard key={metric.label} className="p-4 flex items-center justify-between">
                    <span className="font-body text-body-md">{metric.label}</span>
                    <span className="font-display text-heading-md text-primary">{metric.value}</span>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section>
            <span className="section-label">Story</span>
            <h2 className="section-title">Project Story</h2>
            <div className="space-y-6 mt-8">
              {project.story.map((part, i) => (
                <GlassCard key={part.title} className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-display text-heading-md mb-3">{part.title}</h3>
                      <p className="text-on-surface-variant font-body text-body-lg">{part.content}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section>
            <span className="section-label">Architecture</span>
            <h2 className="section-title">System Architecture</h2>
            <div className="space-y-4 mt-8">
              {project.architecture.map((layer, i) => (
                <motion.div key={layer.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <GlassCard className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-2xl">{layer.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-display text-heading-sm">{layer.name}</h3>
                        <p className="text-on-surface-variant font-body text-body-sm">{layer.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section>
            <span className="section-label">Tech Stack</span>
            <h2 className="section-title">Technologies Used</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {project.technologies.map((tech, i) => (
                <motion.div key={tech.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <GlassCard className="p-6 h-full">
                    <h3 className="font-display text-heading-sm">{tech.name}</h3>
                    <p className="text-on-surface-variant font-body text-body-sm mt-2">{tech.description}</p>
                    <p className="text-caption text-on-surface-variant/70 mt-2"><span className="text-primary">Why:</span> {tech.whyChosen}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section>
            <span className="section-label">Challenges</span>
            <h2 className="section-title">Engineering Challenges</h2>
            <div className="space-y-6 mt-8">
              {project.challenges.map((challenge) => (
                <motion.div key={challenge.problem} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <GlassCard className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-display text-heading-sm">{challenge.problem}</h3>
                      <span className="px-3 py-0.5 bg-primary/10 text-primary rounded-full text-caption">{challenge.difficulty}</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-caption text-on-surface-variant uppercase tracking-wider mb-1">Solution</h4>
                        <p className="text-on-surface-variant font-body text-body-sm">{challenge.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-caption text-on-surface-variant uppercase tracking-wider mb-1">Result</h4>
                        <p className="text-on-surface-variant font-body text-body-sm">{challenge.result}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section>
            <span className="section-label">Contributions</span>
            <h2 className="section-title">My Contributions</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {project.contributions.map((contribution, i) => (
                <motion.div key={contribution.area} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <GlassCard className="p-6 h-full">
                    <h3 className="font-display text-heading-sm text-primary mb-3">{contribution.area}</h3>
                    <p className="text-on-surface-variant font-body text-body-sm">{contribution.details}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section>
            <GlassCard className="p-10 text-center">
              <h2 className="section-title">Source Code</h2>
              <div className="mt-4 max-w-lg mx-auto">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-label text-sm uppercase tracking-wider mb-4">Private Repository</span>
                <p className="text-on-surface-variant font-body text-body-lg leading-relaxed">Source code is private. Contact for code walkthrough and architecture discussion.</p>
                <a href="https://github.com/pratttikkKk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 glass-card px-6 py-3 rounded-full hover:bg-white/[0.08] transition-all">
                  <FaGithub className="w-5 h-5" />
                  View GitHub Profile
                </a>
              </div>
            </GlassCard>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section>
            <GlassCard className="p-10 md:p-16 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border-primary/20 text-center">
              <span className="section-label">For Recruiters</span>
              <h2 className="section-title mb-6">Why This Project Matters</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {[
                  'Android Development with Jetpack Compose',
                  'On-device Machine Learning with TensorFlow Lite',
                  'Real-time communication with Socket.io',
                  'Wearable device integration',
                  'Sensor data processing',
                  'Battery optimization for background services',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 glass-card rounded-2xl">
                    <HiCheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="font-body text-body-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-on-surface-variant font-body text-body-lg mt-6">
                This project demonstrates <GradientText>AI/ML integration</GradientText> on mobile devices with real-time capabilities.
              </p>
            </GlassCard>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}

