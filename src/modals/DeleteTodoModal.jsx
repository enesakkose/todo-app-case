import React from 'react'
import { closeModalHandle } from '@/utils'

function DeleteTodoModal() {

  const formSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='deleteTodoModal'>
        <form onSubmit={formSubmit} className='modalForm'>
          <h2>Delete Todo</h2>
          <p>This todo will be deleted. Are you sure?</p>
          <div className="modalForm__btns">
            <button onClick={() => closeModalHandle()}>Cancel</button>
            <button className='actionBtn'>
              Delete
            </button>
          </div>
      </form>
    </div>
  )
}

export default DeleteTodoModal