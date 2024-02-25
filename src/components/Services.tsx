import React from 'react'
import Dashboard from './Dashboard'
import ServicesCard from './ServicesCard'

const servicesData = [
  // TAFADZWA MUNYUKI
  // https://github.com/tafadzwamunyuki 
    {
        img: "/br1.png",
        title: "Hyundai Maintenance",
        desc: "We offer servicing for Hyundai vehicles",
    },

    {
        img: "/br6.png",
        title: "Honda Maintenance",
        desc: "We offer servicing for Honda vehicles",
    },

    {
      img: "/audi_logo.png",
      title: "Audi Maintenance",
      desc: "We offer servicing for Audi vehicles",
    },
]

const Services = () => {
  return (
    <div className='container pt-40'>
      <h2 className="text-4xl md:text-6xl font-normal">
      Services we <span className="text-accent">offer</span> 
      </h2>
      <p className="w-fit mx-auto">

      </p>

      <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
        {servicesData.map((item, index) => (
          <ServicesCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
    
  )
}

export default Services
