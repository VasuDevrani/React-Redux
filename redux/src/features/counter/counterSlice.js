import { createSlice } from "@reduxjs/toolkit";
import React from 'react';

// object for holding all variables of state
const initialState = {
    count: 0,
}

// creating specific slice or parts to address the actiion of different components like comments, likes etc...
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increament: (state) => {
            state.count += 1;
        },
        decreament: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        increamentByAmt: (state, action) => {
            state.count += action.payload;
        }
    }
});

// exporting actions
export const {increament, decreament, reset, increamentByAmt} = counterSlice.actions;

// exporting reducer functions
export default counterSlice.reducer;