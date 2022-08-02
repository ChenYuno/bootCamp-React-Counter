import React,{useState} from 'react'
import CounterGroup from '../CounterGroup'
import CounterSizeGenertor from '../CounterSizeGenerator'
import CounterGroupSum from '../CounterGroupSum'
import { useSelector } from 'react-redux'
export default function MultipleCounter() {
    const size = useSelector((state)=>{return state.counter.size})
  return (
    <div>
        <CounterSizeGenertor/>
        <CounterGroupSum/>
        <CounterGroup size={size}/>
    </div>
  )
}
