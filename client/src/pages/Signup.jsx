import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }
  
  return (
    <div className='bg-white h-screen flex flex-col justify-center items-center'>
      <button className='w-96 mb-4 bg-blue-200 py-2 px-6 rounded hover:bg-blue-300 focus:bg-blue-200 shadow-xl'>Google</button>

      <p className='text-2xl mb-4'>Or sign up with</p>

      <form 
      className='p-4 rounded 
      [&>label]:text-sm [&>label]:font-semibold [&>label]:text-gray-500
      [&>input]:w-96 [&>input]:border-2 [&>input]:border-blue-200 [&>input]:rounded [&>input]:p-2 flex flex-col gap-2 shadow-2xl'>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" className='hover:shadow'/>

        <label htmlFor="firstName">First Name</label>
        <input type="text" name='firstName' id='firstName' className='hover:shadow'/>

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" className='hover:shadow'/>

        <label htmlFor="password">Password</label>
        <input 
        onChange={toggleShowPassword}
        type={showPassword ? "text" : "password"} 
        name="password" 
        id="password" 
        className='hover:shadow'/>

        <input type="submit" value="Submit" className='bg-blue-200 py-2 px-6 border-none rounded hover:bg-blue-300'/>
      </form>

        <p className='mt-8'>Already have an account? <Link to="/login" className='hover:text-blue-400 underline'>Login</Link></p>
        
    </div>
  );
}

export default Signup;
