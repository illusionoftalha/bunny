import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './PoetrySection.css';

const verses = [
  "You are the quiet poetry the world writes when it finally decides to be kind.",
  "There is a gentle gravity to your presence, pulling the light into every room you enter.",
  "I hope you never doubt the profound beauty of your own existence; you are entirely, undeniably unforgettable."
];

const WordReveal = ({ text }) => {
  const words = text.split(" ");
  const containerRef = useRef(null);
  
  // Track scroll position for this specific paragraph
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 40%"] // Start animating when top hits 80% of viewport, finish when bottom hits 40%
  });

  return (
    <p className="poetry-verse serif" ref={containerRef}>
      {words.map((word, index) => {
        // Calculate the individual fill percentage for each word
        const start = index / words.length;
        const end = start + (1 / words.length);
        
        // This opacity goes from 0.15 (faint) to 1 (solid) as scroll passes the word's "range"
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

        return (
          <motion.span 
            key={index} 
            style={{ 
              opacity,
              display: 'inline-block', 
              marginRight: '0.3em',
              transition: 'opacity 0.1s ease-out'
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};

const PoetrySection = () => {
  return (
    <section className="poetry-section">
      <div className="poetry-container">
        {verses.map((verse, index) => (
          <div key={index} className={`poetry-card-wrapper card-${index}`}>
            <span className="massive-quote serif">"</span>
            <div className="poetry-card glass-panel">
              <WordReveal text={verse} />
            </div>
          </div>
        ))}
        
        <motion.div 
          className="poetry-signature-container"
          initial={{ opacity: 0, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <div className="signature-line" />
          <p className="poetry-signature serif">For Bareera.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PoetrySection;
