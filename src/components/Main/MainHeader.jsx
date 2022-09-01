import React from 'react'
import Icon from '@/components/Icon'
import { closeModal, openModal } from '@/store/modal'
import { useDispatch, useSelector } from 'react-redux'
import '@/components/Main/MainHeader.scss'

function MainHeader() {
  const dispatch = useDispatch()
  const addTodo = () => {
    dispatch(openModal({
      name: 'CreateTodoModal'
    }))
  }

  return (
    <header className='mainHeader'>
        <button onClick={addTodo} className="addTodo">
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