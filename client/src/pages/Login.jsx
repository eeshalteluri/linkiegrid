import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { BACKEND_URL } from '../config'


import InputBox from '../containers/InputBox'
import { LoginSchema } from '../validation'



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm({resolver: zodResolver(LoginSchema)});

  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const submithandler = async (data) => {
    try{
      await axios.post(`${BACKEND_URL}/auth/login`, data, {withCredentials: true})
      navigate('/dashboard')
    }
    catch(error){
      console.log("Login Error: ", error)
      setError('root', { message: error.response.data?.message })
    }
  }

  return (
    <div className='bg-blue-50 h-screen flex justify-center items-center'>
      <div className='w-[90vw] sm:w-[400px] p-6 border border-gray rounded-md shadow-xl flex flex-col gap-4 bg-white'>
      <h1 className='text-center text-2xl font-bold'>Login</h1>
        <h2>Enter your email below to login to your account</h2>

        <form 
        onSubmit={handleSubmit(submithandler)} 
        className='flex flex-col gap-4'>
          
          <InputBox 
          type="email" 
          text="email" 
          labelText="Email Address"
          register={register}
          errors={errors} 
          />
          <InputBox 
          type="password" 
          text="password" 
          labelText="Password"
          register={register}
          errors={errors}
          />

            {errors.root && <p className='bg-red-100 p-2 rounded-md text-red-500'>{errors.root.message}</p>}

          <button 
          type="submit"  
          className='bg-blue-300 py-2 px-6 border-none rounded-md hover:bg-blue-200 focus:bg-blue-300'>Login</button>

          <button
            type="button"
            className='border py-2 px-6 rounded-md hover:bg-gray-100'
          >
            Signup with Google
          </button>
        </form>

        <p className='text-center'>Don't have an account? <Link to="/signup" className='underline hover:text-blue-300'>Signup</Link></p>
      </div>
    </div>
)}

export default Login