import React from 'react'
import Counter from '../Counter'
export default function CounterGroup(props) {
  const { size } = props
  const counterList = Array(size).fill(Date.now())
  return (
    <div>
      {
        counterList.map((item, idx) => {
          console.log(counterList)
          return <Counter countId={idx} key={idx}/>
        })
      }
    </div>
  )
}
