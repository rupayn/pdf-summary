"use client"
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./spotlight";
import Button from "../my-componenets/button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function SpotlightPreview() {
  const router=useRouter()
  const session=useSession()

  return (
    <div className="relative flex h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      <Spotlight
        className="-top-40 h-full left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Welcome <br /> to PDF-Summary App.
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          A Next.js app for generating PDF summaries with modern web technologies and libraries. Includes a spotlight animation effect and a user-friendly interface. Scalable and maintainable.

        </p>

        <div className=" flex items-center justify-center px-auto mt-5">
          {session.status!=='loading' ?<Button onClick={()=>session.status==='unauthenticated'?signIn():router.push('/summary')} value={session.status==='unauthenticated'?'Click to Log in':"Get Summary"}/>:<Button value={'Loading...'}/>}
        </div>
      </div>
    </div>
  );
}
