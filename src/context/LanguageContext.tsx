import React, { createContext, useContext, useState } from 'react';

export type Language = 'uz' | 'en';

export interface ServiceItemData {
  number: string;
  name: string;
  description: string;
}

export interface ProjectItemData {
  number: string;
  name: string;
  category: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  image: string;
}

export interface Translations {
  nav: {
    about: string;
    services: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    tagline: string;
    contactBtn: string;
  };
  about: {
    heading: string;
    description: string;
    contactBtn: string;
  };
  services: {
    heading: string;
    list: ServiceItemData[];
  };
  projects: {
    heading: string;
    liveBtn: string;
    items: ProjectItemData[];
  };
  contact: {
    badge: string;
    heading: string;
    description: string;
    contactBtn: string;
    rightsReserved: string;
  };
}

export const translationsData: Record<Language, Translations> = {
  uz: {
    nav: {
      about: 'Men haqimda',
      services: 'Xizmatlar',
      projects: 'Loyihalar',
      contact: 'Aloqa',
    },
    hero: {
      greeting: "SALOM, MEN ASAD",
      tagline: 'zamonaviy, toza va yuqori samarali veb hamda mobil ilovalar yaratuvchi dasturchi',
      contactBtn: "Bog'lanish",
    },
    about: {
      heading: 'Men haqimda',
      description:
        "Men React, Next.js va TypeScript yordamida tezkor va toza veb-ilovalar yaratishga ixtisoslashgan frontend va mobil dasturchiman. Murakkab, korporativ darajadagi interfeyslarni sodda va foydalanishga yoqimli holatga keltirishni yaxshi ko‘raman, shuningdek, React Native yordamida mobil ilovalar ham yarataman. Agar sizda biror g‘oya bo‘lsa, keling, birgalikda ajoyib loyiha yaratamiz!",
      contactBtn: "Bog'lanish",
    },
    services: {
      heading: 'Xizmatlar',
      list: [
        {
          number: '01',
          name: 'Web Development',
          description:
            "React, Next.js va zamonaviy frontend texnologiyalari asosida to'liq moslashuvchan (responsive), SEO-optimallashtirilgan va yuqori tezlikda ishlovchi veb-saytlar hamda veb-ilovalarni yaratish.",
        },
        {
          number: '02',
          name: 'Mobil Ilovalar',
          description:
            "Foydalanuvchilar uchun qulay, chiroyli dizaynga va barqaror ishlashga ega bo'lgan zamonaviy cross-platform mobil ilovalarni ishlab chiqish.",
        },
        {
          number: '03',
          name: 'Telegram Botlar',
          description:
            "Biznes jarayonlarini avtomatlashtiruvchi, onlayn savdo, to'lov tizimlari (Click, Payme) va CRM bilan integratsiya qilingan aqlli va ishonchli Telegram botlar.",
        },
      ],
    },
    projects: {
      heading: 'Loyihalar',
      liveBtn: "Saytni ko'rish",
      items: [
        {
          number: '01',
          name: 'Smart Life',
          category: '(Mijoz loyihasi / E-commerce)',
          description:
            "O'zbekistondagi elektronika sotuvchisi Smart Life uchun mijozlarga mo'ljallangan to'liq onlayn do'konni yaratdim.",
          techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'RTK Query'],
          liveUrl: 'https://smartlife.uz/uz',
          image: '/src/assets/projects/smartlife.png',
        },
        {
          number: '02',
          name: 'DNK Expert',
          category: '(Mijoz loyihasi / Tibbiy katalog)',
          description:
            "O'zbekistondagi yuqori texnologiyali tibbiy laboratoriya jihozlari distribyutori uchun to'liq korporativ veb-sayt va mahsulotlar katalogini yaratdim.",
          techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'RTK Query'],
          liveUrl: 'https://dnk-expert.uz/uz',
          image: '/src/assets/projects/dnk-expert.png',
        },
      ],
    },
    contact: {
      badge: 'Aloqa',
      heading: 'Birgalikda Ajoyib Loyihalar Yaratamiz',
      description:
        "Yangi loyihalar, frilans hamkorlik yoki kompaniyangiz uchun kuchli frontend/mobile dasturchi kerak bo'lsa, men bilan bog'laning.",
      contactBtn: "Bog'lanish",
      rightsReserved: 'Barcha huquqlar himoyalangan.',
    },
  },
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "HI, I'M ASAD",
      tagline: 'a frontend & mobile developer driven by crafting clean, performant, and modern digital experiences',
      contactBtn: 'Contact Me',
    },
    about: {
      heading: 'About me',
      description:
        'I’m a frontend and mobile developer focused on building fast, clean web apps with React, Next.js and TypeScript. I enjoy turning complex, enterprise-level interfaces into something simple and pleasant to use, and I also build mobile apps with React Native. If you have an idea, let’s build something great together!',
      contactBtn: 'Get In Touch',
    },
    services: {
      heading: 'Services',
      list: [
        {
          number: '01',
          name: 'Web Development',
          description:
            'Building fully responsive, SEO-friendly, and blazing-fast modern web applications using React, Next.js, TypeScript, and clean code principles.',
        },
        {
          number: '02',
          name: 'Mobile Applications',
          description:
            'Developing smooth, intuitive, and performant cross-platform mobile apps focused on outstanding user experience.',
        },
        {
          number: '03',
          name: 'Telegram Bots',
          description:
            'Crafting automated, high-load, and feature-rich Telegram bots with integrated payment gateways and CRM systems.',
        },
      ],
    },
    projects: {
      heading: 'Projects',
      liveBtn: 'Live Project',
      items: [
        {
          number: '01',
          name: 'Smart Life',
          category: '(Client / E-commerce)',
          description:
            'Created a full-featured customer e-commerce platform for Smart Life, a leading electronics retailer in Uzbekistan.',
          techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'RTK Query'],
          liveUrl: 'https://smartlife.uz/uz',
          image: '/src/assets/projects/smartlife.png',
        },
        {
          number: '02',
          name: 'DNK Expert',
          category: '(Client / Medical Catalog)',
          description:
            'Developed a comprehensive corporate website and medical equipment catalog for DNK Expert, a high-tech laboratory distributor in Uzbekistan.',
          techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'RTK Query'],
          liveUrl: 'https://dnk-expert.uz/uz',
          image: '/src/assets/projects/dnk-expert.png',
        },
      ],
    },
    contact: {
      badge: 'Get In Touch',
      heading: "Let's Build Something Great",
      description:
        'Available for select freelance web/mobile projects, full-time opportunities, and impactful collaborations worldwide.',
      contactBtn: 'Contact Me',
      rightsReserved: 'All rights reserved.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang') as Language;
    return saved === 'en' || saved === 'uz' ? saved : 'uz';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_lang', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'uz' ? 'en' : 'uz');
  };

  const t = translationsData[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
