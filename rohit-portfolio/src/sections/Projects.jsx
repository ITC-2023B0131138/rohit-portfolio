import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { SectionHeader } from './About';

const projects = [
  {
    id: 1,
    title: 'Anime Bookstore',
    category: 'Full Stack',
    description:
      'A full-stack e-commerce platform for anime-themed books with user authentication, cart management, and order tracking. Built with React frontend and Node.js/MongoDB backend.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Tailwind'],
    color: 'cyan',
    icon: '📚',
    github: 'https://github.com/ITC-2023B0131138',
    live: null,
    featured: true,
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Expense Tracker',
    category: 'Full Stack',
    description:
      'A personal finance management app with real-time expense tracking, category-wise analytics, budget alerts, and visual charts. Features user authentication and data persistence.',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Bootstrap'],
    color: 'green',
    icon: '💰',
    github: 'https://github.com/ITC-2023B0131138',
    live: null,
    featured: true,
    status: 'Completed',
  },
  {
    id: 3,
    title: 'Trading Bot',
    category: 'AI / Automation',
    description:
      'An automated trading bot using Python that analyzes market trends, executes buy/sell signals based on technical indicators, and manages portfolio risk with stop-loss mechanisms.',
    tech: ['Python', 'Pandas', 'NumPy', 'API Integration', 'Matplotlib'],
    color: 'purple',
    icon: '🤖',
    github: 'https://github.com/ITC-2023B0131138',
    live: null,
    featured: true,
    status: 'In Progress',
  },
  {
    id: 4,
    title: 'Network Security Scanner',
    category: 'Cybersecurity',
    description:
      'A Python-based network vulnerability scanner that performs port scanning, service detection, and basic vulnerability assessment using Nmap integration and custom scripts.',
    tech: ['Python', 'Nmap', 'Socket', 'Linux', 'Kali Linux'],
    color: 'pink',
    icon: '🔐',
    github: 'https://github.com/ITC-2023B0131138',
    live: null,
    featured: false,
    status: 'Completed',
  },
  {
    id: 5,
    title: 'Student Management System',
    category: 'Full Stack',
    description:
      'A comprehensive student management portal with CRUD operations, attendance tracking, grade management, and role-based access control for admins, teachers, and students.',
    tech: ['React', 'Node.js', 'MySQL', 'Express', 'JWT'],
    color: 'orange',
    icon: '🎓',
    github: 'https://github.com/ITC-2023B0131138',
    live: null,
    featured: false,
    status: 'Completed',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    category: 'Frontend',
    description:
      'This very portfolio — a cyberpunk-themed personal portfolio with particle animations, glassmorphism UI, smooth scroll, and dark/light mode built with React and Framer Motion.',
    tech: ['React', 'Framer Motion', 'Tailwind', 'Vite'],
    color: 'blue',
    icon: '🌐',
    github: 'https://github.com/ITC-2023B0131138',
    live: '#',
    featured: false,
    status: 'Live',
  },
];

const filters = ['All', 'Full Stack', 'Cybersecurity', 'AI / Automation', 'Frontend'];

const colorMap = {
  cyan: { border: 'border-cyan-400/20', hover: 'hover:border-cyan-400/50', badge: 'bg-cyan-400/10 text-cyan-400', glow: 'hover:shadow-[0_20px_60px_rgba(0,212,255,0.12)]', dot: 'bg-cyan-400' },
  green: { border: 'border-green-500/20', hover: 'hover:border-green-500/50', badge: 'bg-green-400/10 text-green-400', glow: 'hover:shadow-[0_20px_60px_rgba(0,255,136,0.12)]', dot: 'bg-green-400' },
  purple: { border: 'border-purple-500/20', hover: 'hover:border-purple-500/50', badge: 'bg-purple-400/10 text-purple-400', glow: 'hover:shadow-[0_20px_60px_rgba(179,71,255,0.12)]', dot: 'bg-purple-400' },
  pink: { border: 'border-pink-500/20', hover: 'hover:border-pink-500/50', badge: 'bg-pink-400/10 text-pink-400', glow: 'hover:shadow-[0_20px_60px_rgba(255,45,120,0.12)]', dot: 'bg-pink-400' },
  orange: { border: 'border-orange-500/20', hover: 'hover:border-orange-500/50', badge: 'bg-orange-400/10 text-orange-400', glow: 'hover:shadow-[0_20px_60px_rgba(249,115,22,0.12)]', dot: 'bg-orange-400' },
  blue: { border: 'border-blue-500/20', hover: 'hover:border-blue-500/50', badge: 'bg-blue-400/10 text-blue-400', glow: 'hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)]', dot: 'bg-blue-400' },
};

const statusColor = {
  'Completed': 'text-green-400',
  'In Progress': 'text-yellow-400',
  'Live': 'text-cyan-400',
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 bg-dark-800 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="// 03. PROJECTS"
          title={<>What I've <span className="gradient-text">Built</span></>}
          subtitle="A selection of projects spanning full-stack development, cybersecurity, and AI automation."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActiveFilter(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-xl font-mono text-xs transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-purple-500/20 border border-purple-500/50 text-purple-400 shadow-[0_0_15px_rgba(179,71,255,0.2)]'
                  : 'glass border border-white/5 text-slate-500 hover:text-slate-300 hover:border-white/10'
              }`}
            >
              {f}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const c = colorMap[project.color];
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.08 }}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className={`glass-card rounded-2xl p-6 border ${c.border} ${c.hover} ${c.glow} transition-all duration-300 flex flex-col group relative overflow-hidden`}
                >
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                        ★ Featured
                      </span>
                    </div>
                  )}

                  {/* Top row */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-3xl">{project.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-white text-lg leading-tight">{project.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`font-mono text-xs ${c.badge} px-2 py-0.5 rounded-full`}>
                          {project.category}
                        </span>
                        <span className={`font-mono text-xs ${statusColor[project.status]}`}>
                          • {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-body text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag text-xs">{t}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors text-xs font-mono group/link"
                    >
                      <Github size={14} />
                      <span>Code</span>
                      <ChevronRight size={12} className="opacity-0 group-hover/link:opacity-100 -translate-x-1 group-hover/link:translate-x-0 transition-all" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-slate-500 hover:text-cyan-400 transition-colors text-xs font-mono group/link"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                        <ChevronRight size={12} className="opacity-0 group-hover/link:opacity-100 -translate-x-1 group-hover/link:translate-x-0 transition-all" />
                      </a>
                    )}
                  </div>

                  {/* Hover glow overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                    style={{
                      background: `radial-gradient(ellipse at top left, ${project.color === 'cyan' ? 'rgba(0,212,255,0.05)' : project.color === 'purple' ? 'rgba(179,71,255,0.05)' : 'rgba(0,255,136,0.05)'} 0%, transparent 70%)`,
                    }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ITC-2023B0131138"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all font-mono text-sm btn-glow"
          >
            <Github size={16} />
            View All Projects on GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}