import React from 'react'
import Icon from '@/components/Icon'
import '@/components/Main/MainHeader.scss'

function MainHeader() {
  return (
    <header className='mainHeader'>
        <button className="addTodo">
            <Icon name='Plus' size={23}/>
            Add TODO
        </button>
        <select className='mainHeader__filter' name="filter">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
    </header>
  )
}

export default MainHeader