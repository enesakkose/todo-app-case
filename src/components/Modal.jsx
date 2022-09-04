import React from 'react'
import { useSelector } from 'react-redux'
import modals from '@/modals'
import '@/components/Modal.scss'

function Modal() {

  const { name, data } = useSelector(state => state.modal)
  const modal = modals.find(modal => modal.name === name)
    
  return (
    <div className='modal'>
     <modal.element data={data}/>           
    </div>
  )
}

export default Modal