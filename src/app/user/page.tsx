"use client"
import { getDetails } from '@/actions/serveractionp2'
import React from 'react'



function Page() {
    const [dUser,setDUser]=React.useState<string>()
    async function fun (){
        const usr=await getDetails()
        const nusr=JSON.stringify(usr)
        if(nusr){
            setDUser(nusr)
            console.log(usr)
        }
    }
  return (
    <div>
        <button onClick={fun}>click</button>
        <div>
            {dUser}
        </div>
    </div>
  )
}

export default Page