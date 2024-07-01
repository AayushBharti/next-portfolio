'use client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from '@/components/ui/CanvasRevealEffect';
import { HoverBorderGradient } from './ui/HoverBorderGradient';

const Approach = () => {
  return (
    <section className='w-full py-20'>
      <h1 className='heading'>
        My <span className='text-purple'>Approach</span>
      </h1>
      <div className='my-20 flex flex-col lg:flex-row items-center justify-center gap-4'>
        <Card
          title='Planning & Strategy'
          icon={<AceternityIcon order='Phase 1' />}
          description="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
        >
          <CanvasRevealEffect animationSpeed={2.5} containerClassName='' />
        </Card>
        <Card
          title='Development & Progress Update'
          icon={<AceternityIcon order='Phase 2' />}
          description='Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.'
        >
          <CanvasRevealEffect
            animationSpeed={2.5}
            containerClassName=''
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title='Development & Launch'
          icon={<AceternityIcon order='Phase 3' />}
          description="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
        >
          <CanvasRevealEffect animationSpeed={2.5} containerClassName='' colors={[[125, 211, 252]]} />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl '
    >
      <Icon className='absolute h-8 w-8 -top-4 -left-4 dark:text-white-200 text-black' />
      <Icon className='absolute h-8 w-8 -bottom-4 -left-4 dark:text-white-200 text-black' />
      <Icon className='absolute h-8 w-8 -top-4 -right-4 dark:text-white-200 text-black' />
      <Icon className='absolute h-8 w-8 -bottom-4 -right-4 dark:text-white-200 text-black' />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='h-full w-full absolute inset-0 rounded-3xl'
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className='relative z-20'>
        <div className='text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center'>
          {icon}
        </div>
        <h2 className='dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center'>
          {title}
        </h2>
        <h2 className='dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-[#e4ecff]'>
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: String }) => {
  return (
    // <svg></svg>
    <div>
      <HoverBorderGradient>
        <p className='px-7 py-1 text-2xl font-bold opacity-90 text-purple'>{order}</p>
      </HoverBorderGradient>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={className}
      {...rest}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
    </svg>
  );
};

export default Approach;
