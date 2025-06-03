import React from 'react'
import { FileText, Menu, ToggleLeft } from 'lucide-react'

export default function Navbar() {

  // menu Button options
  let menuRotate = false;

  // method regarding Menu Button Toggle
  const toggleMenu = () => {

    // conditional block regarding Button rotation
    if(menuRotate == false){
      document.querySelector('.menuBtn').classList.add('-rotate-90');
      menuRotate = true;

      // code regarding menu toggle of list
      document.querySelector('.navList').classList.remove('xsz:translate-x-[800px]');
    } else {
      document.querySelector('.menuBtn').classList.remove('-rotate-90');
      menuRotate = false;

      document.querySelector('.navList').classList.add('xsz:translate-x-[800px]');
    }
  }

  return (
    <div className="fixed flex flex-row justify-between items-center xsz:top-1 xsz:right-1 xsz:left-1 sm:right-2 sm:left-2 xl:top-3 xl:left-4 xl:right-4 bg-white/20 xsz:m-3 xsz:p-3 sm:p-4 xl:px-5 xl:py-4 lg:rounded-xl xsz:rounded-md xsz:backdrop-blur-2xl xsz:shadow-lg">
      
      {/* initial div for Icon and site name */}
      <div className="iconText flex flex-row items-center xsz:gap-1.5 sm:gap-2 2xl:gap-2 cursor-pointer">
        <FileText className = "xsz:w-6 xsz:h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8  text-indigo" />
        <h2 className = "font-poppins text-charcoal xsz:text-base sm:text-lg xl:text-xl xsz:font-semibold"> SentiScan </h2>
      </div>

      {/* Get Started Block */}
      <ul className="navList xsz:absolute md:relative font-poppins xsz:text-sm sm:text-base xl:text-lg bg-white/80 xsz:backdrop-blur-lg xsz:px-3 xsz:py-4 sm:px-4 xsz:gap-1.5 xsz:text-secondary/80 xsz:font-semibold xsz:shadow-lg xsz:rounded-lg xsz:top-16 sm:top-20 xsz:left-1 xsz:right-1 sm:right-2 sm:left-2 xsz:translate-x-[800px] md:translate-x-0 md:shadow-none md:top-0 md:right-0 md:left-0 md:gap-5 md:p-0 md:font-medium xl:gap-7 xl:font-semibold ease-in duration-250 flex xsz:flex-col md:flex-row">
        <li> <a href = "#" className = "active:text-indigo hover:text-indigo/90 hover:text-shadow-md ease-in duration-150"> Features </a> </li>
        <li> <a href = "#" className = "active:text-indigo hover:text-indigo/90 hover:text-shadow-md ease-in duration-150"> How It Works </a> </li>
        <li> <a href = "#" className = "active:text-indigo hover:text-indigo/90 hover:text-shadow-md ease-in duration-150"> Use Cases </a> </li>
        <li> <a href = "#" className = "active:text-indigo hover:text-indigo/90 hover:text-shadow-md ease-in duration-150"> Demo </a> </li>
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
