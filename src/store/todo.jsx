import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: null
}

const todo = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        getTodo: (state, action) => {
            state.todos = action.payload
        },
        addTodo: (state, action) => {
            state.todos = [
                action.payload,
                ...state.todos
            ]
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const { getTodo, addTodo, deleteTodo, editTodo } = todo.actions
export default todo.reducer