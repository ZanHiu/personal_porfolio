import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    })
  }, []);

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image alt='' src={assets.header_bg_color} className='w-full' />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
        ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
        <a href="#top">
          <Image alt='' src={isDarkMode ? assets.logo_dark : assets.logo} className='w-36 cursor-pointer mr-14' />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
          ${isScroll ? "" : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"}`}>
          <li><a href="#top" className='font-Ovo'>Home</a></li>
          <li><a href="#about" className='font-Ovo'>About me</a></li>
          <li><a href="#services" className='font-Ovo'>Services</a></li>
          <li><a href="#work" className='font-Ovo'>My Work</a></li>
          <li><a href="#contact" className='font-Ovo'>Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          <button onClick={() => setIsDarkMode(prev => !prev)} className='cursor-pointer'>
            <Image alt='' src={isDarkMode ? assets.sun_icon : assets.moon_icon } className='w-6' />
          </button>

          <a href="#contact" className='hidden lg:flex items-center 
          gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 
          font-Ovo dark:border-white/50'>Contact 
            <Image alt='' src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className='w-3' />
          </a>

          <button className='cursor-pointer block md:hidden ml-3' onClick={openMenu}>
            <Image alt='' src={isDarkMode ? assets.menu_white : assets.menu_black} className='w-6' />
          </button>
        </div>

        {/* mobile menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 
        fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition 
        duration-500 dark:bg-darkHover dark:text-white'>

          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image alt='' src={isDarkMode ? assets.close_white : assets.close_black} className='w-5 cursor-pointer' />
          </div>

          <li><a href="#top" className='font-Ovo' onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className='font-Ovo' onClick={closeMenu}>About me</a></li>
          <li><a href="#services" className='font-Ovo' onClick={closeMenu}>Services</a></li>
          <li><a href="#work" className='font-Ovo' onClick={closeMenu}>My Work</a></li>
          <li><a href="#contact" className='font-Ovo' onClick={closeMenu}>Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar