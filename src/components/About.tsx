import React from "react"
import Dashboard from "./Dashboard"
import Image from "next/image"

const About = () => {
    return (
      <div className='container pt-15'>
        <div className='space-y-4 w-fit mx-auto text-center'>
            <h2 className="text-4xl md:text-6xl font-bold">
                <span className="text-accent text-center">About Us</span>
            </h2>
            <p className="text-gray-700">
                Car Hire is a vehicle service offering cars for hire at affordable rates. We have vehicles for all types of functions. 
                <br />
        {/* TAFADZWA MUNYUKI */}
        {/* https://github.com/tafadzwamunyuki */}
                Car Hire website is maintained by Typescript
            </p>
            <div className="grid lg:grid-cols-[35%,1fr]pt-10">
                <div className="w-fit mx-auto">
                    <Image
                        src={require('../../public/images/banner.png')}
                        className="w-[100%] max-w-[400px] h-auto"
                        width={600}
                        height={600}
                        alt="hire"
                    />
                </div>
            </div>
            <div className="w-fit mx-auto">
 
            </div>
        </div>
      </div>
    )
  }
  
  export default About
  