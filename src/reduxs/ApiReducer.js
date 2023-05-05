import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading: false,
    data: [],
    error: ''
}
export const myAxiosData = createAsyncThunk("users", async () => {
    const response = await axios.get("https://dummyjson.com/products")
    return response.data
})
export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (product) => {
        const response = await fetch(`https://dummyjson.com/products/${product}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const data = await response.json();
        return data;
    }
);
export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (productId) => {
        const response = await fetch(`https://dummyjson.com/products/${productId}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    }
);
const apiSlicer = createSlice({
    name: "sssr",
    initialState,
    reducer: {},
    extraReducers: builder => {
        builder.addCase(myAxiosData.pending, (state) => {
            state.loading = true
        })
        builder.addCase(myAxiosData.fulfilled, (state, action) => {
            state.loading = false,
                state.data = action.payload
        })
        builder.addCase(myAxiosData.rejected, (state, action) => {
            state.loading = false,
                state.error = "Data is wrong"
        })
        builder.addCase(addProduct.fulfilled, (state, action) => {
                state.push({
                    "id": action.payload.id,
                    "brand": action.payload.brand,
                    "category": action.payload.category,
                    "description": action.payload.description,
                    "image": action.payload.image,
                    "price": action.payload.price,
                    "title": action.payload.title
                });
        })
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            return (state = state.filter(item => item.id !== action.payload));
        });
    }
})
export default apiSlicer.reducer