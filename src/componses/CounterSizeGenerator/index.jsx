import React,{useState} from 'react'
import '../../assert/css/multipleCounter.css'
export default function CounterSizeGenertor(props) {
    const {changeSize} = props
    const [size, setSize] = useState(0)
    const counterSizeChange =(element)=>{
        let val= element.target.value
        if(val < 0){
            val = 0
        }
        setSize(Number(val))
    }
    const update = (element)=>{
        counterSizeChange(element)
        changeSize(size)
    }
  return (
    <div>
        <input type="number" value={size} onChange={update} />
    </div>
  )
}
