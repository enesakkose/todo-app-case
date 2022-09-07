import React, { useState } from 'react'
import Icon from '@/components/Icon'
import { openModalHandle } from '@/utils'
import { updateTodo } from '@/api'
import { useDispatch } from 'react-redux'
import '@/components/Main/Todo.scss'

function Todo({todo}) {
    const dispatch = useDispatch()
    const [ isCompleted, setIsCompleted ] = useState(todo.isCompleted)
    
    
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

    const done = (id) => {
     setIsCompleted(!isCompleted)
     // this property only relating to ui 
     
      dispatch(updateTodo(id, {
        isCompleted: !isCompleted
      }))
    }

  return (
    <div className={`todo ${isCompleted && 'done'}`}>
        <button onClick={() => done(todo.id)} className="todo__checkBtn">
            {isCompleted && <Icon className='tick' name='Tick'/>}
        </button>
        <p>{todo.content}</p>
        <div className="todo__actionBtns">
          <button className='editBtn' onClick={() => editTodoBtn(todo)}>
            <Icon name='Pencil' size={22}/>
          </button>
          <button className='deleteBtn'  onClick={() => deleteTodo(todo)}>
            <Icon name='Delete' size={22}/>
          </button> 
        </div>
    </div>
  )
}

export default Todo