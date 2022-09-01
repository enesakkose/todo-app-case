import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    modal: false,
    open: false
}

const modal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.name = action.payload.name
            state.open = true
        },
        closeModal: (state) => {
            state.name = false
            state.open = false
        }
    }
})

export const { openModal, closeModal } = modal.actions
export default modal.reducer