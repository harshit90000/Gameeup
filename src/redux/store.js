import { configureStore } from  "@reduxjs/toolkit"
import logger from "redux-logger";
import ApiReducer from './ApiReducer'
import ProductReducer from "./ProductReducer";

const store = configureStore({
    reducer:{
        productReduce : ApiReducer,
        apiReducer : ProductReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)

})
export default store