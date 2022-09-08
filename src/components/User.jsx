import React, { useState } from 'react'
import { openModalHandle } from '@/utils'
import { useSelector, useDispatch } from 'react-redux'
import { userAction } from '@/store/auth'
import '@/components/User.scss'

function User() {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  

  const createUserModal = () => {
    openModalHandle({
        name: 'CreateUserModal'
    })
  }

  const logout = () => {
    dispatch(userAction(false))
  }

  return (
    <div className='user'>
      <button 
        className={`userBtn ${user && 'noClick'}`} 
        onClick={createUserModal}
        >
        {user ? user : 'Create User'}
      </button>
      {user && <button className='logoutBtn' onClick={logout}>
        Logout
      </button>}
    </div>
  )
}

export default User