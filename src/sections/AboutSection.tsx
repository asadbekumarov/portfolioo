import React from 'react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'React Native',
    'Tailwind CSS',
    'RTK Query',
    'REST APIs',
  ];

  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-[#0C0C0C] select-none"
    >
      {/* 4 Decorative 3D Images */}
      {/* Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none select-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none select-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Sphere Object"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none select-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego 3D Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none select-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Geometric Group"
            className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          />
        </FadeIn>
      </div>

      {/* Centered Content Block */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
          >
            {t.about.heading}
          </h2>
        </FadeIn>

        {/* Gap between heading & text */}
        <div className="mt-10 sm:mt-14 md:mt-16 w-full flex justify-center">
          <AnimatedText key={t.about.description} text={t.about.description} />
        </div>

        {/* Tech Stack Pills */}
        <FadeIn delay={0.15} y={20} className="mt-8 sm:mt-10">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-2xl">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-[#181818] border border-[rgba(215,226,234,0.15)] text-[#D7E2EA] hover:border-[#B600A8] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Button */}
        <div className="mt-12 sm:mt-16">
          <FadeIn delay={0.25} y={20}>
            <ContactButton href="#contact">{t.about.contactBtn}</ContactButton>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
