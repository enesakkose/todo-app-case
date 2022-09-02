import React from 'react'
import { closeModalHandle } from '@/utils'
import '@/modals/EditTodoModal.scss'

function EditTodoModal() {

  const formSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="editTodoModal">
      <form onSubmit={formSubmit} className='modalForm'>
          <h2>Edit Todo</h2>
          <textarea 
            name="todo" 
            rows='3' 
            placeholder='Todo...'
            
            
          />
          <div className="modalForm__btns">
            <button onClick={() => closeModalHandle()}>Cancel</button>
            <button className='actionBtn'>
              Edit
            </button>
          </div>
      </form>
    </div>
  )
}

export default EditTodoModal