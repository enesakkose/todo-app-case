import React from 'react'
import { useSelector } from 'react-redux'
import modals from '@/modals'
import '@/components/Modal.scss'

function Modal() {

  const { name } = useSelector(state => state.modal)
  const modal = modals.find(modal => modal.name === name)
    
  return (
    <div className='modal'>
     <modal.element/>           
    </div>
  )
}

export default Modal