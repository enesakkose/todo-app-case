import React, { useState } from 'react'
import { closeModalHandle } from '@/utils'
import { useFocus } from '@/hooks/useFocus'
import { usePressEnter } from '@/hooks/usePressEnter'
import { nanoid } from 'nanoid'
import { createTodo } from '@/api'
import { useDispatch } from 'react-redux'

function CreateTodoModal({outClickRef}) {
  const focusRef = useFocus()
  const dispatch = useDispatch()  
  const [ todo, setTodo ] = useState({
    content: '',
    isCompleted: false,
    id: nanoid()
  })

  const formSubmit = (e) => {
    e.preventDefault()
    if(todo.content.trim().length < 3 ){
       return alert('Todo length should be three or more')
    }
    dispatch(createTodo(todo))
    closeModalHandle()
  }
  
  return (
    <div className="createTodoModal">
      <form ref={outClickRef} onSubmit={formSubmit} className='modalForm'>
          <h2>Add Todo</h2>
          <textarea
            ref={focusRef}
            name="todo" 
            rows={3}
            maxLength={200}
            placeholder='Todo...'
            value={todo.content}
            onKeyPress={usePressEnter(formSubmit, todo.content)}
            onChange={(e) => setTodo({content: e.target.value})}
          />
          {todo.content.length === 200 && 'You have reached to max character'}
          <div className="modalForm__btns">
            <button 
              type='button' 
              onClick={() => closeModalHandle()}
            >
              Cancel
            </button>
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