import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionHeader } from './About';

const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'Python', level: 85, color: '#3b82f6' },
      { name: 'JavaScript', level: 80, color: '#f59e0b' },
      { name: 'C / C++', level: 75, color: '#8b5cf6' },
      { name: 'Java', level: 65, color: '#ef4444' },
      { name: 'SQL', level: 70, color: '#10b981' },
      { name: 'HTML / CSS', level: 90, color: '#f97316' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '⚡',
    skills: [
      { name: 'React.js', level: 80, color: '#00d4ff' },
      { name: 'Tailwind CSS', level: 85, color: '#38bdf8' },
      { name: 'Bootstrap', level: 75, color: '#7c3aed' },
      { name: 'Framer Motion', level: 65, color: '#ec4899' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙',
    skills: [
      { name: 'Node.js', level: 75, color: '#4ade80' },
      { name: 'Express.js', level: 70, color: '#86efac' },
      { name: 'MongoDB', level: 72, color: '#22c55e' },
      { name: 'MySQL', level: 68, color: '#3b82f6' },
      { name: 'REST APIs', level: 78, color: '#f59e0b' },
    ],
  },
  {
    id: 'security',
    label: 'Security',
    icon: '🔐',
    skills: [
      { name: 'Network Security', level: 75, color: '#b347ff' },
      { name: 'Ethical Hacking', level: 65, color: '#a855f7' },
      { name: 'Cryptography', level: 60, color: '#c084fc' },
      { name: 'Wireshark', level: 70, color: '#818cf8' },
      { name: 'Linux / Kali', level: 72, color: '#6366f1' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Others',
    icon: '🛠',
    skills: [
      { name: 'Git / GitHub', level: 82, color: '#f97316' },
      { name: 'VS Code', level: 90, color: '#3b82f6' },
      { name: 'Postman', level: 75, color: '#f59e0b' },
      { name: 'Docker (basics)', level: 50, color: '#38bdf8' },
      { name: 'Figma', level: 60, color: '#ec4899' },
    ],
  },
];

const techStack = [
  'Python', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'MySQL',
  'Express', 'Tailwind', 'Git', 'Linux', 'Kali Linux', 'Wireshark',
  'C++', 'Java', 'REST API', 'Bootstrap', 'Postman', 'Figma',
  'HTML5', 'CSS3', 'Docker', 'VS Code', 'GitHub', 'Cryptography',
];

function SkillBar({ name, level, color, inView, delay }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="font-body text-sm text-slate-300">{name}</span>
        <span className="font-mono text-xs text-slate-500">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const activeCategory = skillCategories.find(c => c.id === activeTab);

  return (
    <section id="skills" className="relative py-24 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="// 02. SKILLS"
          title={<>Technical <span className="gradient-text">Arsenal</span></>}
          subtitle="Technologies and tools I work with to build, secure, and ship products."
        />

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-xl font-mono text-xs transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-cyan-400/20 border border-cyan-400/50 text-cyan-400 shadow-[0_0_15px_rgba(0,212,255,0.2)]'
                  : 'glass border border-white/5 text-slate-500 hover:text-slate-300 hover:border-white/10'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Skill bars */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-8 border border-cyan-400/10"
          >
            <h3 className="font-display font-semibold text-white mb-6 flex items-center gap-2">
              <span className="text-xl">{activeCategory.icon}</span>
              {activeCategory.label}
            </h3>
            <div className="space-y-5">
              {activeCategory.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  inView={inView}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* Radar / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-8 border border-purple-500/10 flex flex-col justify-between"
          >
            <h3 className="font-display font-semibold text-white mb-6">Core Strengths</h3>
            <div className="grid grid-cols-2 gap-4 flex-1">
              {[
                { label: 'Problem Solving', value: 85, icon: '🧩' },
                { label: 'Web Development', value: 80, icon: '🌐' },
                { label: 'Cybersecurity', value: 72, icon: '🔐' },
                { label: 'Team Leadership', value: 78, icon: '👥' },
                { label: 'DSA / Algorithms', value: 70, icon: '📊' },
                { label: 'System Design', value: 60, icon: '🏗' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="glass rounded-xl p-4 border border-white/5 hover:border-cyan-400/20 transition-all group"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-body text-xs text-slate-400 mb-2">{item.label}</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${item.value}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + i * 0.08 }}
                      />
                    </div>
                    <span className="font-mono text-xs text-slate-600">{item.value}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech stack cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="section-tag mb-6">FULL TECH STACK</div>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="tech-tag cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}