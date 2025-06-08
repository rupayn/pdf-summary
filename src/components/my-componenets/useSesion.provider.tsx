"use client"
import { SessionProvider } from 'next-auth/react'
import {Toaster} from "sonner"
import React from 'react'

function UseSessionProvider({children}:{children:React.ReactNode}) {
  return (
    <SessionProvider>
      <Toaster position='top-center' richColors/>
      {children}
      
    </SessionProvider>
  )
}

export default UseSessionProvider