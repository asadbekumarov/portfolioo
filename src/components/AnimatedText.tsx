import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface CharSpanProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const CharSpan: React.FC<CharSpanProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">{char}</span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalChars = text.length;
  const words = text.split(' ');
  let charCounter = 0;

  return (
    <p
      ref={containerRef}
      className={`text-[#D7E2EA] font-medium leading-relaxed max-w-[720px] text-center ${className}`}
      style={{ fontSize: 'clamp(1.05rem, 2.1vw, 1.45rem)' }}
    >
      {words.map((word, wordIdx) => {
        const wordChars = word.split('');
        return (
          <React.Fragment key={wordIdx}>
            <span className="inline-block whitespace-nowrap">
              {wordChars.map((char) => {
                const start = charCounter / totalChars;
                const end = Math.min(1, (charCounter + 1) / totalChars);
                charCounter++;
                return (
                  <CharSpan
                    key={charCounter}
                    char={char}
                    progress={scrollYProgress}
                    range={[start, end]}
                  />
                );
              })}
            </span>
            {wordIdx < words.length - 1 && ' '}
          </React.Fragment>
        );
      })}
    </p>
  );
};

export default AnimatedText;
