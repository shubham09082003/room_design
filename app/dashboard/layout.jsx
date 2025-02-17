import React from 'react'
import Header from './_component/Header'

function DashboardLayout({children}) {
  return (

    <div className='bg-gradient-to-b from-[#434343] to-black w-full h-screen overflow-auto'>
        <Header/>
        <div className='pt-20 px-10 md:px-20 lg:px-40 xl:px-60'>
            {children}
        </div>
    </div>


  )
}


export default DashboardLayout