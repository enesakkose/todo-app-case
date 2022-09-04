import React, { useEffect } from 'react'
import Todo from '@/components/Main/Todo'
import EmptyTodos from '@/components/Main/EmptyTodos'
import { fetchTodos } from '@/api'
import { useDispatch, useSelector } from 'react-redux'
import '@/components/Main/Todos.scss'

function Todos() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  const { todos } = useSelector(state => state.todo)
  console.log(todos)
  if(todos.length === 0) return 'loading...'
  
  return (
    <div className='todos'>
        <h1>TODOS</h1>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo}/>
        ))}
    </div>
  )
}

export default Todos