import React, { useState } from 'react'
import { closeModalHandle } from '@/utils'
import '@/modals/CreateTodoModal.scss'

function CreateTodoModal() {
  
  const [ todo, setTodo ] = useState('')

  const formSubmit = (e) => {
    e.preventDefault()
  }

  const addTodo = () => {
    console.log('click')
  }

  return (
    <div className="createTodoModal">
      <form onSubmit={formSubmit} className='modalForm'>
          <h2>Add Todo</h2>
          <textarea 
            name="todo" 
            rows='3' 
            placeholder='Todo...'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <div className="modalForm__btns">
            <button onClick={() => closeModalHandle()}>Cancel</button>
            <button 
              disabled={todo.trim().length < 3} 
              onClick={addTodo} 
              className='addBtn'
            >
              Add
            </button>
          </div>
      </form>
    </div>
  )
}

export default CreateTodoModal