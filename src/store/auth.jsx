import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || false
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        user: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { user } = auth.actions
export default auth.reducer