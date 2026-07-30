import { Link } from 'react-router-dom';
import { HiArrowUp } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-dim border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center gap-8">
          <Link to="/" className="font-display text-heading-md font-bold text-primary">
            PF
          </Link>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="/#home" className="text-on-surface-variant hover:text-primary transition-colors font-body text-body-sm">
              Home
            </a>
            <a href="/#projects" className="text-on-surface-variant hover:text-primary transition-colors font-body text-body-sm">
              Projects
            </a>
            <a href="/#experience" className="text-on-surface-variant hover:text-primary transition-colors font-body text-body-sm">
              Experience
            </a>
            <a
              href="/pratik-suresh-farate.pdf"
              download="Pratik-Suresh-Farate-Resume.pdf"
              className="text-on-surface-variant hover:text-primary transition-colors font-body text-body-sm"
            >
              Resume
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/pratttikkKk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-xl hover:text-primary transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/pratik-farate-36bab1299"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-xl hover:text-primary transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="text-caption text-on-surface-variant text-center">
            © {new Date().getFullYear()} Pratik Suresh Farate. Built with precision and passion.
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 glass-card rounded-full hover:translate-y-[-2px] transition-all touch-target"
            aria-label="Back to top"
          >
            <HiArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

