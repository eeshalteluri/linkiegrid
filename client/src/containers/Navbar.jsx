import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
        <nav className='sticky bg-white top-0 p-4 text-xl flex justify-between items-center'>
                <Link to="/" className='pl-8 text-2xl'>Linkiegrid</Link>

                <div className=' gap-4 hidden md:flex pr-100'>
                    <Link to="/login" className='bg-blue-200 py-2 px-6 rounded hover:bg-blue-300 focus:bg-blue-200'>Login</Link>
                    <Link to="/signup" className='bg-blue-200 py-2 px-6 rounded hover:bg-blue-300 focus:bg-blue-200'>Signup</Link>
                </div>

                <div 
                onClick={() => setIsOpen(!isOpen)} 
                className='md:hidden pr-8'>
                {isOpen ? <IoMdClose className='text-2xl'/> : <IoIosMenu className='text-2xl'/> } 
                {isOpen ? 
                <div className='p-4 rounded bg-blue-100 gap-2 flex flex-col absolute top-15 right-10 z-1'>
                    <Link to="/login" className='bg-blue-300 py-2 px-6 rounded hover:bg-blue-400 focus:bg-blue-200'>Login</Link>
                    <Link to="/signup" className='bg-blue-300 py-2 px-6 rounded hover:bg-blue-400 focus:bg-blue-200'>Signup</Link>
                </div> : null}
                </div>
                
        </nav>
        <hr />
    </>
  )
}

export default Navbar