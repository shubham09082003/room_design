import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link';

function EmptyState() {
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
        <Image src='/placeholder.png' alt="empty" width={200} height={200}/>
        <h2 className='font-medium text-lg text-gray-500'>Create New AI Interior Design for your room</h2>
        <Link href='/dashboard/create-new'>
            <Button className='mt-5'>+ Redesign Room</Button>
        </Link>
    </div>
  )
}

export default EmptyState