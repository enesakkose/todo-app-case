import React, { useEffect, useRef } from "react"

export const useClickedOut = (handler) => {
    const outClickRef = useRef()

    useEffect(() => {
        const maybeHandler = (e) => {
            if(!outClickRef.current.contains(e.target)){
                handler()
            }
        }

        document.addEventListener("mousedown", maybeHandler)
        
        return () => {
            document.removeEventListener("mousedown", maybeHandler)
        }
    })

    return outClickRef
}