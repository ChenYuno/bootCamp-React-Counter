import React,{useState} from 'react'
import CounterGroup from '../CounterGroup'
import CounterSizeGenertor from '../CounterSizeGenerator'
export default function MultipleCounter() {
    const [defaultCount, setDefaultCount] = useState(0)
    const changeSize = (value)=>{
        setDefaultCount(value)
    }
  return (
    <div>
        <CounterSizeGenertor changeSize={changeSize}/>
        <CounterGroup size={defaultCount}/>
    </div>
  )
}
