import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='text-center w-content mx-6'>
      <h1 className='text-6xl font-bold'>Stylish link-tree for your bio</h1>
      <p className='text-2xl py-4'>Get rid of old & boring links</p>

      <Link 
        to="/signup" 
        className='inline-block text-xl bg-blue-200 mt-4 py-2 px-6 rounded hover:bg-blue-300 focus:bg-blue-200'
      >
        Build your Magic tree!
      </Link>
    </div>
  );
}

export default Hero;
