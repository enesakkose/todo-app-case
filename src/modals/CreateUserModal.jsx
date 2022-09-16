import React, { useState, useEffect } from 'react'
import { closeModalHandle } from '@/utils'
import { useFocus } from '@/hooks/useFocus'
import { useDispatch } from 'react-redux'
import { userAction } from '@/store/auth'

function CreateUserModal({outClickRef}) {
  const focusRef = useFocus()
  const dispatch = useDispatch()
  const [ userName, setUserName ] = useState('')
   
  const createUserSubmit = (e) => {
    e.preventDefault()
    if(userName.trim().length < 3 ){
       return alert('Username length should be three or more')
    }
    dispatch(userAction(userName))
    closeModalHandle()
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userName))
  }, [createUserSubmit])

  return (
    <div className='createUserModal'>
        <form onSubmit={createUserSubmit} ref={outClickRef} className='modalForm'>
          <h2>Create User</h2>
          <input
           ref={focusRef}
           type="text" 
           placeholder='Please enter the name...'
           value={userName}
           maxLength={8}
           onChange={(e) => setUserName(e.target.value)}/>
          <div className="modalForm__btns">
            <button 
              type='button' 
              onClick={() => closeModalHandle()}>
              Cancel
            </button>
            <button 
              disabled={userName.trim().length < 3} 
              type='submit' 
              className='actionBtn'>
              Create
            </button>
          </div>
        </form>
    </div>
  )
}

export default CreateUserModal