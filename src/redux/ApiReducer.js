import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState ={
    loading:false,
    data:[],
    error:''
}

export const fetchUser = createAsyncThunk("user/fetch",()=>{
    return fetch ("https://dummyjson.com/products")
    .then(res =>res.json()).then(data=>data)
})
export const myAxiosData =createAsyncThunk("users",async ()=>{
    const response = await axios.get("https://dummyjson.com/products")
    return response.data
})
const apiSlicer = createSlice({
    name:"sssr",
    initialState,
    reducer:{},
    extraReducers:builder=>{
        builder.addCase(myAxiosData.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(myAxiosData.fulfilled,(state,action)=>{
            state.loading= false,
            state.data = action.payload
        })
        builder.addCase(myAxiosData.rejected,(state,action)=>{
            state.loading= false,
            state.error="Data is wrong"
        })
    }
})
export default apiSlicer.reducer