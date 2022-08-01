import React,{useState} from 'react'
import CounterGroup from '../CounterGroup'
import CounterSizeGenertor from '../CounterSizeGenerator'
export default function MultipleCounter() {
    const [size, setSize] = useState(0)
    const changeSize = (value)=>{
        if(value<0)return 0
        setSize(value)
        return size
    }
  return (
    <div>
        <CounterSizeGenertor size={size} changeSize={changeSize}/>
        <CounterGroup size={size}/>
    </div>
  )
}
