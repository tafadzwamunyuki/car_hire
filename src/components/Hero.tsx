import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='relative min-h-screen rounded-full'>
        <Image 
            src={require('../../public/images/welcome-banner.jpg')}
            className='lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 z-10 rounded-full'
            width={1000}
            height={600}
            alt="Image"
            />  
        <Navbar />

        <div className='container h-[calc(100vh-120px)] grid place-items-center'>
            <div className='space-y-4 bg-[#fffff98] w-fit p-4 pt-6'>
                <p className='ml-1.5 uppercase font-medium'>Cars of your dreams!</p>
                <h2 className='padding-0 text-2xl sm:text-2xl font-normal'>
                    Exceptional<span className='text-accent'>Vehicles</span>
                </h2>
                <p className='text-gray-700 text-[14px] sm:text-[16px]'>Cars your desire for your occasion.<br />Make your booking now!</p>

                <button className='bg-accent text-white px-6 py-4 rounded-3xl text-[14px] sm:text-[16px]'>View Cars</button>
            </div>
        </div>
    </div>
  )
}

export default Hero
