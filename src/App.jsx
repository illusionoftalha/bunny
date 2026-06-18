import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import PoetrySection from './components/PoetrySection';
import CustomCursor from './components/CustomCursor';
import AudioPlayer from './components/AudioPlayer';
import Envelope from './components/Envelope';
import ParticlesBackground from './components/ParticlesBackground';
import NoiseOverlay from './components/NoiseOverlay';
import IntroSequence from './components/IntroSequence';
import SecretLetter from './components/SecretLetter';
import Preloader from './components/Preloader';
import DedicatedSongs from './components/DedicatedSongs';
import LoveLetters from './components/LoveLetters';
import { uiSounds } from './utils/UISounds';

const App = () => {
  const [appState, setAppState] = useState('preloader'); // 'preloader', 'envelope', 'intro', 'main'
  
  // Use Framer Motion values instead of React state to prevent 60fps full-app re-renders
  const mouseX = useMotionValue(window.innerWidth / 2);
  const mouseY = useMotionValue(window.innerHeight / 2);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Audio reactivity motion value to prevent CSS variable DOM thrashing
  const musicPulse = useMotionValue(0);
  const bgScale = useTransform(musicPulse, v => 1 + v);
  const orbScale = useTransform(musicPulse, v => 1 + v * 2);

  useEffect(() => {
    if (appState !== 'main') return;

    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      
      // Audio Reactivity
      const data = uiSounds.getFrequencyData();
      if (data && data.length > 0) {
        let bass = 0;
        for(let i = 0; i < 10; i++) {
          bass += data[i];
        }
        bass = bass / 10 / 255; // Normalize 0 to 1
        
        // Directly update the motion value without triggering React re-renders or global DOM style recalcs
        musicPulse.set(bass * 0.05);
      }

      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [appState]);

  const handleEnvelopeOpen = () => {
    uiSounds.init(); // Initialize audio context on first user interaction
    uiSounds.playCinematicWhoosh();
    setAppState('intro');
  };

  return (
    <>
      <CustomCursor />
      <SecretLetter />
      
      <AnimatePresence mode="wait">
        {appState === 'preloader' && (
          <Preloader key="preloader" onComplete={() => setAppState('envelope')} />
        )}

        {appState === 'envelope' && (
          <Envelope key="envelope" onOpen={handleEnvelopeOpen} />
        )}
        
        {appState === 'intro' && (
          <IntroSequence key="intro" onComplete={() => setAppState('main')} />
        )}
      </AnimatePresence>
      
      {appState === 'main' && (
        <div 
          className="animated-gradient-bg"
          style={{ animation: 'fadeIn 3s ease-in forwards' }}
        >
          <style>
            {`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
            `}
          </style>



          <AudioPlayer autoPlay={true} />
          
          {/* Ambient Overlay for Smooth Background Transitions */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'var(--ambient-solid, transparent)',
            transition: 'background-color 1.5s ease',
            zIndex: 0, pointerEvents: 'none'
          }} />

          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
            <ParticlesBackground />
          </div>
          
          <motion.div
            style={{
              position: 'fixed',
              top: -400,
              left: -400,
              width: '800px',
              height: '800px',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 0,
              background: 'radial-gradient(circle, var(--ambient-color, rgba(255,172,216,0.15)) 0%, rgba(255,255,255,0) 60%)',
              transition: 'background 1.5s ease',
              scale: orbScale,
              x: smoothX,
              y: smoothY,
              willChange: 'transform'
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>

            <Hero />
            <Gallery />
            <PoetrySection />
            <DedicatedSongs />
            <LoveLetters />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
