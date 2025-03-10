import React from 'react';
import { clsx } from 'clsx';
import { ActiveTab } from '@/types';

const tabs = ['about', 'skills', 'experience', 'education', 'contact'];

type HeaderProps = {
  activeSection: ActiveTab;
  setActiveSection: Function;
};

export default function Header({
  activeSection,
  setActiveSection,
}: HeaderProps) {
  return (
    <header className='bg-white shadow-lg rounded-lg p-4 mb-6'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4 md:mb-0'>
          Phi Vo
        </h1>
        <nav className='flex flex-wrap gap-4'>
          {tabs.map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={clsx(
                'px-3 py-2 rounded-md transition-colors',
                'hover:cursor-pointer',
                {
                  'bg-blue-500 text-white': activeSection === section,
                  'text-gray-600 hover:bg-blue-100': activeSection !== section,
                },
              )}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
