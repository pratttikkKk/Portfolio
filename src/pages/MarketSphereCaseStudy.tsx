import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { projects } from '@/data/projects';
import { HiArrowLeft, HiCheckCircle, HiClock } from 'react-icons/hi';

export function MarketSphereCaseStudy() {
  const navigate = useNavigate();
  const project = projects.find((item) => item.id === 'marketsphere');

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

      <section className="relative">
        <div className="h-[50vh] min-h-80 relative overflow-hidden">
          <img src={project.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/25" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-36 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 glass-card rounded-full text-primary font-label text-xs uppercase tracking-widest mb-4">
              Invoqe Internship Project
            </span>
            <h1 className="font-display text-display-md leading-tight">{project.name}</h1>
            <p className="font-display text-heading-lg text-on-surface-variant mt-2">{project.tagline}</p>

            <div className="flex flex-wrap gap-4 mt-6">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-label text-xs uppercase tracking-wider">
                In Development
              </span>
              <span className="px-4 py-2 glass-card rounded-full font-label text-xs uppercase tracking-wider">
                {project.duration}
              </span>
            </div>

            <p className="text-on-surface-variant font-body text-body-md mt-6 max-w-3xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        <ScrollReveal>
          <section>
            <span className="section-label">Overview</span>
            <h2 className="section-title">A Marketplace with Three Workflows</h2>
            <div className="grid lg:grid-cols-2 gap-10 mt-8">
              <p className="text-on-surface-variant font-body text-body-lg leading-relaxed">
                {project.fullDescription}
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {project.metrics.map((metric) => (
                  <GlassCard key={metric.label} className="p-5 text-center">
                    <div className="font-display text-heading-md text-primary">{metric.value}</div>
                    <div className="text-caption text-on-surface-variant mt-2">{metric.label}</div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section>
            <span className="section-label">Architecture</span>
            <h2 className="section-title">From Client to Persistence</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
              {project.architecture.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                >
                  <GlassCard className="p-6 h-full">
                    <span className="text-primary font-label text-xs uppercase tracking-wider">
                      Layer {index + 1}
                    </span>
                    <h3 className="font-display text-heading-sm mt-3">{layer.name}</h3>
                    <p className="text-on-surface-variant font-body text-body-sm mt-2">{layer.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section>
            <span className="section-label">Marketplace Capabilities</span>
            <h2 className="section-title">Customer, Seller, and Admin Operations</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {project.features.map((feature) => (
                <GlassCard key={feature.title} className="p-7 h-full">
                  <div className="flex items-start gap-3">
                    <HiCheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-display text-heading-sm">{feature.title}</h3>
                      <p className="text-on-surface-variant font-body text-body-sm mt-2">{feature.description}</p>
                      <p className="text-on-surface-variant/80 font-body text-body-sm mt-4">{feature.implementation}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section>
            <span className="section-label">Technology</span>
            <h2 className="section-title">Project Stack</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {project.technologies.map((technology) => (
                <GlassCard key={technology.name} className="p-5">
                  <h3 className="font-display text-heading-sm">{technology.name}</h3>
                  <p className="text-on-surface-variant font-body text-body-sm mt-2">{technology.description}</p>
                </GlassCard>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section>
            <span className="section-label">Engineering Focus</span>
            <h2 className="section-title">Important Backend Decisions</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {project.challenges.map((challenge) => (
                <GlassCard key={challenge.problem} className="p-7">
                  <h3 className="font-display text-heading-sm">{challenge.problem}</h3>
                  <p className="text-on-surface-variant font-body text-body-sm mt-4">{challenge.solution}</p>
                  <p className="text-primary font-body text-body-sm mt-3">{challenge.result}</p>
                </GlassCard>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section>
            <GlassCard className="p-8 md:p-10 border-primary/20">
              <div className="flex items-start gap-4">
                <HiClock className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <span className="section-label">Payment Status · In Progress</span>
                  <h2 className="font-display text-heading-md">Razorpay integration is not complete yet</h2>
                  <p className="text-on-surface-variant font-body text-body-md mt-3">
                    The current checkout uses a sandbox signature simulation, not a complete Razorpay Checkout flow.
                    Provider-backed checkout, server-side payment verification, webhook handling, and refunds remain
                    work in progress.
                  </p>
                </div>
              </div>
            </GlassCard>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section>
            <span className="section-label">My Work</span>
            <h2 className="section-title">Backend Development Internship</h2>
            <div className="grid md:grid-cols-2 gap-5 mt-8">
              {project.contributions.map((contribution) => (
                <GlassCard key={contribution.area} className="p-6">
                  <h3 className="font-display text-heading-sm text-primary">{contribution.area}</h3>
                  <p className="text-on-surface-variant font-body text-body-sm mt-3">{contribution.details}</p>
                </GlassCard>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
