import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Cyber grid */}
          <div className="absolute inset-0 cyber-grid-bg opacity-30" />

          {/* Scan line */}
          <div className="scan-line" />

          {/* Corner decorations */}
          {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-8 h-8`}>
              <div className={`absolute ${i < 2 ? 'top-0' : 'bottom-0'} ${i % 2 === 0 ? 'left-0' : 'right-0'} w-full h-0.5 bg-cyan-400 opacity-60`} />
              <div className={`absolute ${i < 2 ? 'top-0' : 'bottom-0'} ${i % 2 === 0 ? 'left-0' : 'right-0'} w-0.5 h-full bg-cyan-400 opacity-60`} />
            </div>
          ))}

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo / Name */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="font-mono text-xs tracking-[0.4em] text-cyan-400 mb-3 uppercase">
                Initializing Portfolio
              </div>
              <h1 className="font-display text-5xl font-bold gradient-text">
                RK
              </h1>
              <div className="font-mono text-xs tracking-[0.3em] text-slate-500 mt-2 uppercase">
                Rohit Kumar
              </div>
            </motion.div>

            {/* Hexagon spinner */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="relative w-16 h-16"
            >
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <polygon
                  points="32,4 58,18 58,46 32,60 6,46 6,18"
                  fill="none"
                  stroke="url(#hexGrad)"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />
                <defs>
                  <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d4ff" />
                    <stop offset="100%" stopColor="#b347ff" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00d4ff]" />
              </div>
            </motion.div>

            {/* Progress bar */}
            <div className="w-64">
              <div className="flex justify-between font-mono text-xs text-slate-500 mb-2">
                <span>LOADING ASSETS</span>
                <span className="text-cyan-400">{Math.min(Math.round(progress), 100)}%</span>
              </div>
              <div className="h-0.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #00d4ff, #b347ff)',
                    width: `${Math.min(progress, 100)}%`,
                    boxShadow: '0 0 10px rgba(0,212,255,0.8)',
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>

            {/* Status text */}
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="font-mono text-xs text-slate-600 tracking-widest"
            >
              {progress < 30 ? 'LOADING MODULES...' : progress < 60 ? 'COMPILING ASSETS...' : progress < 90 ? 'INITIALIZING UI...' : 'READY'}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}