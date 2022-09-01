import React, { useState } from 'react'
import Icon from '@/components/Icon'
import '@/components/Main/Todo.scss'

function Todo() {
    const [ done, setDone ] = useState(false)

  return (
    <div className={`todo ${done && 'done'}`}>
        <button onClick={() => setDone(!done)} className="todo__checkBtn">
            {done && <Icon className='tick' name='Tick'/>}
        </button>
        <p>ekmek almaya git lütfen</p>
        <div className="todo__actionBtns">
          <button>
            <Icon name='Pencil' size={22}/>
          </button>
          <button>
            <Icon name='Delete' size={22}/>
          </button> 
        </div>
    </div>
  )
}

export default Todo