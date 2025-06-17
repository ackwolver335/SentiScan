import React from 'react'
import {FileText, Menu} from 'lucide-react';
import {Link} from 'react-router-dom'

export default function NavDirect() {

	// menu Button variable
	let menuRotate = false;

	// method for toggle menu icon
	const toggleMenu = () => {

        // conditional block regarding Button rotation
        if (menuRotate == false) {
            document.querySelector('.menuBtn').classList.add('rotate-90');
            menuRotate = true;

            // code regarding menu toggle of list
            document.querySelector('.navbarList').classList.remove('xsz:translate-x-[800px]');
        } else {
            document.querySelector('.menuBtn').classList.remove('rotate-90');
            menuRotate = false;

            document.querySelector('.navbarList').classList.add('xsz:translate-x-[800px]');
        }

        // timer regarding in case of user forget to close the Navbar
        setTimeout(() => {
            document.querySelector('.menuBtn').classList.remove('rotate-90');
            menuRotate = false;

            document.querySelector('.navbarList').classList.add('xsz:translate-x-[800px]');
        },5000);
    }

	return (
		<div className="fixed z-20 flex flex-row justify-between items-center xsz:top-1 xsz:right-1 xsz:left-1 sm:right-2 sm:left-2 xl:top-3 xl:left-5 xl:right-5 bg-linear-to-br from-indigo/80 to-blue-500/80 xsz:m-3 xsz:p-3 sm:p-4 xl:px-5 xl:py-3 lg:rounded-xl xsz:rounded-md xsz:backdrop-blur-xl xsz:shadow-md xl:shadow-lg">
			
			{/* First Heading Icon and Name */}
			<div className="iconText flex flex-row items-center xsz:gap-1.5 sm:gap-2 2xl:gap-2 cursor-pointer">
                <FileText className="xsz:w-6 xsz:h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8  text-white" />
                <h2 className="font-poppins text-white xsz:text-base sm:text-lg xl:text-xl xsz:font-medium"> SentiScan </h2>
            </div>

			{/* Redirection Nav Elements */}
			<ul className="navbarList xsz:absolute xsz:bg-linear-to-br xsz:from-indigo/70 xsz:to-blue-400 xsz:rounded-lg md:bg-none md:from-transparent md:to-transparent xsz:shadow-lg md:shadow-none xsz:backdrop-blur-lg md:backdrop-blur-none xsz:px-4 xsz:py-3 xsz:gap-2 xsz:top-16 sm:top-20 xsz:left-1 xsz:right-1 sm:left-2  sm:right-2 md:left-0 md:right-0 md:top-0 md:relative flex xsz:flex-col md:flex-row md:gap-3 xl:gap-5 items-center xsz:translate-x-[800px] ease-in duration-350 md:translate-x-0 md:p-0 xsz:text-sm lg:text-base">
				<Link to="/" className = "text-white font-poppins lg:hover:text-secondary ease-in duration-150"> Home </Link>
				<Link to="/about" className = "text-white font-poppins lg:hover:text-secondary ease-in duration-150"> About </Link>
				<a href = "#" className = "text-white font-poppins lg:hover:text-secondary ease-in duration-150"> Connect </a>
				<a href = "#demo" className = "text-white font-poppins lg:hover:text-secondary ease-in duration-150"> Know More </a>
			</ul>

			{/* Menu Button regarding small screens */}
            <Menu className="menuBtn xsz:w-6 xsz:h-6 sm:w-7 sm:h-7 text-white ease-in duration-250 md:hidden" onClick={toggleMenu}/>

		</div>
	)
}
