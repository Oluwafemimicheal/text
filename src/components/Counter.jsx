import User from "./User"

import { useState } from "react"

const Counter = () => {
  // const [pop, setPop] = useState(false)
  const [count, setCount] = useState(0)
  console.log(count)

  function increase (){
    setCount(count + 1)
  }

  function decrease() {
    setCount(count - 1)
  }
  

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <h1>{count}</h1>
      <p>{count >= 10 ? "Dont continue" : "you can continue"}</p>
      <button onClick={decrease}>Increase</button>
      {/* <div>
        {pop&&<User/>}
      </div>
     <button onClick={()=> setPop(true)}>Click</button> */}
    </div>
  )
}

export default Counter
