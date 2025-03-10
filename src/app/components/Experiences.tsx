import React from 'react';

import { experience } from '../constants';

export default function Experiences({ show = false }: { show: boolean }) {
  return (
    <section className={show ? 'block' : 'hidden'}>
      <div className='bg-white rounded-lg shadow-md p-6'>
        <h2 className='text-2xl font-bold mb-4 text-black'>Work Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className='mb-6'>
            <h3 className='text-lg font-semibold text-[#aaa]'>{exp.role}</h3>
            <p className='text-gray-500'>{exp.duration}</p>
            <p className='text-gray-600 mt-2'>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
