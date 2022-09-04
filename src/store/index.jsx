import { configureStore } from '@reduxjs/toolkit'
import modal from '@/store/modal'
import todo from '@/store/todo'

export const store = configureStore({
  reducer: {
    modal,
    todo
  }
})