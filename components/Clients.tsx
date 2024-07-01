import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { testimonials } from '@/data';

const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
      <h1 className='heading'>
        Kind words form <span className='text-purple'>satsified clients</span>
      </h1>
      <div className='h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden'>
        <InfiniteMovingCards items={testimonials} direction='right' speed='slow' />
      </div>
    </div>
  );
};

export default Clients;
