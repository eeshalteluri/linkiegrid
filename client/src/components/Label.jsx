import React from 'react'

const Label = ({text, labelText}) => {
  return (
    <label 
    htmlFor={text}
    className='block w-full pb-2 font-semibold text-gray-500'
    >
    {labelText}
    </label>
)
}

export default Label