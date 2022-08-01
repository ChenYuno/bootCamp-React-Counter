import React from 'react'
import '../../assert/css/multipleCounter.css'
export default function CounterSizeGenertor(props) {
    const {changeSize,size} = props
    const counterSizeChange =(element)=>{
        console.log(element)
        changeSize(Number(element.target.value))
    }
  return (
    <div>
        <input type="number" value={size} onChange={counterSizeChange} />
    </div>
  )
}
