import React from 'react'
import '@/modals/CreateTodoModal.scss'

function CreateTodoModal() {
  return (
    <form className='createTodoModal'>
        <h2>Add Todo</h2>
        <textarea name="todo" />
    </form>
  )
}

export default CreateTodoModal