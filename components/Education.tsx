import Image from 'next/image';
import React from 'react';
import { HoverBorderGradient } from './ui/HoverBorderGradient';
import { workExperience } from '@/data';

const Education = () => {
  return (
    <div className='py-20' id='testimonials'>
      <h1 className='heading'>
        My <span className='text-purple'>Education</span>
      </h1>

      <div className='w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10'>
        {workExperience.map((card) => (
          <HoverBorderGradient
            key={card.id}
            as='button'
            containerClassName='rounded-3xl'
            className=''
          >
            <div className='flex lg:flex-row flex-col lg:items-center px-3 py-3 md:p-5 lg:p-10 gap-2'>
              <Image src={card.thumbnail} alt='logo' width={50} height={50} className='w-20' />
              <div className='lg:ms-5'>
                <h1 className='text-start text-xl md:text-2xl font-bold'>{card.title}</h1>
                <p className='text-start text-white-100 mt-3 font-semibold'>{card.desc}</p>
              </div>
            </div>
          </HoverBorderGradient>
        ))}
      </div>
    </div>
  );
};

export default Education;
