import React, { useEffect } from 'react'


export const usePressEnter = (formSubmit, content) => {
    
    useEffect(() => {
        const listener = (e) => {
          if (e.code === "Enter" || e.code === "NumpadEnter") {
            e.preventDefault()
            {content.trim().length >= 3 && formSubmit(e)}
          }
        }

        document.addEventListener("keydown", listener)

        return () => {
          document.removeEventListener("keydown", listener)
        }
      })
}