import { configureStore } from '@reduxjs/toolkit'
import modal from '@/store/modal'
import todo from '@/store/todo'
import theme from '@/store/theme'
import auth from '@/store/auth'

export const store = configureStore({
  reducer: {
    modal,
    todo,
    theme,
    auth
  }
})