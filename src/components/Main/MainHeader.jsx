import React from 'react'
import Icon from '@/components/Icon'
import { createTodoModal } from '@/utils'
import { useSelector } from 'react-redux'
import '@/components/Main/MainHeader.scss'

function MainHeader() {

  const { user } = useSelector(state => state.auth)

  return (
    <header className='mainHeader'>
        <button onClick={() => createTodoModal(user)} className="addTodo">
            <Icon name='Plus' size={23}/>
            Add TODO
        </button>
    </header>
  )
}

export default MainHeader