'use client'
/*

<div className="text-2xl font-bold fixed z-6 mt-5 ml-5">

            <button className="px-4 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200" onClick={()=>window.history.back()}>
                Back
            </button>

        </div>

*/

import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <div className="text-2xl font-bold fixed z-6 mt-5 ml-5">

            <button className="px-4 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200" onClick={()=>window.history.back()}>
                Back
            </button>

        </div>

        {children}
    </div>
  )
}

export default layout