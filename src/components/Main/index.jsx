import React from 'react'
import MainHeader from '@/components/Main/MainHeader'
import Todos from '@/components/Main/Todos'
import '@/components/Main/index.scss'


function Main() {
  return (
    <main className='main'>
        <div className="container">
          <MainHeader/>
          <Todos/>
        </div>
    </main>
  )
}

export default Main