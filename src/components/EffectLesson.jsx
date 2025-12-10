import React, { useEffect, useState } from 'react'
import axios from 'axios'

const EffectLesson = () => {
  const [counter, setCounter] = useState(0)
  // const [data, setData] = useState([])
  const [timer, setTimer] = useState(new Date())

  
  console.log(timer)
  useEffect(()=>{
    // const fetchData = async() =>{
    //   try {
    //     const response = await axios.get("https://dummyjson.com/products")
    //     const data = response.data
    //     const status = response.statusText="Ok"
    //     console.log(status)
    //     setData(data.products)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // fetchData()

    const interval = setTimeout(()=>{             
      console.log("Pop up")
    }, 3000)

    return () => {
      clearTimeout(interval)
    }
  }, [])


  return (
    <div>
      {/* {data.map((product)=> {
        return <div key={product?.id}>
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <hr/>
        </div>
      })} */}
      <h1>{timer.toLocaleTimeString()}</h1>
      <h1>{counter}</h1>
      <button onClick={()=> setCounter(counter + 1)}>Increase</button>
    </div>
  )
}

export default EffectLesson
