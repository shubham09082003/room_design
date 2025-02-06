import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"



function Header() {
  return (
    <div  className ="p-5 shadow-md flex justify-between items-center">
        <div className='flex items-center gap-2'>
          <Link href='/'>
          <div className='flex items-center gap-2'>
            <Image src="/logo.svg" alt="logo" width={40} height={40}/>
              <h2 className='font-bold text-lg'>
                  Room Design
              </h2>
          </div>
          </Link>
        </div>
      <div>

        <Link href='/dashboard'>
          <Button>Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}

export default Header