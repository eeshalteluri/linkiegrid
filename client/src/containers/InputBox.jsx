import React from 'react'
import Label from '../components/Label'
import Input from '../components/Input'

const InputBox = ({type, text, labelText}) => {
  return (
    <div>
      <Label text={text} labelText={labelText}/>
      <Input type={type} text={text} labelText={labelText}/>
    </div>
  )
}

export default InputBox