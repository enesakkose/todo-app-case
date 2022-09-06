import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '@/store/theme'
import Icon from '@/components/Icon'
import '@/components/ThemeBtn.scss'

function ThemeBtn() {
  const dispatch = useDispatch()

  const { theme } = useSelector(state => state.theme)
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(theme))
  }, [theme])
  return (
    <button onClick={() => dispatch(setTheme(!theme))} className='themeBtn'>
      <div className="themeBtn__icons">
        <Icon className='sunny' name='Sunny' size={16}/>
        <Icon name='Moon' size={16}/> 
      </div>
      <div className={`themeBtn__drag ${theme && 'dark'}`}/>
    </button>
  )
}

export default ThemeBtn
