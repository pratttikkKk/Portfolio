import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { useActiveSection } from '@/hooks/useActiveSection';

const navLinks = [
  { label: 'Home', href: '/#home', section: 'home' },
  { label: 'About', href: '/#about', section: 'about' },
  { label: 'Skills', href: '/#skills', section: 'skills' },
  { label: 'Projects', href: '/#projects', section: 'projects' },
  { label: 'Experience', href: '/#experience', section: 'experience' },
  { label: 'Contact', href: '/#contact', section: 'contact' },
];

const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const activeSection = useActiveSection(sectionIds);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="font-display text-heading-md font-bold text-primary hover:text-primary/80 transition-colors"
          >
            PF
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              isHomePage ? (
                <a
                  key={link.section}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-body text-body-sm uppercase tracking-wider transition-all duration-300 py-2 ${
                    activeSection === link.section
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-on-surface-variant hover:text-text'
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.section}
                  to={link.href}
                  className="font-body text-body-sm uppercase tracking-wider text-on-surface-variant hover:text-text transition-colors py-2"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="/pratik-suresh-farate.pdf"
              download="Pratik-Suresh-Farate-Resume.pdf"
              className="bg-primary text-on-primary font-label text-sm px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 inline-flex items-center gap-2"
            >
              Download Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2.5 rounded-xl glass-card touch-target"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) =>
                isHomePage ? (
                  <a
                    key={link.section}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`py-3 px-2 rounded-xl font-body text-body-sm uppercase tracking-wider transition-colors ${
                      activeSection === link.section
                        ? 'text-primary bg-primary/5'
                        : 'text-on-surface-variant hover:text-text hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.section}
                    to={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="py-3 px-2 rounded-xl font-body text-body-sm uppercase tracking-wider text-on-surface-variant hover:text-text hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href="/pratik-suresh-farate.pdf"
                download="Pratik-Suresh-Farate-Resume.pdf"
                className="mt-2 bg-primary text-on-primary font-label text-sm px-5 py-3 rounded-full text-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

