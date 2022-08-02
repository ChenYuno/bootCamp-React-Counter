import React, { useState ,useEffect} from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { updateSum } from '../counterSlice'
import '../../assert/css/counter.css'
export default function Counter(props) {
    const dispatch = useDispatch()

    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1)
    }
    useEffect(()=>{
        dispatch(updateSum(count))
        return ()=>{
            dispatch(updateSum(-count))
        }
    },[count])
    const decrease = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <input onClick={increase} type="button" value="+" />
            <span>{count}</span>
            <input onClick={decrease} type="button" value="-" />
        </div>
    )
}
