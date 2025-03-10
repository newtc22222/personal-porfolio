import React from 'react';

export default function About({ show = false }: { show: boolean }) {
  return (
    <section className={show ? 'block' : 'hidden'}>
      <div className='bg-white rounded-lg shadow-md p-6'>
        <h2 className='text-2xl font-bold mb-4 text-gray-800'>About Me</h2>
        <p className='text-gray-600 leading-relaxed'>
          I am a passionate Full Stack Developer with over 2 years of experience
          in building web applications. My expertise spans both Java and
          JavaScript ecosystems, with a strong foundation in Spring Boot and
          React-based technologies. I am always eager to learn new technologies
          and tackle challenging problems.
        </p>
      </div>
    </section>
  );
}
