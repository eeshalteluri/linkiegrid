import React from 'react'
import Navbar from '../containers/Navbar'
import Hero from '../containers/Hero'

const Home = () => {
  return (
    <>
    <Navbar />

    <div className='flex flex-col justify-center bg-gray-100 min-h-[70vh]'>
        <Hero />
    </div>
    </>
  )
}

export default Home