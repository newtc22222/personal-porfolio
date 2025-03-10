'use client';
import { createContext, useState } from 'react';

import Header from './components/Header';

import type { ActiveTab } from '@/types';
import About from './components/About';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Education from './components/Education';
import Contact from './components/Contact';

const themes = ['light', 'dark'] as const;
type Theme = (typeof themes)[number];
export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: Function;
}>({ theme: 'light', toggleTheme: Function });

const langs = ['en', 'vi'] as const;
type Lang = (typeof langs)[number];
export const LanguageContext = createContext<{
  language: Lang;
  toggleLanguage: Function;
}>({ language: 'en', toggleLanguage: Function });

export default function Home() {
  const [activeSection, setActiveSection] = useState<ActiveTab>('about');

  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Lang>('en');

  const toggleTheme = (choice?: Theme) => {
    if (choice) {
      setTheme(choice);
      return;
    }
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleLanguage = (choice?: Lang) => {
    if (choice) {
      setLanguage(choice);
      return;
    }
    setLanguage((prev) => (prev === 'en' ? 'vi' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <main className='min-h-screen bg-gray-100 p-4'>
          {/* Navigation */}
          <Header
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          {/* Main Content */}
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <About show={activeSection === 'about'} />
            <Skills show={activeSection === 'skills'} />
            <Experiences show={activeSection === 'experience'} />
            <Education show={activeSection === 'education'} />
            <Contact show={activeSection === 'contact'} />
          </div>
        </main>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}
