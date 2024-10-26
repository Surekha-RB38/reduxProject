import { createSlice } from "@reduxjs/toolkit";
const intialSate={
    count:0
}
export const counterSlice=createSlice({
    name:"counter",
    intialSate,
    reducers:{
        incCount:(state, action)=>{
           state.count++
        },
        decCount:(state,action)=>{
            state.count--;
        },
        resetCounter:(state)=>{state.count=intialSate.count}
        
    }
})

export const{incCount, decCount, resetCounter}= counterSlice.actions;

const counterReducer = counterSlice.reducer;
export default counterReducer; 