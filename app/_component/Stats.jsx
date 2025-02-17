import React from 'react'

function Stats() {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-around gap-5 p-5 mt-20 bg-gradient-to-b from-[#271118] to-[#010000] md:w-[1280px] lg:w-[1280px] w-[90%] mx-auto rounded-lg sm:gap-4 sm:px-5">
        <div className='flex flex-col items-center gap-2'>
            <p className='text-primary font-bold text-2xl'>100K+</p>
            <p className='text-gray-400'>AI Postraits Generated</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <p className='text-primary font-bold text-2xl'>50K+</p>
            <p className='text-gray-400'>Happy Users</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <p className='text-primary font-bold text-2xl'>90%</p>
            <p className='text-gray-400'>Statisfaction Rate</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <p className='text-primary font-bold text-2xl'>24/7</p>
            <p className='text-gray-400'>AI Support</p>
        </div>
    </div>
  )
}

export default Stats;