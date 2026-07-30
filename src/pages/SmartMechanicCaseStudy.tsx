import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientText } from '@/components/ui/GradientText';
import { projects } from '@/data/projects';
import { HiArrowLeft, HiExternalLink, HiCode, HiDocumentDownload, HiCheckCircle, HiXCircle, HiClock, HiShieldCheck } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

export function SmartMechanicCaseStudy() {
  const navigate = useNavigate();
  const project = projects.find(p => p.id === 'smart-mechanic');
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-on-surface-variant">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-body text-body-sm"
        >
          <HiArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
      </div>

      {/* 1. Hero Banner */}
      <section className="relative">
        <div className="h-[60vh] relative overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 glass-card rounded-full text-primary font-label text-xs uppercase tracking-widest mb-4">
              Case Study
            </span>
            <h1 className="font-display text-display-md lg:text-display leading-tight">
              {project.name}
            </h1>
            <p className="font-display text-heading-lg text-on-surface-variant mt-2">
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-label text-xs uppercase tracking-wider">
                {project.status === 'in-development' ? 'In Development' : project.status}
              </span>
              {project.isPrivate && (
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full font-label text-xs uppercase tracking-wider">
                  Private Repository
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-6 mt-6 text-on-surface-variant font-body text-body-sm">
              <div><span className="text-primary">Duration:</span> {project.duration}</div>
              <div><span className="text-primary">Role:</span> {project.role}</div>
              <div><span className="text-primary">Type:</span> {project.type}</div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {project.technologies.slice(0, 8).map(tech => (
                <span key={tech.name} className="px-3 py-1 glass-card rounded-full text-caption text-on-surface-variant">
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary font-label text-sm px-8 py-4 rounded-full hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 inline-flex items-center gap-2">
                  <HiExternalLink className="w-5 h-5" />
                  View Demo
                </a>
              )}
              <a href="https://github.com/pratttikkKk" target="_blank" rel="noopener noreferrer" className="glass-card font-label text-sm px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-white/[0.08] transition-all">
                <FaGithub className="w-5 h-5" />
                GitHub
              </a>
              <a href="/pratik-suresh-farate.pdf" download="Pratik-Suresh-Farate-Resume.pdf" className="glass-card font-label text-sm px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-white/[0.08] transition-all">
                <HiDocumentDownload className="w-5 h-5" />
                Download Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-32">
        {/* 2. Project Overview */}
        <ScrollReveal>
          <section>
            <span className="section-label">Overview</span>
            <h2 className="section-title">Project Overview</h2>
            <div className="grid lg:grid-cols-2 gap-12 mt-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-heading-md text-primary mb-3">The Problem</h3>
                  <p className="text-on-surface-variant font-body text-body-lg leading-relaxed">
                    Car owners struggle to find reliable, nearby mechanics. Service quality is unknown, 
                    pricing is not transparent, and there's no way to track service progress. Meanwhile, 
                    skilled mechanics lack a digital platform to showcase their work and manage bookings efficiently.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-heading-md text-secondary mb-3">The Solution</h3>
                  <p className="text-on-surface-variant font-body text-body-lg leading-relaxed">
                    A comprehensive platform connecting car owners with verified mechanics. Features include 
                    AI-powered preliminary diagnosis, real-time booking tracking, role-based dashboards, 
                    and transparent reviews. Built with modern Android and backend technologies.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-display text-heading-md text-accent mb-3">Key Highlights</h3>
                {[
                  'AI-powered vehicle diagnosis using Gemini API',
                  'Real-time GPS-based mechanic discovery',
                  'End-to-end booking management system',
                  'Multi-role dashboard (Customer, Mechanic, Admin)',
                  'JWT authentication with refresh tokens',
                  'MongoDB with geo-spatial queries',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <HiCheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-on-surface-variant font-body text-body-md">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 3. Project Story */}
        <ScrollReveal delay={0.1}>
          <section>
            <span className="section-label">The Journey</span>
            <h2 className="section-title">Project Story</h2>
            <div className="space-y-8 mt-8">
              {project.story.map((part, i) => (
                <ScrollReveal key={part.title} delay={i * 0.1}>
                  <GlassCard className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-display text-heading-md mb-3">{part.title}</h3>
                        <p className="text-on-surface-variant font-body text-body-lg leading-relaxed">{part.content}</p>
                      </div>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 4. System Architecture */}
        <ScrollReveal delay={0.1}>
          <section>
            <span className="section-label">Architecture</span>
            <h2 className="section-title">System Architecture</h2>
            <p className="section-subtitle mt-4 mb-8">
              A layered architecture designed for scalability, security, and real-time performance.
            </p>
            
            <div className="relative">
              {/* Architecture Flow */}
              <div className="space-y-6">
                {project.architecture.map((layer, i) => (
                  <motion.div
                    key={layer.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <GlassCard className="p-6 hover:border-primary/30 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <span className="text-primary text-2xl material-symbols-outlined">{layer.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display text-heading-sm">{layer.name}</h3>
                          <p className="text-on-surface-variant font-body text-body-sm">{layer.description}</p>
                        </div>
                        {i < project.architecture.length - 1 && (
                          <div className="hidden md:flex flex-col items-center text-primary">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                          </div>
                        )}
                      </div>
                      {layer.children && layer.children.length > 0 && (
                        <div className="mt-4 ml-16 space-y-2">
                          {layer.children.map(child => (
                            <div key={child.name} className="flex items-center gap-3 text-on-surface-variant">
                              <div className="w-2 h-2 rounded-full bg-primary/50" />
                              <span className="font-body text-body-sm">{child.name}</span>
                              <span className="text-caption">— {child.description}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 5. Tech Stack */}
        <ScrollReveal delay={0.1}>
          <section>
            <span className="section-label">Technology</span>
            <h2 className="section-title">Tech Stack</h2>
            <p className="section-subtitle mt-4 mb-8">
              Carefully selected technologies for performance, scalability, and developer experience.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.technologies.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                >
                  <GlassCard className="p-6 h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-3 h-3 rounded-full ${
                        tech.category === 'frontend' ? 'bg-primary' :
                        tech.category === 'backend' ? 'bg-secondary' :
                        tech.category === 'database' ? 'bg-accent' : 'bg-on-surface'
                      }`} />
                      <h3 className="font-display text-heading-sm">{tech.name}</h3>
                    </div>
                    <p className="text-on-surface-variant font-body text-body-sm mb-3">{tech.description}</p>
                    <div className="text-caption text-on-surface-variant/70">
                      <span className="text-primary">Why chosen:</span> {tech.whyChosen}
                    </div>
                    <div className="text-caption text-on-surface-variant/50 mt-1">
                      Alternatives considered: {tech.alternatives.join(', ')}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 6. Features */}
        <ScrollReveal delay={0.1}>
          <section>
            <span className="section-label">Features</span>
            <h2 className="section-title">Everything You Need</h2>
            <p className="section-subtitle mt-4 mb-8">
              Comprehensive feature set designed for all stakeholders in the vehicle service ecosystem.
            </p>

            <div className="space-y-6">
              {project.features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <GlassCard className="p-8 group">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                        <span className="text-3xl text-primary material-symbols-outlined">{feature.icon}</span>
                      </div>
                      <div className="flex-1 space-y-3">
                        <h3 className="font-display text-heading-md">{feature.title}</h3>
                        <p className="text-on-surface-variant font-body text-body-lg">{feature.description}</p>
                        
                        <details className="group/details">
                          <summary className="cursor-pointer text-primary font-label text-sm hover:text-primary/80 transition-colors">
                            Technical Implementation
                          </summary>
                          <div className="mt-3 space-y-4 p-4 glass-card rounded-xl">
                            <div>
                              <h4 className="font-body text-body-sm font-semibold text-primary mb-1">Implementation</h4>
                              <p className="text-on-surface-variant font-body text-body-sm">{feature.implementation}</p>
                            </div>
                            <div>
                              <h4 className="font-body text-body-sm font-semibold text-secondary mb-1">Challenges</h4>
                              <p className="text-on-surface-variant font-body text-body-sm">{feature.challenges}</p>
                            </div>
                            <div>
                              <h4 className="font-body text-body-sm font-semibold text-accent mb-1">Future Improvements</h4>
                              <p className="text-on-surface-variant font-body text-body-sm">{feature.futureImprovements}</p>
                            </div>
                          </div>
                        </details>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 7. Database Design */}
        <ScrollReveal delay={0.1}>
          <section>
            <span className="section-label">Data</span>
            <h2 className="section-title">Database Design</h2>
            <p className="section-subtitle mt-4 mb-8">
              MongoDB collections designed for optimal performance and relationships.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.database.map((collection, i) => (
                <motion.div
                  key={collection.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <GlassCard className="p-6 h-full">
                    <h3 className="font-display text-heading-sm text-primary mb-2">{collection.name}</h3>
                    <p className="text-on-surface-variant font-body text-body-sm mb-4">{collection.purpose}</p>
                    
                    <div className="space-y-2">
                      <div>
                        <span className="text-caption text-on-surface-variant uppercase tracking-wider">Fields</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {collection.fields.map(f => (
                            <span key={f} className="px-2 py-0.5 bg-primary/5 text-caption rounded border border-primary/10">{f}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-caption text-on-surface-variant uppercase tracking-wider">Indexes</span>
                        <p className="text-on-surface-variant/70 text-caption mt-1">{collection.indexes.join(', ')}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 8. API Documentation */}
        <ScrollReveal delay={0.1}>
          <section>
            <span className="section-label">APIs</span>
            <h2 className="section-title">API Documentation</h2>
            <p className="section-subtitle mt-4 mb-8">
              RESTful API design with consistent patterns, authentication, and error handling.
            </p>

            <div className="space-y-8">
              {project.apiGroups.map((group, gi) => (
                <div key={group.group}>
                  <GlassCard className="p-6 mb-4">
                    <h3 className="font-display text-heading-md text-primary">{group.group}</h3>
                    <p className="text-on-surface-variant font-body text-body-sm">{group.description}</p>
                  </GlassCard>

                  <div className="space-y-4">
                    {group.endpoints.map((endpoint, ei) => (
                      <motion.div
                        key={endpoint.endpoint}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: ei * 0.05 }}
                      >
                        <GlassCard className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <span className={`px-3 py-1 rounded text-xs font-bold uppercase ${
                              endpoint.method === 'GET' ? 'bg-secondary/10 text-secondary' :
                              endpoint.method === 'POST' ? 'bg-primary/10 text-primary' :
                              endpoint.method === 'PATCH' ? 'bg-accent/10 text-accent' :
                              'bg-on-surface/10 text-on-surface'
                            }`}>
                              {endpoint.method}
                            </span>
                            <code className="font-mono text-body-sm">{endpoint.endpoint}</code>
                            <span className="text-caption text-on-surface-variant ml-auto">{endpoint.auth}</span>
                          </div>

                          <details>
                            <summary className="cursor-pointer text-primary font-label text-sm hover:text-primary/80 transition-colors">
                              View Details
                            </summary>
                            <div className="mt-4 space-y-4">
                              <div>
                                <h4 className="text-caption text-on-surface-variant uppercase tracking-wider mb-1">Headers</h4>
                                <pre className="bg-black/30 p-3 rounded-lg text-caption font-mono overflow-x-auto">
                                  {endpoint.headers.join('\n')}
                                </pre>
                              </div>
                              {endpoint.body !== 'None' && (
                                <div>
                                  <h4 className="text-caption text-on-surface-variant uppercase tracking-wider mb-1">Request Body</h4>
                                  <pre className="bg-black/30 p-3 rounded-lg text-caption font-mono overflow-x-auto">
                                    {endpoint.body}
                                  </pre>
                                </div>
                              )}
                              <div>
                                <h4 className="text-caption text-on-surface-variant uppercase tracking-wider mb-1">Sample Request</h4>
                                <pre className="bg-black/30 p-3 rounded-lg text-caption font-mono overflow-x-auto">
                                  {endpoint.sampleRequest}
                                </pre>
                              </div>
                              <div>
                                <h4 className="text-caption text-on-surface-variant uppercase tracking-wider mb-1">Sample Response</h4>
                                <pre className="bg-black/30 p-3 rounded-lg text-caption font-mono overflow-x-auto">
                                  {endpoint.sampleResponse}
                                </pre>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="text-caption text-on-surface-variant uppercase tracking-wider mb-1">Status Codes</h4>
                                  <ul className="space-y-1">
                                    {endpoint.statusCodes.map(code => (
                                      <li key={code} className="text-caption text-on-surface-variant flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                        {code}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="text-caption text-on-surface-variant uppercase tracking-wider mb-1">Possible Errors</h4>
                                  <ul className="space-y-1">
                                    {endpoint.errors.map(err => (
                                      <li key={err} className="text-caption text-on-surface-variant flex items-center gap-2">
                                        <HiXCircle className="w-3 h-3 text-error" />
                                        {err}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </details>
                        </GlassCard>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 9. Challenges */}
        <ScrollReveal delay={0.1}>
          <section>
            <span className="section-label">Challenges</span>
            <h2 className="section-title">Engineering Challenges</h2>
            <p className="section-subtitle mt-4 mb-8">
              Real problems encountered during development and how they were solved.
            </p>

            <div className="space-y-6">
              {project.challenges.map((challenge, i) => (
                <motion.div
                  key={challenge.problem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <HiShieldCheck className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="font-display text-heading-sm">{challenge.problem}</h3>
                          <span className="px-3 py-0.5 bg-primary/10 text-primary rounded-full text-caption">
                            {challenge.difficulty}
                          </span>
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
                        <div className="mt-4">
                          <h4 className="text-caption text-on-surface-variant uppercase tracking-wider mb-1">Lessons Learned</h4>
                          <div className="flex flex-wrap gap-2">
                            {challenge.lessons.map(lesson => (
                              <span key={lesson} className="px-3 py-1 glass-card rounded-full text-caption text-on-surface-variant">
                                {lesson}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 10. Development Timeline */}
        <ScrollReveal delay={0.1}>
          <section>
            <span className="section-label">Timeline</span>
            <h2 className="section-title">Development Journey</h2>
            <p className="section-subtitle mt-4 mb-8">
              From concept to deployment — the complete development lifecycle.
            </p>

            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-px bg-white/10" />
              <div className="space-y-8">
                {project.timeline.map((event, i) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-20"
                  >
                    <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-primary shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                    <GlassCard className="p-6">
                      <span className="text-primary font-label text-xs uppercase tracking-wider">{event.date}</span>
                      <h3 className="font-display text-heading-sm mt-1">{event.title}</h3>
                      <p className="text-on-surface-variant font-body text-body-sm mt-2">{event.description}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 11. Future Roadmap */}
        <ScrollReveal delay={0.1}>
          <section>
            <span className="section-label">Roadmap</span>
            <h2 className="section-title">Future Vision</h2>
            <p className="section-subtitle mt-4 mb-8">
              Exciting features planned for future releases.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.roadmap.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <GlassCard className={`p-6 h-full ${
                    item.status === 'in-progress' ? 'border-primary/30' : ''
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl text-primary material-symbols-outlined">{item.icon}</span>
                      <h3 className="font-display text-heading-sm">{item.title}</h3>
                    </div>
                    <p className="text-on-surface-variant font-body text-body-sm mb-3">{item.description}</p>
                    <span className={`text-caption uppercase tracking-wider ${
                      item.status === 'completed' ? 'text-secondary' :
                      item.status === 'in-progress' ? 'text-primary' : 'text-on-surface-variant/50'
                    }`}>
                      {item.status === 'in-progress' ? 'In Progress' : item.status}
                    </span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 12. Contributions */}
        <ScrollReveal delay={0.1}>
          <section>
            <span className="section-label">My Role</span>
            <h2 className="section-title">Contributions</h2>
            <p className="section-subtitle mt-4 mb-8">
              Everything I designed, developed, and delivered for this project.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {project.contributions.map((contribution, i) => (
                <motion.div
                  key={contribution.area}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <GlassCard className="p-6 h-full">
                    <h3 className="font-display text-heading-sm text-primary mb-3">{contribution.area}</h3>
                    <p className="text-on-surface-variant font-body text-body-sm">{contribution.details}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 13. Learnings */}
        <ScrollReveal delay={0.1}>
          <section>
            <span className="section-label">Growth</span>
            <h2 className="section-title">Learnings</h2>
            <p className="section-subtitle mt-4 mb-8">
              Technical and professional skills gained through this project.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {project.learnings.map((learning, i) => (
                <motion.div
                  key={learning.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <GlassCard className="p-6 h-full">
                    <h3 className="font-display text-heading-sm text-secondary mb-3">{learning.category}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {learning.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 glass-card rounded-full text-caption text-on-surface-variant">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-on-surface-variant font-body text-body-sm">{learning.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 14. Metrics */}
        <ScrollReveal delay={0.1}>
          <section>
            <span className="section-label">Impact</span>
            <h2 className="section-title">Project Metrics</h2>
            <p className="section-subtitle mt-4 mb-8">
              Key performance indicators and project statistics.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {project.metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, type: 'spring' }}
                >
                  <GlassCard className="p-6 text-center">
                    <div className="font-display text-heading-xl text-primary mb-2">{metric.value}</div>
                    <div className="text-caption text-on-surface-variant uppercase tracking-wider">{metric.label}</div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 15. Source Code */}
        <ScrollReveal delay={0.1}>
          <section>
            <GlassCard className="p-10 text-center">
              <HiCode className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="section-title">Source Code</h2>
              <div className="mt-4 max-w-lg mx-auto">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-label text-sm uppercase tracking-wider mb-4">
                  Private Repository
                </span>
                <p className="text-on-surface-variant font-body text-body-lg leading-relaxed">
                  Source code is private due to ongoing intellectual property protection. 
                  Architecture documentation and code walkthrough are available upon request 
                  for serious hiring opportunities.
                </p>
                <a
                  href="https://github.com/pratttikkKk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 glass-card px-6 py-3 rounded-full hover:bg-white/[0.08] transition-all"
                >
                  <FaGithub className="w-5 h-5" />
                  View GitHub Profile
                </a>
              </div>
            </GlassCard>
          </section>
        </ScrollReveal>

        {/* 16. Recruiter Section */}
        <ScrollReveal delay={0.1}>
          <section>
            <GlassCard className="p-10 md:p-16 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border-primary/20">
              <div className="text-center mb-8">
                <span className="section-label">For Recruiters</span>
                <h2 className="section-title">Why This Project Matters</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {[
                  { label: 'Android Development', desc: 'Modern Jetpack Compose with MVVM' },
                  { label: 'Backend Development', desc: 'Node.js with Express and REST APIs' },
                  { label: 'API Design', desc: '15+ well-documented RESTful endpoints' },
                  { label: 'Authentication', desc: 'JWT with refresh token rotation' },
                  { label: 'Database Design', desc: 'MongoDB with geo-spatial queries' },
                  { label: 'System Design', desc: 'Scalable layered architecture' },
                  { label: 'Problem Solving', desc: 'Complex state management & edge cases' },
                  { label: 'Clean Architecture', desc: 'Separation of concerns, reusable code' },
                  { label: 'AI Integration', desc: 'Gemini API for intelligent features' },
                ].map((item, i) => (
                  <div key={item.label} className="flex items-start gap-3 p-4 glass-card rounded-2xl">
                    <HiCheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="font-body text-body-sm font-semibold">{item.label}</div>
                      <div className="text-caption text-on-surface-variant">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-on-surface-variant font-body text-body-lg">
                  This project demonstrates <GradientText>production-ready engineering skills</GradientText> 
                  across the full stack. Ready to discuss this and other projects in detail.
                </p>
              </div>
            </GlassCard>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}

