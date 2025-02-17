import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"



function Header() {
  return (
    <div  className ="p-5 shadow-lg rounded-lg flex justify-between items-center w-[90%] mx-auto border-b-2 border-gray">
        <div className='flex items-center gap-2'>
          <Link href='/'>
          <div className='flex items-center gap-2'>
            <Image src="/logo.svg" alt="logo" width={40} height={40}/>
              <h2 className='font-bold text-white text-lg'>
                  Room Design
              </h2>
          </div>
          </Link>
        </div>
      <div className='transition-all duration-300 hover:shadow-lg hover:scale-105'> 

        <Link href='/dashboard'>
          <Button>Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}

export default Header