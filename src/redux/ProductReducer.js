import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState ={
    loading:false,
    data:[],
    error:''
}
export const myData = createAsyncThunk("user/fetch",()=>{
    return fetch ("https://jsonplaceholder.typicode.com/users")
    .then(res =>res.json()).then(data=>data)
    
})
const productSlicer = createSlice({
    name:"Sarthi",
    initialState,
    reducer:{},
    extraReducers:builder=>{
        builder.addCase(myData.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(myData.fulfilled,(state,action)=>{
            state.loading= false,
            state.data = action.payload
        })
        builder.addCase(myData.rejected,(state,action)=>{
            state.loading= false,
            state.error="Data is wrong"
        })
    }
})
export default productSlicer.reducer