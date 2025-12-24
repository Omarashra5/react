import React, { createContext, useState } from 'react'
export const Darking = createContext()
export default function DarkingContext(props) {
    const [isDark , setDark] = useState(false)
    const style = {
        background:isDark?'black':'white',color:isDark?'white':'black'
    }
    const ToggleDark = ()=>{
        setDark(!isDark)
    }
    const FuncData = {isDark , ToggleDark , style}
    return (
        <>
            <Darking.Provider value={FuncData}>
                {props.children}
            </Darking.Provider>
        </>
    )
}
