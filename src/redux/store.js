import { configureStore } from  "@reduxjs/toolkit"
import logger from "redux-logger";
import ApiReducer from './ApiReducer'
const store = configureStore({
    reducer:{
        productReduce : ApiReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)

})
export default store