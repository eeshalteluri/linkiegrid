import React from 'react'

const InputBox = ({type, text, labelText, register, errors }) => {
  return (
    <div>
      <label 
    htmlFor={text}
    className='block w-full pb-2 font-semibold text-gray-500'
    >
    {labelText}
    </label>

    <input 
        {...register(text)} 
        type={type} 
        name={text} 
        id={text} 
        placeholder={labelText} 
        className='w-full p-2 rounded-md border border-gray-300 hover:shadow focus:outline-none focus:border-blue-300' 
      />
      {errors[text] && <p className='text-red-500'>{errors[text].message}</p>}
    </div>
  )
}

export default InputBox