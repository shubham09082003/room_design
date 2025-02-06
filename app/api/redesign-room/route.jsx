import { NextResponse } from "next/server";
import Replicate from "replicate";
import { ref, getDownloadURL, uploadString } from 'firebase/storage';
import { storage } from '@/config/firebaseConfig';
import { AiGeneratedImages } from "@/config/schema";
import db from "@/config/db";

const replicate = new Replicate({
    auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN
})

export async function POST(req) {
    const { imageUrl, roomType, designType, additionalReq, userEmail } = await req.json();

    try{
        const input = {
            image:  imageUrl,
            prompt: `A ${roomType} with a ${designType} style Interior Design ${additionalReq || ""}`.trim()
        };
        

        const output = await replicate.run("adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38", { input });
        console.log(output);
        const base64Image = await convertToBase64(output);
        const fileName = Date.now() + ".png";
        const storageRef = ref(storage, "room-redesign/" +fileName);      
        const uploadTask = await uploadString(storageRef, base64Image,"data_url");
        console.log(uploadTask);

        const url = await getDownloadURL(uploadTask.ref);

        const dbResult = await db.insert(AiGeneratedImages).values({    
            roomType : roomType,
            designType : designType,
            additionalReq : additionalReq,
            imageUrl : imageUrl,
            aiImage : url,
            userEmail : userEmail
        }).returning({id : AiGeneratedImages.id});

        return NextResponse.json({ result: url }, { status: 200 });

    }catch(e){
        console.log(e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

async function convertToBase64(imageUrl) {
    try {
        const response = await fetch(imageUrl);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.statusText}`);
        }

        const arrayBuffer = await response.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString('base64');
        return `data:image/png;base64,${base64}`;
    } catch (error) {
        console.error("Error converting to base64:", error);
        throw error;
    }
}

