import React from 'react';

export default function Contact({ show = false }: { show: boolean }) {
  return (
    <section className={show ? 'block' : 'hidden'}>
      <div className='bg-white rounded-lg shadow-md p-6'>
        <h2 className='text-2xl font-bold mb-4 text-gray-800'>Contact</h2>
        <p className='text-gray-600 mb-6'>
          I'm always open to new opportunities and collaborations. Feel free to
          reach out!
        </p>
        <div className='flex flex-col gap-4'>
          <button className='bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors'>
            Send Message
          </button>
          <div className='flex gap-4'>
            <button className='flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors'>
              GitHub
            </button>
            <button className='flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors'>
              LinkedIn
            </button>
          </div>
        </div>
        {/* Add your contact information or a contact form here */}
      </div>
    </section>
  );
}
