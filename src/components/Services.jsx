import React from 'react'
import { assets, serviceData } from '../assets/assets'
const Services = () => {
    return (
        <div className='w-full px-[12%] py-10 scroll-mt-20' id='services'>
            <h2 className='text-center text-5xl font-Ovo' >My Expertise</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12font-Ovo'>
                I am a full stack developer with expertise in building scalable web applications using modern technologies.
                My skills include front-end and back-end development, database management, and cloud computing.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div key={index}
                        className='border border-gray-400 rounded-lg px-8 
                py-8 hover:shadow-black cursor-pointer 
                hover:bg-gray-100 hover:-translate-y-1 
                duration-500'>
                        <div className='flex items-center gap-3 my-4'>
                            <img src={icon} alt={title} className='w-6 h-6 flex-shrink-0'/>
                            <h3 className='text-lg text-gray-700'>{title}</h3>
                        </div>
                        <p className='text-sm text-gray-600 leading-5'>{description}</p>
                        <a href={link} className='inline-flex items-center gap-2 text-sm mt-5 group'>
                            <span>Read more</span>
                            <img
                                src={assets.right_arrow}
                                alt=''
                                className='w-4 transition-transform group-hover:translate-x-1'
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
