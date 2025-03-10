'use client';
import React, { useState } from 'react';
import { Moon, Sun, Globe } from 'lucide-react';

// Theme Context
// const ThemeContext = createContext();
// const useTheme = () => useContext(ThemeContext);

// Language Context
// const LanguageContext = createContext();
// const useLanguage = () => useContext(LanguageContext);

// Language configurations
const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
    },
    about: {
      title: 'About Me',
      description:
        'I am a passionate Full Stack Developer with over 2 years of experience in building web applications.',
    },
    skills: {
      title: 'Technical Skills',
      categories: {
        backend: 'Backend',
        frontend: 'Frontend',
        interested: 'Interested In',
        other: 'Other Skills',
      },
    },
    experience: {
      title: 'Work Experience',
      years: '2+ years',
    },
    education: {
      title: 'Education',
      university: 'HCMC University of Technology and Education',
      degree: 'Software Engineer',
      duration: '2019 - 2022',
      achievement: 'Credit Degree',
    },
    contact: {
      title: 'Contact',
      message:
        "I'm always open to new opportunities and collaborations. Feel free to reach out!",
      send: 'Send Message',
    },
  },
  vi: {
    nav: {
      about: 'Giới Thiệu',
      skills: 'Kỹ Năng',
      experience: 'Kinh Nghiệm',
      education: 'Học Vấn',
      contact: 'Liên Hệ',
    },
    about: {
      title: 'Giới Thiệu',
      description:
        'Tôi là một Full Stack Developer với hơn 2 năm kinh nghiệm trong việc xây dựng ứng dụng web.',
    },
    skills: {
      title: 'Kỹ Năng Chuyên Môn',
      categories: {
        backend: 'Backend',
        frontend: 'Frontend',
        interested: 'Quan Tâm',
        other: 'Kỹ Năng Khác',
      },
    },
    experience: {
      title: 'Kinh Nghiệm Làm Việc',
      years: 'Hơn 2 năm',
    },
    education: {
      title: 'Học Vấn',
      university: 'Đại học Sư phạm Kỹ thuật TP.HCM',
      degree: 'Kỹ sư Phần mềm',
      duration: '2019 - 2022',
      achievement: 'Bằng tín chỉ',
    },
    contact: {
      title: 'Liên Hệ',
      message:
        'Tôi luôn sẵn sàng cho các cơ hội và hợp tác mới. Hãy liên hệ với tôi!',
      send: 'Gửi Tin Nhắn',
    },
  },
};

const Recommends = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'en' | 'vi'>('en');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'vi' : 'en'));
  };

  const t = translations[language];

  const skills = {
    backend: ['Java', 'Spring Boot', 'JDBC', 'JPA', 'Express', 'NestJS'],
    frontend: ['React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript'],
    interested: ['PHP', 'Go', 'New Technologies'],
    other: ['Git', 'Problem Solving', 'Research', 'English Communication'],
  };

  // Dynamic theme classes
  const themeClasses = {
    background: theme === 'light' ? 'bg-gray-100' : 'bg-gray-900',
    card: theme === 'light' ? 'bg-white' : 'bg-gray-800',
    text: theme === 'light' ? 'text-gray-800' : 'text-gray-100',
    subtext: theme === 'light' ? 'text-gray-600' : 'text-gray-300',
    skill:
      theme === 'light'
        ? 'bg-blue-100 text-blue-700'
        : 'bg-blue-900 text-blue-100',
    button:
      theme === 'light'
        ? 'bg-blue-500 hover:bg-blue-600'
        : 'bg-blue-700 hover:bg-blue-800',
  };

  return (
    <div
      className={`min-h-screen p-4 transition-colors duration-200 ${themeClasses.background}`}
    >
      {/* Header with Theme and Language Toggle */}
      <header className={`${themeClasses.card} shadow-lg rounded-lg p-4 mb-6`}>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <h1
            className={`text-2xl font-bold ${themeClasses.text} mb-4 md:mb-0`}
          >
            Phi Vo
          </h1>
          <div className='flex items-center gap-4'>
            <nav className='flex flex-wrap gap-4'>
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    activeSection === key
                      ? `${themeClasses.button} text-white`
                      : `${themeClasses.subtext} hover:bg-blue-100`
                  }`}
                >
                  {value}
                </button>
              ))}
            </nav>
            <button
              onClick={toggleTheme}
              className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700'
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={toggleLanguage}
              className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700'
            >
              <Globe size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-4xl mx-auto'>
        {/* About Section */}
        {activeSection === 'about' && (
          <section
            className={`${themeClasses.card} rounded-lg shadow-lg p-6 mb-6`}
          >
            <h2 className={`text-2xl font-bold mb-4 ${themeClasses.text}`}>
              {t.about.title}
            </h2>
            <p className={`${themeClasses.subtext} leading-relaxed`}>
              {t.about.description}
            </p>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section
            className={`${themeClasses.card} rounded-lg shadow-lg p-6 mb-6`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${themeClasses.text}`}>
              {t.skills.title}
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className={`${themeClasses.card} p-4 rounded-lg`}
                >
                  <h3
                    className={`text-lg font-semibold mb-3 ${themeClasses.text}`}
                  >
                    {(category === 'backend' ||
                      category === 'frontend' ||
                      category === 'interested' ||
                      category === 'other') &&
                      t.skills.categories[category]}
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className={`${themeClasses.skill} px-3 py-1 rounded-full text-sm`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Other sections would follow the same pattern... */}
      </main>
    </div>
  );
};

export default Recommends;
