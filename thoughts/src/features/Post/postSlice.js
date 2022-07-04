import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Learning Redux Toolkit", content: "I've done this work" },
  { id: "2", title: "Learning Redux Toolkit", content: "I've done this work" },
];

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postAdded(state, action){
            state.push(action.payload);
        }
    }
});

export const {postAdded} = postSlice.actions; 

export default postSlice.reducer