import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HomeDiv() {
  return (
    <div className='flex flex-col justify-center items-center mt-5 '>
        <div className='flex flex-col justify-center items-center mt-20'>
            <h1 className='text-4xl font-bold text-primary'>Ai Room Design</h1>
            <h2 className='text-xl text-gray-500'>Desgin your Room with Ai</h2>

        </div>
        <div className='flex justify-center items-center gap-4 mt-10'>
          <div className='flex flex-col justify-center items-center'> <Image src={'/emptyRoom.jpg'} alt='emptyRoom' width={400} height={400} className='border-primary border-2 rounded-md hover:scale-105 transition-all duration-300'/>
            <h2 className='text-lg text-gray-500'>Before AI</h2>
          </div>  

            <div>
             <Image src={'/arrow.png'} alt='emptyRoom' width={50} height={50} className='animate-bounce'/> 
            </div>
            <div className='flex flex-col justify-center items-center'> <Image src={'/modern.png'} alt='emptyRoom' width={400} height={400} className='border-primary border-2 rounded-md h-[240px] hover:scale-105 transition-all duration-300'/>
              <h2 className='text-lg text-gray-500'>After AI</h2>
            </div> 
        </div>

        <div className='mt-10'>
          <Link href='/dashboard'>
          <Button>
            Get Started
          </Button>
          </Link>
        </div>
    </div>
  )
}

export default HomeDiv 