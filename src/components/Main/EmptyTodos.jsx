import React from 'react'
import Icon from '@/components/Icon'
import '@/components/Main/EmptyTodos.scss'

function EmptyTodos() {
  return (
    <div className='emptyTodos'>
        <Icon name='Book' size={64}/>
        <h2>Your todo list is empty</h2>
    </div>
  )
}

export default EmptyTodos