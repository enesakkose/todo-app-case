import React from 'react'
import MainHeader from '@/components/Main/MainHeader'
import Todos from '@/components/Main/Todos'
import { useSelector } from 'react-redux'
import Modal from '@/components/Modal'
import '@/components/Main/index.scss'

function Main() {

  const { open } = useSelector(state => state.modal)

  return (
    <main className={`main ${open && 'noScroll'}`}>
        <div className="container">
          {open && <Modal/>}
          <MainHeader/>
          <Todos/>
        </div>
    </main>
  )
}

export default Main