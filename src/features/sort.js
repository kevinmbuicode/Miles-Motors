
import {createSlice } from "@reduxjs/toolkit"

const initialState= {
   type:""
}

const typeSlice= createSlice({
name:"ram",
initialState,
reducers:{
    type:(state, action)=>{
        const type=action.payload.type
 state.type=type
    }

}


})

export const {type}=typeSlice.actions

export default typeSlice.reducer