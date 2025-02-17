"use client"
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import EmptyState from './EmptyState';
import Link from 'next/link';
import db from '@/config/db';
import { eq } from 'drizzle-orm';
import { AiGeneratedImages } from '@/config/schema';
import RoomDesignOutput  from './RoomDesignOutput'

function Listing() {

    const { user } = useUser();
    const [roomList, setRoomList] = useState([]);

    useEffect(() => {
        user&&getRoomList();
    },[user])

    const getRoomList = async () => {
        const response = await db.select().from(AiGeneratedImages)
            .where(eq(AiGeneratedImages.userEmail, user?.emailAddresses[0].emailAddress));
        setRoomList(response);
    }   


  return (
    <div>

        <div className='flex justify-between items-center'>
            <h2 className='text-3xl font-bold text-white'>
                Hello, {user?.fullName}
            </h2>
            <Link href='/dashboard/create-new'>
                <Button>+ Redesign Room</Button>
            </Link>
        </div>

        {roomList?.length == 0 ?
            <EmptyState/>
            :
            <div className='mt-10'>
            <h2 className='text-primary font-medium text-xl mb-10'>Your Studio</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-10'>
                {roomList.map((room,index) => (
                    <RoomDesignOutput key={index} room={room}/>
                ))}
            </div>
            </div>
        }
    </div>

  )
}

export default Listing