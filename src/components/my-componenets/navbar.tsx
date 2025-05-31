"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import Button from "./button";

function NavBar() {
  const { data: session, status } = useSession();

  return (
    <nav className="fixed z-50 h-20 bg-black/50 backdrop-blur-2xl w-full px-4 flex items-center justify-between">
      {status === "loading" ? (
        <div className="text-white">Loading...</div>
      ) : session?.user ? (
        <div className="flex w-full items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            {session.user.image && (
              <Image
                src={session.user.image}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <p className="text-white text-xl font-semibold">
              {session.user.name}
            </p>
          </div>
          <div>
            <Button onClick={() => signOut()} value="Logout" color="bg-red-900">
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-white text-xl font-semibold text-center">
          Not signed in
        </div>
      )}
    </nav>
  );
}

export default NavBar;
