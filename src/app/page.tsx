'use client';
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  const skills = {
    backend: ['Java', 'Spring Boot', 'JDBC', 'JPA', 'Express', 'NestJS'],
    frontend: ['React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript'],
    interested: ['PHP', 'Go', 'New Technologies'],
    other: ['Git', 'Problem Solving', 'Research', 'English Communication'],
  };

  const experience = [
    {
      role: 'Full Stack Developer',
      duration: '2+ years',
      description:
        'Specialized in administrator system domain, working with Java and JavaScript technologies.',
    },
  ];

  const education = {
    university: 'HCMC University of Technology and Education',
    degree: 'Software Engineer',
    duration: '2019 - 2022',
    achievement: 'Credit Degree',
  };

  return (
    <main className='min-h-screen bg-gray-100'>
      {/* Navigation */}
      <nav className='bg-white shadow-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex items-center'>
              <h1 className='text-xl font-bold text-black'>Phi Vo</h1>
            </div>
            <div className='flex space-x-8'>
              {['about', 'skills', 'experience', 'education', 'contact'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`hover:cursor-pointer hover:text-blue-600 ${
                      activeSection === section
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* About Section */}
        <section
          className={`${activeSection === 'about' ? 'block' : 'hidden'}`}
        >
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-2xl font-bold mb-4 text-black'>About Me</h2>
            <p className='text-gray-600'>
              I am a passionate Full Stack Developer with over 2 years of
              experience in building web applications. My expertise spans both
              Java and JavaScript ecosystems, with a strong foundation in Spring
              Boot and React-based technologies.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section
          className={`${activeSection === 'skills' ? 'block' : 'hidden'}`}
        >
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-2xl font-bold mb-4 text-black'>
              Technical Skills
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className='text-lg font-semibold mb-2 capitalize text-[#aaa]'>
                    {category}
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          className={`${activeSection === 'experience' ? 'block' : 'hidden'}`}
        >
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-2xl font-bold mb-4 text-black'>
              Work Experience
            </h2>
            {experience.map((exp, index) => (
              <div key={index} className='mb-6'>
                <h3 className='text-lg font-semibold text-[#aaa]'>
                  {exp.role}
                </h3>
                <p className='text-gray-500'>{exp.duration}</p>
                <p className='text-gray-600 mt-2'>{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section
          className={`${activeSection === 'education' ? 'block' : 'hidden'}`}
        >
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-2xl font-bold mb-4 text-black'>Education</h2>
            <div>
              <h3 className='text-lg font-semibold text-[#aaa]'>
                {education.university}
              </h3>
              <p className='text-gray-500'>{education.degree}</p>
              <p className='text-gray-600'>{education.duration}</p>
              <p className='text-gray-600'>{education.achievement}</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className={`${activeSection === 'contact' ? 'block' : 'hidden'}`}
        >
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-2xl font-bold mb-4 text-black'>Contact</h2>
            <p className='text-gray-600'>
              I&apos;m always open to new opportunities and collaborations. Feel
              free to reach out! &lt;3
            </p>
            {/* Add your contact information or a contact form here */}
          </div>
        </section>
      </div>
    </main>
  );
}
