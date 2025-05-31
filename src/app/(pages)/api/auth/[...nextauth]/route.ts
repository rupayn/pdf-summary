import { prisma } from "@/lib/prisma"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers:[
    GoogleProvider({
      clientId:process.env.O_AUTH_CLIENT_ID!,
      clientSecret:process.env.O_AUTH_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  callbacks:{
    async signIn({user}){
      await prisma.user.upsert({
        where:{
          email:user.email!
        },
        update:{},
        create:{
          email:user.email!,
          name:user.name,
          image:user.image,
          createdAt:new Date()

        }
      })
      return true
    },
    async session({session}){
      return session
    }
  }

}) 

export const GET=handler
export const POST=handler