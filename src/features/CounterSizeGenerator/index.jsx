import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { updateSize } from '../counterSlice'
import '../../assert/css/multipleCounter.css'
export default function CounterSizeGenertor(props) {
    const [size, setSize] = useState(0)
    const dispatch = useDispatch()
    const update = (event)=>{
        let val = Number(event.target.value)
        setSize(val)
        dispatch(updateSize(val))
    }
  return (
    <div>
        <input type="number" value={size} onChange={update} />
    </div>
  )
}
