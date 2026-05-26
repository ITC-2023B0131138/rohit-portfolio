import { useState, useEffect } from 'react';
import AnimatedCursor from './components/AnimatedCursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import FloatingSocial from './components/FloatingSocial';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <AnimatedCursor />
      <Navbar />
      <FloatingSocial />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}