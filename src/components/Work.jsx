import React, { useState } from 'react'
import { assets, workData } from '../assets/assets'
const Work = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleCardClick = (link, component) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else if (component) {
      setActiveComponent(component);
    }
  };

  return (
     <div className='w-full px-[12%] py-10 scroll-mt-20' id='work'>
        <h2 className='text-center text-5xl font-Ovo' >My Latest Work</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12font-Ovo'>
           Explore a collection of my recent projects, showcasing my skills in full stack development and my commitment to delivering high-quality web applications.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
            {workData.map(({title, description, bgImage, link, component}, index) => (
                <div key={index}
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg
                relative cursor-pointer group'
                style={{backgroundImage:`url(${bgImage})`}}
                onClick={() => handleCardClick(link, component)}>
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5
                    left-1/2 -translate-x-1/2 py-3 px-5 flex items-center
                    justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>{title}</h2>
                            <p className='text-sm text-gray-700'>{description}</p>
                        </div>
                        <div className='border rounded-full border-black w-9
                        aspect-square flex items-center justify-center
                        shadow-[-2px_-2px_0_#000000] group-hover:bg-lime-300 transition duration-500'>
                            <img
                                src={assets.send_icon}
                                alt=''
                                className='w-5'
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <a href="#contact" className='w-max flex items-center justify-center gap-2
        text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto
        my-20 hover:bg-gray-100 transition duration-300'>
            Show More
            <img src={assets.right_arrow_bold} alt='Right arrow' className='w-4'></img>
        </a>

        {activeComponent && (
            <div
                className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center'
                onClick={() => setActiveComponent(null)}>
                <div
                    className='bg-white rounded-xl p-8 max-w-3xl w-full mx-4 relative'
                    onClick={e => e.stopPropagation()}>
                    <button
                        className='absolute top-4 right-4 text-gray-500 hover:text-black text-xl'
                        onClick={() => setActiveComponent(null)}>
                        ✕
                    </button>
                    {activeComponent}
                </div>
            </div>
        )}
    </div>
  )
}

export default Work
