import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../features/counter/counterSlice'

// In redux store represents the container for initalstate of an app 
export const store = configureStore({
    reducer:{
        counter: countReducer,
    }
})