import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <img src={assets.profile_logo} alt='' className='w-36 mx-auto mb-2' />
      </div>
      <div className='text-center sm:flex items-center justify-between border-t pt-2 border-gray-400 mx-[10%]'>
        <p className='text-center text-gray-600 mt-1 py-1'>
          &copy; {new Date().getFullYear()} Thangakumar Dhanasekaran. All rights reserved.
        </p>
        <ul className='flex items-center gap-10 justify-center mt-1 sm:mt-0 text-gray-600'>
            <li><a target='_blank' href="https://github.com/thangakumard">GitHub</a></li>
            <li><a target='_blank' href="https://linkedin.com/in/thangakumard">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
