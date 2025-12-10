import React from 'react'
import { useState } from 'react'

const ControlForm = () => {
  const [input, setInput] = useState({username: "", password: ""})

  // function handleChange(e){
  //   const {name, value} = e.target

  //   setInput((prev) => {
  //     const updated = {...prev, [name]: value }
  //     // console.log(updated)
  //     return updated
  //   })   
  // }

    function handleSubmit(e){
      e.preventDefault()
      console.log(input)
      
    }


  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input type="text" name='username' value={input.username} minLength={5} maxLength={20} onChange={handleChange} placeholder='Enter your name' required  className='border-2 p-2 rounded'/>
        <input type="password" name='password' value={input.password} onChange={handleChange} placeholder='Enter your password' required className='border-2 p-2 rounded' />
        <input type="submit" value={"Submit"} className='border-2 p-2 rounded bg-blue-800' />
      </form>
    </div>
  )
}

export default ControlForm
