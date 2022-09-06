import React from 'react'
import { useSelector } from 'react-redux'
import { useClickedOut } from '@/hooks/useClickedOut'
import { closeModalHandle } from '@/utils'
import modals from '@/modals'
import '@/components/Modal.scss'

function Modal() {
  const outClickRef = useClickedOut(() => {
    closeModalHandle()
  })
  const { name, data } = useSelector(state => state.modal)
  const modal = modals.find(modal => modal.name === name)
  
  return (
    <div className='modal'>
     <modal.element 
     data={data} 
     outClickRef={outClickRef} 
     />           
    </div>
  )
}

export default Modal