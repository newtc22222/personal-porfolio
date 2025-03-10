import React from 'react';

import { education } from '../constants';

export default function Education({ show = false }: { show: boolean }) {
  return (
    <section className={show ? 'block' : 'hidden'}>
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
  );
}
