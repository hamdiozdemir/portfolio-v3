import { createSlice } from "@reduxjs/toolkit";

export const visitorSlice = createSlice({
    name: 'visitor',
    initialState: {
        uid: localStorage.getItem('visitor'),
        lang: localStorage.getItem('lange')
    },
    reducers: {
        userLoadedSuccess: (state, action) => {
            localStorage.setItem('visitor', action.payload.uid);
            localStorage.setItem('lang', action.payload.lang);
            state.uid = action.payload.uid;
            state.lang = action.payload.lang;
        },
        userDelete: (state, action) => {
            localStorage.removeItem('visitor');
            localStorage.removeItem('lang');
            state.uid = null;
            state.lang = null;
        }
    }
});

export const {
    userLoadedSuccess,
    userDelete
} = visitorSlice.actions;

export default visitorSlice.reducer;