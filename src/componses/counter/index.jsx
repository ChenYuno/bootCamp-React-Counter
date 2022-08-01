import React,{useState} from 'react'
import '../../assert/css/counter.css'
export default function Counter() {
    const [count,setCount]  =useState(0)
    const increase = ()=>{
        setCount(count+1)
    }
    
    const decrease = ()=>{
        setCount(count-1)
    }
  return (
    <div>
        <input onClick={increase} type="button" value="+" />
        <span>{count}</span>
        <input onClick={decrease} type="button" value="-" />
    </div>
  )
}
