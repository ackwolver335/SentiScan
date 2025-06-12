import React from 'react'
import { FileText, Menu } from 'lucide-react'

export default function Navbar() {

  // menu Button options
  let menuRotate = false;

  // method regarding Menu Button Toggle
  const toggleMenu = () => {

    // conditional block regarding Button rotation
    if(menuRotate == false){
      document.querySelector('.menuBtn').classList.add('rotate-90');
      menuRotate = true;

      // code regarding menu toggle of list
      document.querySelector('.navList').classList.remove('xsz:translate-x-[800px]');
    } else {
      document.querySelector('.menuBtn').classList.remove('rotate-90');
      menuRotate = false;

      document.querySelector('.navList').classList.add('xsz:translate-x-[800px]');
    }
  }

  setInterval(() =>{
    
  },1000);

  return (
    <div className="fixed z-20 flex flex-row justify-between items-center xsz:top-1 xsz:right-1 xsz:left-1 sm:right-2 sm:left-2 xl:top-3 xl:left-5 xl:right-5 xsz:bg-white/65 lg:bg-white/55 xsz:m-3 xsz:p-3 sm:p-4 xl:px-5 xl:py-4 lg:rounded-xl xsz:rounded-md xsz:backdrop-blur-md lg:backdrop-blur-lg md:backdrop-blur-2xl xsz:shadow-lg">
      
      {/* initial div for Icon and site name */}
      <div className="iconText flex flex-row items-center xsz:gap-1.5 sm:gap-2 2xl:gap-2 cursor-pointer">
        <FileText className = "xsz:w-6 xsz:h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8  text-indigo" />
        <h2 className = "font-poppins text-charcoal xsz:text-base sm:text-lg xl:text-xl xsz:font-semibold"> SentiScan </h2>
      </div>

      {/* Get Started Block */}
      <ul className="navList font-poppins flex xsz:absolute md:relative xsz:flex-col md:flex-row xsz:bg-white/90 md:bg-transparent xsz:backdrop-blur-3xl md:backdrop-blur-none xsz:shadow-lg md:shadow-none xsz:rounded-lg md:rounded-none xsz:top-16 sm:top-20 md:top-0 xsz:left-1 xsz:right-1 md:left-0 md:right-0 xsz:translate-x-[800px] md:translate-x-0 xsz:px-3 xsz:py-4 sm:px-4 md:p-0 xsz:gap-1.5 md:gap-5 xl:gap-7 xsz:text-sm sm:text-base xl:text-lg xsz:text-secondary xsz:font-semibold md:font-medium ease-in duration-250">
        <li> <a href = "#features" className = "active:text-indigo hover:text-indigo/90 ease-in duration-150"> Features </a> </li>
        <li> <a href = "#working" className = "active:text-indigo hover:text-indigo/90 ease-in duration-150"> How It Works </a> </li>
        <li> <a href = "#" className = "active:text-indigo hover:text-indigo/90 ease-in duration-150"> Use Cases </a> </li>
        <li> <a href = "#" className = "active:text-indigo hover:text-indigo/90 ease-in duration-150"> Demo </a> </li>
      </ul>

      {/* Button regarding Getting Started from Initial Point */}
      <a href = "#">
        <button type = "button" className = "bg-indigo/90 xsz:shadow-sm xsz:px-2 xsz:py-1 font-poppins text-white xsz:rounded-md xsz:text-sm sm:text-base xl:text-lg lg:font-semibold cursor-pointer xl:px-4 lg:rounded-lg lg:shadow-lg active:scale-95 hover:scale-105 ease-in duration-100"> Get Started </button>
      </a>

      {/* Button regarding the Menu Icon to click and get the Menu */}
      <Menu className = "menuBtn xsz:w-6 xsz:h-6 sm:w-7 sm:h-7 text-indigo ease-in duration-250 md:hidden" onClick={toggleMenu} />

    </div>
  )
}
