import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { useLanguage } from '../context/LanguageContext';
import smartlifeImg from '../assets/projects/smartlife.png';
import dnkExpertImg from '../assets/projects/dnk-expert.png';
import { ExternalLink, Globe } from 'lucide-react';

interface ProjectDisplayData {
  number: string;
  name: string;
  category: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  image: string;
  displayUrl: string;
}

interface CardProps {
  project: ProjectDisplayData;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  liveBtnLabel: string;
}

const Card: React.FC<CardProps> = ({ project, index, totalCards, progress, liveBtnLabel }) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.04;
  const startRange = index * 0.35;
  const scale = useTransform(progress, [startRange, 1], [1, targetScale]);

  return (
    <div className="h-[85vh] flex items-start justify-center sticky top-20 md:top-28 w-full max-w-6xl mx-auto px-3 sm:px-6">
      <motion.div
        style={{
          scale,
          top: `${index * 24}px`,
        }}
        className="relative w-full rounded-[35px] sm:rounded-[45px] md:rounded-[55px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-9 shadow-2xl overflow-hidden"
      >
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8 border-b border-[rgba(215,226,234,0.1)] pb-5">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#B600A8] uppercase tracking-widest text-xs sm:text-sm font-semibold">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-extrabold uppercase tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="self-end sm:self-auto">
            <LiveProjectButton href={project.liveUrl}>
              {liveBtnLabel}
            </LiveProjectButton>
          </div>
        </div>

        {/* Content Body: Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left info column: Description + Tech Stack */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <p className="text-[#D7E2EA]/80 font-light text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#161616] border border-[#D7E2EA]/20 text-[#D7E2EA]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Direct URL Link */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#D7E2EA]/70 hover:text-white transition-colors mt-2"
            >
              <Globe className="w-4 h-4 text-[#B600A8]" />
              <span className="underline underline-offset-4">{project.displayUrl}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          {/* Right browser mockup column */}
          <div className="lg:col-span-7 w-full">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl md:rounded-3xl overflow-hidden border border-[#D7E2EA]/20 bg-[#161616] shadow-xl transition-all duration-300 hover:border-[#B600A8]"
            >
              {/* Browser mockup title bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#1C1C1C] border-b border-[#D7E2EA]/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-[11px] sm:text-xs text-[#D7E2EA]/50 font-mono tracking-wider truncate max-w-[200px] sm:max-w-xs">
                  {project.displayUrl}
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#D7E2EA]/40 group-hover:text-white transition-colors" />
              </div>

              {/* Screenshot frame */}
              <div className="relative aspect-[16/9] sm:aspect-[16/10] overflow-hidden bg-[#0C0C0C]">
                <img
                  src={project.image}
                  alt={`${project.name} Screenshot`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const { t } = useLanguage();

  const projectImages = [smartlifeImg, dnkExpertImg];
  const displayUrls = ['smartlife.uz/uz', 'dnk-expert.uz/uz'];

  const projectsData: ProjectDisplayData[] = t.projects.items.map((item, idx) => ({
    ...item,
    image: projectImages[idx] || item.image,
    displayUrl: displayUrls[idx] || item.liveUrl.replace(/^https?:\/\//, ''),
  }));

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 pt-20 sm:pt-28 md:pt-32 pb-32"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-16 sm:mb-20 text-center">
        <FadeIn delay={0} y={30}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            {t.projects.heading}
          </h2>
        </FadeIn>
      </div>

      {/* Cards Stacking Container */}
      <div ref={containerRef} className="relative w-full min-h-[170vh]">
        {projectsData.map((project, index) => (
          <Card
            key={project.number}
            project={project}
            index={index}
            totalCards={projectsData.length}
            progress={scrollYProgress}
            liveBtnLabel={t.projects.liveBtn}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
