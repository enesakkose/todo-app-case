import React from 'react'
import { openModalHandle } from '@/utils'
import { useSelector } from 'react-redux'
import '@/components/User.scss'

function User() {
  const { user } = useSelector(state => state.auth)
  const createUserModal = () => {
    openModalHandle({
        name: 'CreateUserModal'
    })
  }

  return (
    <button className='userBtn' onClick={createUserModal}>
        {user ? user : 'Create User'}
    </button>
  )
}
// open menu yap 1tane scroll yap readme yaz bitti aq
export default User