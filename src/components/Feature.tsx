import React from 'react'
import Dashboard from './Dashboard'
import Image from 'next/image'
import { BsLightningChargeFill } from "react-icons/bs";

const Feature = () => {
  return (
    <div className='container pt-40'>
      <h2 className='text-6xl font-normal'>Featured</h2>
      <h2 className='text-6xl font-normal pt-2'>
        Cars<span className='text-accent'>For Hire</span>
      </h2>

      <p className='max-w-[550px] pt-10 text-gray-700'>Cars are available for hire upon request and only by appointment by registered customers. Customers must first create a user portal account and be verified with our security team. After a thorough security clearance, only then can a customer start the process of paying the hire fee for a desired car.</p> 

      <div className='grid md:grid-cols-[1fr, 37%, 1fr] gap-16 mt-10'>
        <div className='w-fit mx-auto self-end'>
            <Image
                src={require('../../public/images/ncm1.png')}
                className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl rounded-full"
                height={600}
                width={300}
                alt=""
            />

            <div className='space-y-4'>
    
                <h2 className='font-medium text-xl'>
                    Get A Quote
                </h2>
                <p className='text-gray-700 text-[14px] xl:text-[16px]'>
                    Are you looking to get around the city fast? If so we have this Audi A6 that will help you manouvre around the city so fast at the speed of <BsLightningChargeFill />
                </p>
            </div>
            

            <div className='w-fit mx-auto'>
            <Image
                src={require('../../public/images/audiA6.png')}
                className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl rounded-full bg-white"
                height={500}
                width={900}
                alt=""
            />

            <div className='space-y-4'>
           
                <h2 className='font-medium text-xl'>
                    Get A Quote
                </h2>
                <p className='text-gray-700 text-[14px] xl:text-[16px]'>
                    Spectacular set of wheels waiting to be hired. Ideal for all sorts of events. Hire Me Now!
                </p>
            </div>

            <Image
                src={require('../../public/images/vintage103.png')}
                className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl rounded-full"
                height={600}
                width={300}
                alt=""
            />

            <div className='space-y-4'>
            
                <h2 className='font-medium text-xl'>
                    Get A Quote
                </h2>
                <p className='text-gray-700 text-[14px] xl:text-[16px]'>
                    Have your wedding in style. Hire our great selection of vinatges and be driven in style to your chosen event.
                </p>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Feature

