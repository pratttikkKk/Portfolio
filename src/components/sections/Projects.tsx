import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { projects } from '@/data/projects';
import { HiArrowRight, HiCode, HiExternalLink } from 'react-icons/hi';

const statusColors = {
  'completed': 'text-secondary bg-secondary/10',
  'in-development': 'text-primary bg-primary/10',
  'production-ready': 'text-accent bg-accent/10',
};

export function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="section-container">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="section-label">Selected Work · {projects.length} Projects</span>
          <h2 className="section-title">
            Ideas built into <span className="gradient-text">real products</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Explore how I bring Android, backend, marketplace, and applied-AI ideas to life.
            Open a case study for the architecture, decisions, and engineering details.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.15}>
            <GlassCard
              className="overflow-hidden group cursor-pointer"
              onClick={() => navigate(`/project/${project.id}`)}
              glowColor={index === 0 ? 'rgba(37, 99, 235, 0.2)' : 'rgba(20, 184, 166, 0.2)'}
            >
              {/* Project Image */}
              <div className="h-64 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/20 to-primary/10" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    statusColors[project.status]
                  }`}>
                    {project.status === 'in-development' ? 'In Development' : 
                     project.status === 'production-ready' ? 'Production Ready' : 'Completed'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-heading-lg group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-on-surface-variant font-body text-body-sm mt-1">
                      {project.tagline}
                    </p>
                  </div>
                  {project.isPrivate && (
                    <span className="px-2 py-1 bg-white/5 rounded text-caption text-on-surface-variant border border-white/10">
                      Private
                    </span>
                  )}
                </div>

                <p className="text-on-surface-variant font-body text-body-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech.name}
                      className="px-3 py-1 glass-card rounded-full text-caption text-on-surface-variant"
                    >
                      {tech.name}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-3 py-1 glass-card rounded-full text-caption text-primary">
                      +{project.technologies.length - 6}
                    </span>
                  )}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-2">
                  {project.metrics.slice(0, 3).map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="font-display text-heading-sm text-primary">{metric.value}</div>
                      <div className="text-caption text-on-surface-variant">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-2">
                  <span className="inline-flex items-center gap-2 text-primary font-label text-sm group-hover:gap-3 transition-all">
                    View Case Study
                    <HiArrowRight className="w-4 h-4" />
                  </span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 glass-card rounded-lg hover:text-primary transition-colors"
                      aria-label={`${project.name} GitHub`}
                    >
                      <HiCode className="w-4 h-4" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 glass-card rounded-lg hover:text-primary transition-colors"
                      aria-label={`${project.name} Demo`}
                    >
                      <HiExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
