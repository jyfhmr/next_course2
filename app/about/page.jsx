"use client"
import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/navigation'
export default function about() {
    
    const router = useRouter()

    return (
        <>
            <div>
                About2
            </div>
            <button onClick={()=>{
                alert("Espera!")
                router.push("/")
            }}>
                Navegar
            </button>
        </>
    )
}
