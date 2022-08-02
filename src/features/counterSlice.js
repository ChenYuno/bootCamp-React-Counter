// 引入 createSlice 方法
import { createSlice } from '@reduxjs/toolkit'

const initState = {
    size: 0,
    sum: 0
}


export const counterSlice = createSlice({
    name: 'counter',
    initialState: initState,
    reducers: {
        updateSize: (state, action) => {
            state.size = action.payload
        }, updateSum: (state, action) => {
            state.sum = state.sum + action.payload
        }
    },
})

export const { updateSize, updateSum } = counterSlice.actions
export default counterSlice.reducer