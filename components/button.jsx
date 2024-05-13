"use client"
import React from 'react'

function ButtonWithConsoleLog({userId}) {
  return (
   <button onClick={()=>{
    console.log(userId)
   }}>
    Visitar Perfil
    </button>
  )
}

export default ButtonWithConsoleLog
