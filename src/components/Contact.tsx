/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md"

const Contact = () => {
  return (
    <div className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <p className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 py-10'>
        {/* TAFADZWA MUNYUKI */}
        {/* https://github.com/tafadzwamunyuki */}
        We are located at 25 John's Avenue Birkley, Down South.
        <FaPhoneAlt className="flex justify-start items-center"/>+44 253 637 21  
      <MdOutlineMailOutline />tafadzwamunyuki@gmail.com
      </p>
    </div>
  )
}

export default Contact
