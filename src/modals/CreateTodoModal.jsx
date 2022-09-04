import React, { useState } from 'react'
import { closeModalHandle } from '@/utils'
import { nanoid } from 'nanoid'
import { createTodo } from '@/api'
import { useDispatch } from 'react-redux'


function CreateTodoModal() {
  
  const dispatch = useDispatch()  
  const [ todo, setTodo ] = useState({
    content: '',
    isCompleted: false,
    id: nanoid()
  })

  const formSubmit = (e) => {
    e.preventDefault()
    dispatch(createTodo(todo))
    closeModalHandle()
  }



  return (
    <div className="createTodoModal">
      <form onSubmit={formSubmit} className='modalForm'>
          <h2>Add Todo</h2>
          <textarea 
            name="todo" 
            rows='3'
            maxlength='200'
            placeholder='Todo...'
            value={todo.content}
            onChange={(e) => setTodo({content: e.target.value})}
          />
          {todo.content.length === 200 && 'You have reached to max character'}
          <div className="modalForm__btns">
            <button type='button' onClick={() => closeModalHandle()}>Cancel</button>
            <button 
            disabled={todo.content.trim().length < 3} 
            type='submit'
            className='actionBtn'
            >
              Add
            </button>
          </div>
      </form>
    </div>
  )
}

export default CreateTodoModal