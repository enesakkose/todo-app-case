import React from 'react'
import { useSelector } from 'react-redux'
import modals from '@/modals'

function Modal() {

  const { name } = useSelector(state => state.modal)
  const modal = modals.find(modal => modal.name === name)
    
  return (
    <>
     <modal.element/>           
    </>
  )
}

export default Modal