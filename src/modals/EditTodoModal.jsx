import React, { useState } from 'react'
import { closeModalHandle } from '@/utils'
import { useSelector, useDispatch } from 'react-redux'
import { updateTodo } from '@/api'


function EditTodoModal({data}) {
  const dispatch = useDispatch()
  const [ content, setContent ] = useState(data.content)

  const formSubmit = (e) => {
    e.preventDefault()
    dispatch(updateTodo(data.id, {
      content
    }))
    closeModalHandle()
  }

  return (
    <div className="editTodoModal">
      <form onSubmit={formSubmit} className='modalForm'>
          <h2>Edit Todo</h2>
          <textarea 
            name="todo" 
            rows='3'
            maxlength='200'
            placeholder='Todo...'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {content.length === 200 && 'You have reached to max character'}
          <div className="modalForm__btns">
            <button type='button' onClick={() => closeModalHandle()}>Cancel</button>
            <button disabled={content.trim().length < 3} type='submit' className='actionBtn'>
              Edit
            </button>
          </div>
      </form>
    </div>
  )
}

export default EditTodoModal