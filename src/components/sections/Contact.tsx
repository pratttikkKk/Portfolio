import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientText } from '@/components/ui/GradientText';
import { HiMail, HiPhone, HiLocationMarker, HiDocumentDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Contact() {
  return (
    <section id="contact" className="section-container">
      <ScrollReveal>
        <GlassCard className="p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[150px] -mr-48 -mt-48" aria-hidden="true" />
          
          <div className="max-w-3xl mx-auto relative z-10 space-y-8">
            <div className="text-center">
              <span className="section-label">Contact</span>
              <h2 className="section-title">
                Let's build something <GradientText>extraordinary</GradientText> together.
              </h2>
              <p className="section-subtitle mx-auto mt-4">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Currently seeking full-time roles starting 2025.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center shrink-0">
                  <HiMail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-caption text-on-surface-variant uppercase tracking-wider">Email</div>
                  <a href="mailto:pratikfarate33@gmail.com" className="font-body text-body-md hover:text-primary transition-colors">
                    pratikfarate33@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center shrink-0">
                  <HiPhone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-caption text-on-surface-variant uppercase tracking-wider">Phone</div>
                  <a href="tel:+919356121442" className="font-body text-body-md hover:text-secondary transition-colors">
                    +91 93561 21442
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center shrink-0">
                  <FaLinkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-caption text-on-surface-variant uppercase tracking-wider">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/pratik-farate-36bab1299" target="_blank" rel="noopener noreferrer" className="font-body text-body-md hover:text-primary transition-colors">
                    linkedin.com/in/pratik-farate-36bab1299
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center shrink-0">
                  <FaGithub className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-caption text-on-surface-variant uppercase tracking-wider">GitHub</div>
                  <a href="https://github.com/pratttikkKk" target="_blank" rel="noopener noreferrer" className="font-body text-body-md hover:text-secondary transition-colors">
                    github.com/pratttikkKk
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/pratik-suresh-farate.pdf"
                download="Pratik-Suresh-Farate-Resume.pdf"
                className="bg-primary text-on-primary font-label text-sm px-8 py-4 rounded-full hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 inline-flex items-center gap-2"
              >
                <HiDocumentDownload className="w-5 h-5" />
                Download Resume
              </a>
              <a
                href="https://github.com/pratttikkKk"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-2xl hover:text-primary transition-all"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pratik-farate-36bab1299"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-2xl hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </GlassCard>
      </ScrollReveal>
    </section>
  );
}

