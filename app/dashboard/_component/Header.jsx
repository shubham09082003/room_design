	
"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Header() {
    const {userDetail, setUserDetail} = useContext(UserDetailContext);
    
  return (
    <div className = "p-5 shadow-md flex justify-between items-center">
        <Link href='/dashboard'>
        <div className='flex items-center gap-2'>
            <Image src="/logo.svg" alt="logo" width={40} height={40}/>
            <h2 className='font-bold text-lg'>

                Room Design
            </h2>
        </div>
        </Link>

        <Button variant="ghost" className="rounded-full text-primary">Buy More Credits</Button>




        <div className='flex items-center gap-7'>
            <div className='flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full'>
                <Image src="/star.png" alt="user" width={20} height={20}/>
                <h2>{userDetail?.credits}</h2>
            </div>
            <UserButton/>
        </div>
    </div>


  )
}

export default Header