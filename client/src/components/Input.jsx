import React from 'react'

const Input = ({type, text, labelText}) => {
  return (
    <input 
    type={type} 
    name={text} 
    id={text}
    placeholder={labelText}
    className='w-full p-2 rounded-md border border-gray-300 hover:shadow focus:outline-none focus:border-blue-300' />
)
}

export default Input