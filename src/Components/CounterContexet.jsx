import React, { createContext, useState } from 'react'
export const Counter = createContext()
export default function CounterContexet(props) {
    const [count , setcount] = useState(0)
    const inc = ()=>{
        setcount(count+1)
    }
    const dataCounter = {count , inc}
  return (
    <>
        <Counter.Provider value={dataCounter}>
            {props.children}
        </Counter.Provider>
    </>
  )
}
