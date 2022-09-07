import axios from "axios"
import { getTodo, addTodo, deleteTodo, editTodo } from "@/store/todo"

const baseUrl = 'https://631058b6826b98071a3ead24.mockapi.io/todos'

export const fetchTodos = () => async(dispatch) => {
  try {
    const { data } = await axios.get(`${baseUrl}`)
    dispatch(getTodo(data.reverse()))

  } catch (error) {
    console.log(error.message)
  }
}

export const createTodo = (newTodo) => async(dispatch) => {
  try {
    const { data } = await axios.post(`${baseUrl}`, newTodo)
    dispatch(addTodo( data ))

  } catch (error) {
    console.log(error.message)
  }
}

export const deleteReq = (id) => async(dispatch) => {
  try {
    await axios.delete(`${baseUrl}/${id}`)
    dispatch(deleteTodo(id))

  } catch (error) {
    console.log(error.message)
  }
}

export const updateTodo = (id, updateTodo) => async(dispatch) => {
  try {
    const { data } = await axios.put(`${baseUrl}/${id}`, updateTodo)
    dispatch(editTodo(data))

  } catch (error) {
    console.log(error.message)
  }
}