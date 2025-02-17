import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Carousel from './Carousel'

function HomeDiv() {
  return (
    <div className='flex flex-col justify-center items-center mt-5 '>
        <div className='flex flex-col justify-center items-center mt-20'>
            <h1 className='text-4xl font-bold text-primary'>Ai Room Design</h1>
            <h2 className='text-xl text-white max-w-md text-center'>Experience the next evolution in Designing the room. Create stunning, professional-quality design that cpatures your essence in seconds.</h2>

        </div>
        <div className='mt-5'>
          <Link href='/dashboard'>
          <Button>
            Get Started
          </Button>
          </Link>
        </div>
        <Carousel/>
    </div>
  )
}

export default HomeDiv 