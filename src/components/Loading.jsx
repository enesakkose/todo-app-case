import React from 'react'
import Icon from '@/components/Icon'
import '@/components/Loading.scss'

function Loading() {
  return (
    <div className='loading'>
        <Icon name='Loading' size={48}/>
    </div>
  )
}

export default Loading