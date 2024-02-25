import React from 'react'
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='container pt-6'>
        <div className='flex justify-start items-center'>
            <Image
                src={require('../../public/icons/logo.png')}
                width={80}
                height={50}
                className="rounded-lg"
                alt="logo"
            />
            <ul className='md:flex hidden gap-4 items-center font-normal text-[14px]'>
                <li>
                    Home
                </li>
                <li>
                    About Us
                </li>
                <li>
                    Cars
                </li>
                <li>
                    Services
                </li>
                <li>
                    Contact 
                </li>

                <button className='bg-accent text-white px-8 py-2 rounded-3xl'>
                    Register
                </button>
            </ul>

            <ul>
            <button className='bg-teal-800 text-white px-8 py-2 rounded-3xl'>
                    Login
                </button>
            </ul>

            <AiOutlineMenu className='md:hidden text-accent'
                size={30}
             />
        </div>
    </div>
  )
}

export default Navbar
