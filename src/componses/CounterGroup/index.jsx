import React,{useState} from 'react'
import Counter from '../Counter'
export default function CounterGroup(props) {
    const {size} = props
    const counterList = Array(size).fill(Date.now())
  return (
    <div>
        {
            counterList.map((item,idx)=>{
                return <Counter key={idx}/>
            })
        }
    </div>
  )
}
