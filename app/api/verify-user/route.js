import db from "@/config/db";
import { User } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {

    const { user } = await req.json();

    try{
        const userExists = await db.select().from(User)
            .where(eq(User.email, user?.primaryEmailAddress?.emailAddress));
        if(userExists.length == 0){
            const userData = await db.insert(User).values({
                email : user?.primaryEmailAddress?.emailAddress,
                name : user?.fullName,
                imageUrl : user?.imageUrl,
            }).returning({User});

            return NextResponse.json({
                message: "User verified successfully",
                user: userData[0].User
            });
        }
        return NextResponse.json({
            result : userExists[0]
        });
            
    }catch(error){
        console.log(error);
        return NextResponse.json({
            message: "Failed to verify user",
            error
        });
    }
}