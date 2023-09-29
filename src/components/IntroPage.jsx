import React from 'react';
import bg1 from '../images/bg.jpg';
import logo from '../images/logo.png'

const IntroPage = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <div className='flex flex-row w-full min-h-screen'>
        <div className='bg-black flex flex-col justify-center w-full p-6 items-center'>
          <img src={logo} width={500} className='mr-16'/>
          <h1 className='text-white font-bold text-4xl'>Where Artificial Intelligence Inspires Innovation</h1>
        </div>
        <div className='flex justify-center w-full'>
          <div className='w-full overflow-hidden'>
            <img
              src={bg1}
              className='w-full h-full object-cover top-0 left-0'
              alt='Background'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
