import { motion, useReducedMotion } from 'framer-motion';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { HiDocumentDownload, HiEye } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaAndroid, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiKotlin } from 'react-icons/si';
import { GradientText } from '@/components/ui/GradientText';

const words = ['Backend Developer', 'Android Engineer', 'Applied AI Builder', 'Problem Solver'];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const typedText = useTypingAnimation(words, 80, 40, 2000);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden bg-background" aria-hidden="true">
        <div className="hero-grid absolute inset-0 opacity-50" />
        <motion.div
          className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-primary/30 blur-[130px]"
          animate={shouldReduceMotion ? undefined : { x: [0, 80, 0], y: [0, 45, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-40 top-1/4 h-[30rem] w-[30rem] rounded-full bg-accent/25 blur-[130px]"
          animate={shouldReduceMotion ? undefined : { x: [0, -65, 0], y: [0, -55, 0], scale: [1.1, 0.9, 1.1] }}
          transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-60 left-1/3 h-[28rem] w-[28rem] rounded-full bg-secondary/15 blur-[120px]"
          animate={shouldReduceMotion ? undefined : { x: [0, 65, 0], y: [0, -40, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/20 to-background/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.2, duration: shouldReduceMotion ? 0 : 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-text font-label text-xs uppercase tracking-widest">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-70 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
                </span>
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.3, duration: shouldReduceMotion ? 0 : 0.6 }}
              className="font-display text-display-md lg:text-display leading-tight drop-shadow-[0_8px_38px_rgba(15,23,42,0.6)]"
            >
              Pratik Suresh{' '}
              <GradientText as="span">Farate</GradientText>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.5, duration: shouldReduceMotion ? 0 : 0.6 }}
              className="h-12 flex items-center"
            >
              <span className="font-display text-heading-lg text-white">
                {shouldReduceMotion ? words[0] : typedText}
                {!shouldReduceMotion && <span className="animate-pulse ml-0.5 text-secondary">|</span>}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-slate-100 font-body text-body-lg max-w-lg leading-relaxed drop-shadow-md"
            >
              Welcome! I build useful software across Android, backend, and applied AI—from
              polished Kotlin apps and scalable APIs to conversational analytics grounded in real data.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="/#projects"
                className="bg-primary text-white font-label text-sm px-8 py-4 rounded-full hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 inline-flex items-center gap-2"
              >
                <HiEye className="w-5 h-5" />
                View Projects
              </a>
              <a
                href="/pratik-suresh-farate.pdf"
                download="Pratik-Suresh-Farate-Resume.pdf"
                className="glass-card font-label text-sm px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-white/[0.08] transition-all"
              >
                <HiDocumentDownload className="w-5 h-5" />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex gap-4 pt-2"
            >
              <a
                href="https://github.com/pratttikkKk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-xl hover:text-primary transition-all"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/pratik-farate-36bab1299"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-xl hover:text-primary transition-all"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image & Floating Icons */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.3, ease: 'easeOut' }}
            className="relative flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full" />
            
            <div className="relative z-10">
              {/* Profile Image */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden glass-card p-2"
              >
                <img
                  src="/ProfilePic.jpeg"
                  alt="Pratik Suresh Farate"
                  className="w-full h-full object-cover rounded-2xl"
                  width={384}
                  height={384}
                />
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 glass-card p-4 rounded-2xl"
              >
                <FaAndroid className="text-primary text-3xl" />
              </motion.div>

              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -12, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl"
              >
                <FaNodeJs className="text-secondary text-3xl" />
              </motion.div>

              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -8, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -right-12 glass-card p-3 rounded-2xl"
              >
                <FaDatabase className="text-accent text-2xl" />
              </motion.div>

              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -14, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute top-1/4 -left-12 glass-card p-3 rounded-2xl"
              >
                <SiKotlin className="text-accent text-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
