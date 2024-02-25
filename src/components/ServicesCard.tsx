import React from 'react'
import Image from "next/image"

interface propsType {
    img: string;
    title: string;
    desc: string;
}

const ServicesCard:React.FC<propsType> = ({img, title, desc}) => {
  return (
    <div>
        <div className="space-y-3 text-center">
            <Image
                src={img}
                width={42}
                height={42}
                className="mx-auto"
                alt={title}
         // TAFADZWA MUNYUKI 
        // https://github.com/tafadzwamunyuki *
            />

            <div className="uppercase">
                {title}
                <div className="flex gap-2 w-fit mx-auto mt-2">
                    <div className="bg-accent w-[7px] h-[7px] rounded-full" />
                    <div className="bg-accent w-[7px] h-[7px] rounded-full" />
                    <div className="bg-accent w-[7px] h-[7px] rounded-full" />
                </div>
            </div>

            <p className="text-[14px] text-gray-700">{desc}</p>
        </div>
      ServicesCard
    </div>
  )
}

export default ServicesCard
