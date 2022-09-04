import React, { useState } from 'react'
import Icon from '@/components/Icon'
import { openModalHandle } from '@/utils'
import { updateTodo } from '@/api'
import { useDispatch } from 'react-redux'
import '@/components/Main/Todo.scss'

function Todo({todo}) {
    const dispatch = useDispatch()
    const [ done, setDone ] = useState(todo.isCompleted)

    const editTodoBtn = (todo) => {
      openModalHandle({
        name: 'EditTodoModal',
        data: todo
      })
    }

    const deleteTodo = (todo) => {
      openModalHandle({
        name: 'DeleteTodoModal',
        data: todo
      })
    }

  return (
    <div className={`todo ${done && 'done'}`}>
        <button onClick={() => setDone(!done)} className="todo__checkBtn">
            {done && <Icon className='tick' name='Tick'/>}
        </button>
        <p>{todo.content}</p>
        <div className="todo__actionBtns">
          <button onClick={() => editTodoBtn(todo)}>
            <Icon name='Pencil' size={22}/>
          </button>
          <button onClick={() => deleteTodo(todo)}>
            <Icon name='Delete' size={22}/>
          </button> 
        </div>
    </div>
  )
}

export default Todo