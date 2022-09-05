import React from 'react'
import { useSelector } from 'react-redux'
import { useFocus } from '@/hooks/useFocus'
import modals from '@/modals'
import '@/components/Modal.scss'

function Modal() {
  const focusRef = useFocus()
  const { name, data } = useSelector(state => state.modal)
  const modal = modals.find(modal => modal.name === name)
  
  return (
    <div className='modal'>
     <modal.element data={data} focusRef={focusRef}/>           
    </div>
  )
}

export default Modal