import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { projects } from '@/data/projects';
import { HiArrowLeft, HiCheckCircle, HiLockClosed, HiSparkles, HiDatabase } from 'react-icons/hi';

const pipeline = [
  { label: 'Natural-language question', detail: 'A user asks about production, downtime, quality, or machine performance.', icon: HiSparkles, color: 'text-accent' },
  { label: 'Local LLM classifies intent', detail: 'Ollama/Gemma interprets the question; it does not supply trusted numeric results.', icon: HiSparkles, color: 'text-primary' },
  { label: 'Backend checks access', detail: 'JWT, role permissions, and machine-level scope are enforced before analysis.', icon: HiLockClosed, color: 'text-secondary' },
  { label: 'Pandas computes the answer', detail: 'Trusted analytics functions calculate metrics from the manufacturing data.', icon: HiDatabase, color: 'text-primary' },
  { label: 'Grounded result is explained', detail: 'The interface presents the calculated result in the conversational flow.', icon: HiCheckCircle, color: 'text-secondary' },
];

export function ProdiCaseStudy() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const project = projects.find((item) => item.id === 'prodi-ai-manufacturing');

  useEffect(() => {
    if (!project) return;

    const previousTitle = document.title;
    document.title = `${project.name} | Pratik Suresh Farate`;
    return () => {
      document.title = previousTitle;
    };
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-on-surface-variant">Project not found</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-body text-body-sm"
        >
          <HiArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
      </div>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={project.image} alt="" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background" />
          <motion.div
            className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-accent/25 blur-[120px]"
            animate={shouldReduceMotion ? undefined : { x: [0, -35, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/15 text-white font-label text-xs uppercase tracking-widest">
              <HiSparkles className="w-4 h-4 text-accent" />
              Hybrid AI · Manufacturing Analytics
            </span>
            <h1 className="font-display text-display-md lg:text-display leading-tight mt-7">
              <span className="block">Prodi AI</span>
              <span className="gradient-text">Manufacturing Analytics</span>
            </h1>
            <p className="font-display text-heading-md text-white mt-5">
              Ask factory data a question. Get an answer grounded in actual calculations.
            </p>
            <p className="text-slate-100 font-body text-body-lg max-w-3xl mt-5 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {project.technologies.slice(0, 6).map((technology, index) => (
                <motion.span
                  key={technology.name}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: shouldReduceMotion ? 0 : 0.25 + index * 0.07 }}
                  className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm backdrop-blur-md"
                >
                  {technology.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-24">
        <ScrollReveal>
          <section>
            <span className="section-label">The Core Idea</span>
            <h2 className="section-title">LLM understands. Analytics calculates.</h2>
            <p className="section-subtitle max-w-3xl">
              The model interprets a question and helps choose an analysis. The backend enforces access;
              Python and Pandas determine the numbers. This keeps AI useful without making it the source of truth.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {pipeline.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.label}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ delay: shouldReduceMotion ? 0 : index * 0.09, duration: shouldReduceMotion ? 0 : 0.5 }}
                    className="relative"
                  >
                    <GlassCard className="h-full p-6 border-white/20">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-heading-lg text-white/35">0{index + 1}</span>
                        <Icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      <h3 className="font-display text-heading-sm text-white mt-5">{step.label}</h3>
                      <p className="text-on-surface-variant font-body text-body-sm mt-3 leading-relaxed">{step.detail}</p>
                    </GlassCard>
                    {index < pipeline.length - 1 && (
                      <motion.div
                        className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-primary to-accent z-10"
                        initial={{ scaleX: 0, transformOrigin: 'left' }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: shouldReduceMotion ? 0 : 0.25 + index * 0.09, duration: shouldReduceMotion ? 0 : 0.4 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section>
            <span className="section-label">System Architecture</span>
            <h2 className="section-title">A clear path from question to insight</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
              {project.architecture.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: shouldReduceMotion ? 0 : index * 0.06 }}
                >
                  <GlassCard className="h-full p-6">
                    <span className="text-primary font-label text-xs uppercase tracking-wider">Layer {index + 1}</span>
                    <h3 className="font-display text-heading-sm text-white mt-3">{layer.name}</h3>
                    <p className="text-on-surface-variant font-body text-body-sm mt-2">{layer.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section>
            <span className="section-label">Manufacturing Analytics</span>
            <h2 className="section-title">Operational questions, grounded answers</h2>
            <div className="grid md:grid-cols-2 gap-5 mt-8">
              {project.features.slice(2, 3).map((feature) => (
                <GlassCard key={feature.title} className="p-7 md:col-span-2 border-primary/30">
                  <h3 className="font-display text-heading-md text-white">{feature.title}</h3>
                  <p className="text-on-surface-variant font-body text-body-md mt-3">{feature.description}</p>
                  <p className="text-slate-300 font-body text-body-sm mt-4">{feature.implementation}</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {['Production & rejection rate', 'Downtime by machine/reason', 'Quality & non-conformance', 'Machine comparison', 'Cycle time & OEE-related'].map((item) => (
                      <span key={item} className="px-3 py-2 rounded-xl border border-white/15 bg-white/[0.06] text-white text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              ))}

              {project.features.slice(0, 2).map((feature) => (
                <GlassCard key={feature.title} className="p-7">
                  <h3 className="font-display text-heading-sm text-white">{feature.title}</h3>
                  <p className="text-on-surface-variant font-body text-body-sm mt-3">{feature.description}</p>
                  <p className="text-slate-300 font-body text-body-sm mt-4">{feature.implementation}</p>
                </GlassCard>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="grid lg:grid-cols-2 gap-6">
            <GlassCard className="p-8 border-secondary/30">
              <span className="section-label">Security by design</span>
              <h2 className="font-display text-heading-md text-white">AI does not grant access</h2>
              <p className="text-on-surface-variant font-body text-body-md mt-4">
                JWT identity, role permissions, and machine-level data scope are checked by the backend before
                an analytics function runs. LLM intent output is treated as input to validate—not as authority.
              </p>
            </GlassCard>
            <GlassCard className="p-8 border-accent/30">
              <span className="section-label">Data architecture</span>
              <h2 className="font-display text-heading-md text-white">Analytics data ≠ chat history</h2>
              <p className="text-on-surface-variant font-body text-body-md mt-4">
                Manufacturing analytics currently use prototype CSV datasets through a data-access boundary.
                PostgreSQL and SQLAlchemy are used for conversation persistence, keeping application history separate
                from factory analytics data.
              </p>
            </GlassCard>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section>
            <span className="section-label">Technology</span>
            <h2 className="section-title">Built across the full stack</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {project.technologies.map((technology) => (
                <GlassCard key={technology.name} className="p-5">
                  <h3 className="font-display text-heading-sm text-white">{technology.name}</h3>
                  <p className="text-on-surface-variant font-body text-body-sm mt-2">{technology.description}</p>
                </GlassCard>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section>
            <span className="section-label">Engineering Challenges</span>
            <h2 className="section-title">What the architecture has to get right</h2>
            <div className="grid md:grid-cols-3 gap-5 mt-8">
              {project.challenges.map((challenge) => (
                <GlassCard key={challenge.problem} className="p-6 h-full">
                  <h3 className="font-display text-heading-sm text-white">{challenge.problem}</h3>
                  <p className="text-on-surface-variant font-body text-body-sm mt-4">{challenge.solution}</p>
                  <p className="text-secondary font-body text-body-sm mt-4">{challenge.result}</p>
                </GlassCard>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section>
            <GlassCard className="p-8 md:p-10 border-primary/35 bg-gradient-to-br from-primary/15 via-white/[0.04] to-accent/15">
              <span className="section-label">Current development focus</span>
              <h2 className="font-display text-heading-md text-white">Verify persistent conversations end to end</h2>
              <p className="text-slate-100 font-body text-body-md max-w-4xl mt-4 leading-relaxed">
                The project notes report successful API startup and login, but a PostgreSQL connection timeout
                when conversation operations are used. The API and login path are not the reported failure;
                conversation persistence needs a reachable database and end-to-end verification.
              </p>
            </GlassCard>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
