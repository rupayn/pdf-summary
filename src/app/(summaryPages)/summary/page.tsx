"use client"
import { getDetails } from "@/actions/serveractionp2";
import { cn } from "@/lib/utils";
import React from "react";

function Page() {

  const [response,setResponse]=React.useState("")
  const[count,setCount]=React.useState(0)
  const [loading,setLoading]=React.useState(false)

  React.useEffect(()=>{
    (async () => {
      setLoading(true)
      const res=await getDetails()
      setResponse(res)
      setLoading(false)
  })()
  },[count])

  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-20 mx-auto max-w-3xl p-6 bg-black bg-opacity-30 backdrop-blur-md border border-neutral-700 rounded-md overflow-y-auto h-96">
        <h1 className="text-2xl font-bold text-white text-center">Summary</h1>
        <div className="text-white mt-2">
          {/* Place the text summary here */}
          <button onClick={()=>setCount(count+1)}>click</button>
         { loading?<div>Loading</div>:response}
        </div>
      </div>
    </div>
  );
}

export default Page;
