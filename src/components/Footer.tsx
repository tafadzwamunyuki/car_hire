import React from 'react'
import { footerLinks } from "@/constants"
import Image from "next/image"
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa6"

const Footer = () => {
    // TAFADZWA MUNYUKI
  return (
    <footer className="bg-gray-600 flex flex-col text-accent mt-5 border-t border-gray-100">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 py-10">
        {/* TAFADZWA MUNYUKI */}
        {/* https://github.com/tafadzwamunyuki */}
            <div className="flex flex-col justify-start items-start gap-6">
                <Image
                    src={require('../../public/images/cars.png')}
                    width={600}
                    height={900}
                    className='rounded-full'
                    alt="footer"
                /> 

            </div>

            <div className="grid md:grid-cols-3 gap-16">
                {footerLinks.map((item) => (
                    <div key={item.title}
                    className="footer__link">
                       <h3 className="font-bold">{item.title}</h3>
                       <div className="flex flex-col gap-5">
                            {item.links.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.url}
                                    className="text-accent"
                                >
                                    {link.title}
                                </Link>
                      ))}
                      </div>
                      </div>
                ))}
            </div>
        </div>

        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
                <p>@2023 Car Hire. All rights reserved. Developed by Tafadzwa Munyuki &copy;           
                 </p>

                <div className="footer__copyrights-link">
                    <Link 
                     href="/"
                     className="text-accent">
                        Terms & Conditions
                     </Link>
                </div>
            </div>
    </footer>
  )
}

export default Footer
