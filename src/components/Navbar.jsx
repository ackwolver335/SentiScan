import React from 'react'
import Logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

    // method for toggling the Menu Button
    const handleMenu = () => {
        document.querySelector(".menuList").classList.toggle("xsz:translate-x-40");

        // if user don't interact for 4 seconds it will automatically disappers
        setTimeout(() => {
            document.querySelector('.menuList').classList.add('xsz:translate-x-40');
        }, 3500);
    }

    return (
        <div className="mainNav fixed w-full flex flex-row justify-between align-middle items-center xsz:shadow-md xsz:rounded-lg lg:rounded-2xl xl:rounded-none lg:shadow-lg xsz:px-4 md:px-5 lg:px-8 xl:px-16 bg-white/5 xsz:backdrop-blur-xl">

            {/* Icon for the overpage website */}
            <NavLink to="/">
                <img src={Logo} alt="Webpage Logo" className="xsz:w-12 cursor-pointer sm:w-16 lg:w-20" />
            </NavLink>

            {/* list for routing to the pages */}
            <ul className="menuList flex xsz:flex-col xsz:absolute xsz:top-14 xsz:right-4 xsz:items-center xsz:text-white xsz:bg-indigo/80 xsz:translate-x-40 md:bg-transparent xsz:p-3 xsz:rounded-md xsz:gap-2 md:relative md:top-0 md:translate-x-0 md:right-0 md:flex-row font-poppins md:font-semibold md:text-indigo md:gap-4 xsz:text-sm lg:gap-6 xl:gap-8 md:text-base lg:text-lg 3xl:text-[20px] ease-in duration-150">
                <NavLink to="/" className="md:hover:text-secondary active:text-emergreen md:hover:underline-offset-8 md:hover:underline md:duration-75"> Home </NavLink>
                <NavLink to="/" className="md:hover:text-secondary active:text-emergreen md:hover:underline-offset-8 md:hover:underline md:duration-75"> Analyze </NavLink>
                <NavLink to="/" className="md:hover:text-secondary active:text-emergreen md:hover:underline-offset-8 md:hover:underline md:duration-75"> Features </NavLink>
                <NavLink to="/" className="md:hover:text-secondary active:text-emergreen md:hover:underline-offset-8 md:hover:underline md:duration-75"> Use Cases </NavLink>
            </ul>

            {/* Icons for Menu Button */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-menu-button-wide-fill xsz:w-6 text-indigo md:hidden sm:w-8" viewBox="0 0 16 16" onClick={handleMenu}>
                <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
            </svg>

        </div>
    )
}
