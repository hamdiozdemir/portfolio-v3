import { createSlice } from "@reduxjs/toolkit";

export const visitorSlice = createSlice({
    name: 'visitor',
    initialState: {
        uid: localStorage.getItem('visitor'),
        lang: localStorage.getItem('lang'),
        notice: localStorage.getItem('notice') ? true : false
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
        },
        noticeUnderstood: (state, action) => {
            localStorage.setItem('notice', true);
        }
    }
});

export const {
    userLoadedSuccess,
    userDelete,
    noticeUnderstood
} = visitorSlice.actions;

export default visitorSlice.reducer;