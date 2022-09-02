import React, { useState } from 'react'
import Icon from '@/components/Icon'
import { openModalHandle } from '@/utils'
import '@/components/Main/Todo.scss'

function Todo() {
    const [ done, setDone ] = useState(false)

    const editTodo = () => {
      openModalHandle({
        name: 'EditTodoModal'
      })
    }

    const deleteTodo = () => {
      openModalHandle({
        name: 'DeleteTodoModal'
      })
    }

  return (
    <div className={`todo ${done && 'done'}`}>
        <button onClick={() => setDone(!done)} className="todo__checkBtn">
            {done && <Icon className='tick' name='Tick'/>}
        </button>
        <p>ekmek almaya git lütfen</p>
        <div className="todo__actionBtns">
          <button onClick={editTodo}>
            <Icon name='Pencil' size={22}/>
          </button>
          <button onClick={deleteTodo}>
            <Icon name='Delete' size={22}/>
          </button> 
        </div>
    </div>
  )
}

export default Todo