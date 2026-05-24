import React, {useEffect, useRef, useState} from 'react'
import { assets } from '../assets/assets'
const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  }
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
        {/* <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
            <img 
                src={assets.header_bg_color} 
                alt='' 
                className='w-full' 
            />
        </div> */}
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] 
            py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white bg-opacity-90 backdrop-blur-lg shadow-md transition duration-500' : ''}`}>
            <a href="#top"> 
                <img src={assets.profile_logo}  alt='logo' width={100} height={100} />
            </a>
            <ul className={`hidden md:flex item-center gap-6
                lg:gap-8 rounded-full px-12 py-3 ml-16 ${isScroll ? '' : 'bg-white shadow-sm bg-opacity-50'} `}>
                <li><a href="#top" className='font-Ovo' >Home</a></li>
                <li><a href="#about" className='font-Ovo'>About me</a></li>
                <li><a href="#services" className='font-Ovo'>Services</a></li>
                <li><a href="#work" className='font-Ovo'>My work</a></li> 
                <li><a href="#contact" className='font-Ovo'>Contact me</a></li> 
            </ul>
            <div className='flex items-center gap-4 bg-white'>
                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>
                    Contact <img src="/arrow-icon.png" alt='' width={20} height={20} />
                </a>
                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <img src={assets.menu_black} alt='' className='w-6'></img>
                </button>
            </div>

            {/* ---- mobile menu ------*/}
            <ul ref={sideMenuRef} className='flex md:hidden flex-col item-center gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <img src={assets.close_black} alt='' className='w-5 cursor-pointer'></img>
                </div>
                <li><a href="#top" onClick={closeMenu}>Home</a></li>
                <li><a href="#about" onClick={closeMenu}>About me</a></li>
                <li><a href="#services" onClick={closeMenu}>Services</a></li>
                <li><a href="#work" onClick={closeMenu}>My work</a></li> 
                <li><a href="#contact" onClick={closeMenu}>Contact me</a></li> 
            </ul>

        </nav>
    </>
  )
}

export default Navbar
