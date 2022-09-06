import React from 'react'
import Icon from '@/components/Icon'
import { createTodoModal } from '@/utils'
import '@/components/Main/MainHeader.scss'

function MainHeader() {

  return (
    <header className='mainHeader'>
        <button onClick={() => createTodoModal()} className="addTodo">
            <Icon name='Plus' size={23}/>
            Add TODO
        </button>
    </header>
  )
}

export default MainHeader