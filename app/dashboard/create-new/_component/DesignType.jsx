import Image from 'next/image'
import React, { useState } from 'react'

function DesignType({selectedDesignType}) {
    const Designs = [
        {
            name : 'Modern',
            image : '/modern.png'
        },
        {
            name : 'Traditional',
            image : '/traditional.jpg'
        },
        {
            name : 'Industrial',
            image : '/industrial.jpg'
        },
        {
            name : 'Bohemian',
            image : '/bohemian.jpg'
        },
    ]

    const [selectedDesign, setSelectedDesign] = useState()

  return (
    <div>
        <div className='mt-5'>
            <label className='text-gray-400'>Select Design Type</label>
            <div className='grid grid-cols-2 mt-3 gap-5 md:grid-cols-3 lg:grid-cols-4'>
                {Designs.map((design,index) => (
                    <div className='text-gray-400' key={index} onClick={() => {setSelectedDesign(design.name); selectedDesignType(design.name)}}>
                        <Image src={design.image} alt={design.name} width={100} height={100} className={`h-[70px] rounded-md hover:scale-105 transition-all cursor-pointer

                            ${design.name == selectedDesign && 'border-2 border-primary rounded-md p-1'}       
                        `} />
                        <h2>{design.name}</h2>

                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default DesignType