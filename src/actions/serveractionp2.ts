"use server"
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import {RecursiveCharacterTextSplitter} from "langchain/text_splitter"
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
export async function getDetails(){

    const llm=new ChatGoogleGenerativeAI({
        model:"gemini-2.0-flash",
        temperature:0.7,
        apiKey:process.env.GEMINI_API_KEY!
    })

    const user=await getServerSession()
    if(user && user.user && user.user.email){
        const usr=await prisma.user.findUnique({
            where:{email:user.user.email}
        })
        if(usr && usr.pdf){
            const res=await fetch(usr?.pdf)
            const arrBuff=await res.arrayBuffer();
            const blob=new Blob([arrBuff],{type:"application/pdf"})
            const loader = new PDFLoader(blob);
            const docs = await loader.load();
            const splitter=new RecursiveCharacterTextSplitter({
                chunkSize:1000,
                chunkOverlap:200
            })
            const spitedText=await splitter.splitDocuments(docs)
            const summary=[]
            let ch=0;
            console.log(`\n total ChunkSize=${spitedText.length} \n`)
            for (const chunk of spitedText){
                const prompt=`Summarize the following content:\n${chunk.pageContent}`
                const result= await llm.generate([
                    [{role:"user",content:prompt}]
                ])
                console.log(` loging ${ch++} \n `)
                summary.push(result.generations[0][0].text)
            }
            const finalSummaryInput = summary.join("\n\n");
            console.log(` loging \n `)
            const prompt=`Summarize the following summaries into one cohesive summary:\n${finalSummaryInput}`
            const finalRes=await llm.generate([
                [{role:"user",content:prompt}]
            ])
            console.log(finalRes.generations[0][0].text)
            return finalRes.generations[0][0].text
        }
    }
    return "failed to get details"
}