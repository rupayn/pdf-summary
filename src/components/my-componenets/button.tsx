"use client"
import React from 'react'


function Button({
  onClick,value,color
}:{onClick?:React.MouseEventHandler<HTMLButtonElement>,value?:string,color?:string}) {
  
  return (
    <button className="relative inline-flex md:min-w-44 font-bold h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={onClick}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full ${color?color:"bg-slate-950"} px-3 py-1 text-sm  text-white backdrop-blur-3xl font-bold`}>

              {value}
            </span>
          </button>
  )
}

export default Button