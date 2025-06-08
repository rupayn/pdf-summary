"use server"
import { prisma } from "@/lib/prisma"
import {v2 as cloudinary} from "cloudinary"
import { getServerSession } from "next-auth"
cloudinary.config({
        cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
        api_key:process.env.CLOUDINARY_CLOUD_API_KEY,
        api_secret:process.env.CLOUDINARY_CLOUD_API_SECRET
    })

export async function uploadAction(file:string,newName:string){
    
    const usr=await getServerSession()
    if(usr && usr.user && usr.user.email){
        const res= await cloudinary.uploader.upload(file,{
            folder:"pdf-summary",
            use_filename:true,
            unique_filename:false,
            public_id:newName.replace(/\.[^/.]+$/, ""),
            resource_type: "raw"
        })
        
        await prisma.user.update({
            where:{email:usr.user.email},
            data:{
                pdf:res.secure_url,
                pdf_id:res.public_id
            }
        })
    }
    return {
        success:true,
        

    }
}