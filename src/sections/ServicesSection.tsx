import React from 'react';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../context/LanguageContext';

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={30}>
          <h2
            className="font-black uppercase text-[#0C0C0C] text-center mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            {t.services.heading}
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col w-full">
          {t.services.list.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={25}
              className="border-b border-[rgba(12,12,12,0.15)] first:border-t py-8 sm:py-10 md:py-12"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-10 md:gap-16">
                {/* Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0 select-none"
                  style={{ fontSize: 'clamp(3rem, 10vw, 130px)' }}
                >
                  {service.number}
                </div>

                {/* Name & Description */}
                <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                  <h3
                    className="font-bold uppercase text-[#0C0C0C] leading-tight"
                    style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.3rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-75"
                    style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
