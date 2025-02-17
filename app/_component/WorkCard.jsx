import React from 'react'

function WorkCard({image, title, description}) {
  return (
    <div className='shadow-md p-5 bg-[#434343] rounded-lg w-80  transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/50'>
        <div className='flex flex-col items-center gap-4'>
            <div className='bg-white p-3 rounded-full'>
                <img src={image} width={50} height={50}/>
            </div>

            <h1 className='text-white text-xl'>{title}</h1>

            <h2 className='text-gray-400 text-center'>{description}</h2>
        </div>
    </div>
  )
}

export default WorkCard