import React from 'react'
import Icon from '@/components/Icon'
import { createTodoModal } from '@/utils'
import '@/components/Header.scss'

function Header() {
  return (
    <header className='header'>
        <div className="container">
            <h1>TODO</h1>
            <div className="header__userActions">
              <button className='createTodoBtn' onClick={() => createTodoModal()}>
                <Icon name='Plus' size={19}/>
              </button>
            </div>
        </div>
    </header>
  )
}

export default Header