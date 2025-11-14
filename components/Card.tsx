import React from 'react';
import Pill from './Pill';

const Card: React.FC = () => {
  return (
    <div className='border p-4 rounded-md flex flex-col gap-2'>
      <h2 className='font-bold text-lg'>Card Title</h2>
      <div className='p-2 flex gap-2 mt-2'>
        <Pill title='Top Villa' />
        <Pill title='Self CheckIn' />
        <Pill title='Free Reschedule' />
      </div>
    </div>
  )
}

export default Card;
