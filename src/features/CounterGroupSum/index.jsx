import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
export default function CounterGroupSum() {
  const sum = useSelector(state => state.counter.sum)
  return (
    <div>
        Sum:{sum}
    </div>
  )
}
