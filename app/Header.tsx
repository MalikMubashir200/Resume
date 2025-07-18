import React from 'react';
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <header className='fixed h-16 md:h-screen w-full md:w-24 bg-white border-b md:border-r border-gray-300 shadow-sm z-50 flex md:flex-col items-center justify-between md:justify-start px-4 md:p-4'>
      <img 
        className='w-8 h-8 md:w-12 md:h-12 object-contain' 
        src="/logo.png" 
        alt="Logo" 
      />
      
      <div className='hidden md:flex flex-1 items-center justify-center'>
        <div className='origin-center -rotate-90 whitespace-nowrap'>
          <h1 className='text-[1.3rem] font-normal text-gray-700 mb-1'>Malik Mubashir</h1>
          <p className='text-sm text-gray-500'>Web Developer</p>
        </div>
      </div>

      <button className='text-gray-700 hover:text-blue-600'>
        <IoMenu className='h-6 w-6 md:h-5 md:w-5' />
      </button>
    </header>
  );
};

export default Header;