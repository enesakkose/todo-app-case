import React, { useState } from 'react'
import { closeModalHandle } from '@/utils'
import { useFocus } from '@/hooks/useFocus'
import { useDispatch } from 'react-redux'
import { updateTodo } from '@/api'


function EditTodoModal({data, outClickRef}) {
  const focusRef = useFocus()
  const dispatch = useDispatch()
  const [ content, setContent ] = useState(data.content)

  const formSubmit = (e) => {
    e.preventDefault()
    dispatch(updateTodo(data.id, {
      content
    }))
    closeModalHandle()
  }

  const end = content.length

  return (
    <div className="editTodoModal">
      <form ref={outClickRef} onSubmit={formSubmit} className='modalForm'>
          <h2>Edit Todo</h2>
          <textarea
            ref={focusRef}
            name="todo" 
            rows={3}
            maxLength={200}
            placeholder='Todo...'
            onFocus={(e) => e.target.setSelectionRange(end,end)}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {content.length === 200 && 'You have reached to max character'}
          <div className="modalForm__btns">
            <button type='button' onClick={() => closeModalHandle()}>Cancel</button>
            <button disabled={content.trim().length < 3} type='submit' className='actionBtn'>
              Edit
            </button>
          </div>
      </form>
    </div>
  )
}

export default EditTodoModal
