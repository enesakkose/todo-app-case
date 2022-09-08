import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || false
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userAction: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { userAction } = auth.actions
export default auth.reducer