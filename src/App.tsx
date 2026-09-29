import React from 'react';
import HeroSection from './sections/HeroSection';
// import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactButton from './components/ContactButton';
import FadeIn from './components/FadeIn';
import { ArrowUpRight, Mail } from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TelegramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const PortfolioContent: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: 'Telegram',
      icon: TelegramIcon,
      href: 'https://t.me/Asad_umarov',
    },
    {
      name: 'GitHub',
      icon: GithubIcon,
      href: 'https://github.com/asadbekumarov',
    },
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      href: 'https://www.linkedin.com/in/asadbek-umarov/',
    },
    {
      name: 'Instagram',
      icon: InstagramIcon,
      href: 'https://www.instagram.com/umarovv___asadbek/',
    },
  ];

  return (
    <main
      className="bg-[#0C0C0C] text-[#D7E2EA] font-kanit min-h-screen w-full relative selection:bg-[#B600A8] selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee Section */}
      {/* <MarqueeSection /> */}

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* Contact & Footer Section */}
      <footer
        id="contact"
        className="bg-[#0C0C0C] relative z-20 px-6 sm:px-10 py-20 border-t border-[rgba(215,226,234,0.1)] flex flex-col items-center justify-center text-center overflow-hidden"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <FadeIn delay={0} y={20}>
            <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm font-light">
              {t.contact.badge}
            </span>
          </FadeIn>

          <FadeIn delay={0.1} y={30}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(2.3rem, 7vw, 5.5rem)' }}
            >
              {t.contact.heading}
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <p className="text-[#D7E2EA]/70 max-w-lg text-base sm:text-lg font-light">
              {t.contact.description}
            </p>
          </FadeIn>

          {/* Email & Telegram Quick Links */}
          <FadeIn delay={0.3} y={20} className="mt-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <a
              href="mailto:asadbekumarov1202@gmail.com"
              className="group inline-flex items-center gap-2.5 text-base sm:text-xl font-medium text-[#D7E2EA] hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5 text-[#B600A8]" />
              <span>asadbekumarov1202@gmail.com</span>
              <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a
              href="https://t.me/Asad_umarov"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-base sm:text-xl font-medium text-[#D7E2EA] hover:text-white transition-colors"
            >
              <TelegramIcon className="w-5 h-5 text-[#29B6F6]" />
              <span>@Asad_umarov</span>
              <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </FadeIn>

          <FadeIn delay={0.4} y={20} className="mt-2">
            <ContactButton href="https://t.me/Asad_umarov" className="px-10 py-4">
              {t.contact.contactBtn}
            </ContactButton>
          </FadeIn>

          <div className="w-full h-px bg-[rgba(215,226,234,0.1)] my-6 sm:my-8" />

          {/* Bottom Bar: Copyright & Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full text-xs sm:text-sm text-[#D7E2EA]/50 font-light gap-5">
            <p>© {new Date().getFullYear()} Asadbek Umarov. {t.contact.rightsReserved}</p>

            <div className="flex items-center gap-5 sm:gap-6 flex-wrap justify-center">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#D7E2EA] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
};

export default App;
