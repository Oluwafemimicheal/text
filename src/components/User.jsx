import { useState } from "react"

const User = () => {
  const [name, setName] = useState('')

  function handleOnChange(e) {
    const { value } = e.target
    setName(value)
    console.log(setName(value))

  }

  function handleOnSubmit(e) {
    e.preventDefault()

    if (name.match('/[a-z][A-Z]/[-#$]')) {
      return alert("Form Submitted successfully")
    } else {
      return alert("make sure your input contains @")
      
    }
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" value={name} onChange={handleOnChange} className="border-2 border-blue-700" />
        <button type="submit">Submit</button>
        <p>{name}</p>
      </form>
    </div>
  )
}

export default User
