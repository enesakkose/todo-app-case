import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import Header from '@/components/Header'
import Main from '@/components/Main'


function App() {
  const { theme } = useSelector(state => state.theme)
  return (
    <div className={`App ${theme ? 'darkMode': 'lightMode'}`}>
      <Header/>
      <Main/>
    </div>
  )
}

export default App
