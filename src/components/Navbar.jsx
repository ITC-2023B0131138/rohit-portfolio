import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Education', to: 'education' },
  { label: 'Achievements', to: 'achievements' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 50);
      setScrollProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="hero" smooth duration={600} className="cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <div className="relative w-9 h-9">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <polygon
                      points="18,2 34,10 34,26 18,34 2,26 2,10"
                      fill="none"
                      stroke="url(#navHex)"
                      strokeWidth="1.5"
                    />
                    <defs>
                      <linearGradient id="navHex" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00d4ff" />
                        <stop offset="100%" stopColor="#b347ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-sm gradient-text">
                    RK
                  </span>
                </div>
                <span className="font-display font-semibold text-white hidden sm:block">
                  Rohit<span className="text-cyan-400">.</span>
                </span>
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-80}
                  spy
                  onSetActive={() => setActiveSection(link.to)}
                  className="relative px-4 py-2 font-body text-sm text-slate-400 hover:text-white transition-colors cursor-pointer group"
                >
                  {activeSection === link.to && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-cyan-400/10 border border-cyan-400/20"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10 group-hover:text-cyan-400 transition-colors">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              {/* Dark/Light Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </motion.button>

              {/* Resume Button */}
              <motion.a
                href="/rohit_resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium text-cyan-400 border border-cyan-400/30 hover:border-cyan-400/70 hover:bg-cyan-400/10 transition-all btn-glow"
              >
                Resume
              </motion.a>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-white"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden glass border-t border-white/5 overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      smooth
                      duration={600}
                      offset={-80}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer font-body text-sm"
                    >
                      <span className="text-cyan-400 font-mono mr-2">0{i + 1}.</span>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <a
                  href="/rohit_resume.pdf"
                  download
                  className="mt-2 px-4 py-3 rounded-lg text-center text-xs font-mono text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/10 transition-all"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}