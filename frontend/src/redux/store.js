import { configureStore } from "@reduxjs/toolkit";
import visitorReducer from './visitor';

export default configureStore({
    reducer: {
        visitor: visitorReducer
    }
})