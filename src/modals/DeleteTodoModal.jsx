import React from 'react'
import { closeModalHandle } from '@/utils'
import { deleteReq } from '@/api'
import { useDispatch } from 'react-redux'

function DeleteTodoModal({data}) {
  
  const dispatch = useDispatch()

  const formSubmit = (e) => {
    e.preventDefault()
    dispatch(deleteReq(data.id))
    closeModalHandle()
  }
  return (
    <div className='deleteTodoModal'>
        <form onSubmit={formSubmit} className='modalForm'>
          <h2>Delete Todo</h2>
          <p>This todo will be deleted. Are you sure?</p>
          <div className="modalForm__btns">
            <button type='button' onClick={() => closeModalHandle()}>Cancel</button>
            <button type='submit' className='actionBtn'>
              Delete
            </button>
          </div>
      </form>
    </div>
  )
}

export default DeleteTodoModal