import React from 'react';

import { skills } from '../constants';

export default function Skills({ show = false }: { show: boolean }) {
  return (
    <section className={show ? 'block' : 'hidden'}>
      <div className='bg-white rounded-lg shadow-md p-6'>
        <h2 className='text-2xl font-bold mb-4 text-black'>Technical Skills</h2>
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
  );
}
