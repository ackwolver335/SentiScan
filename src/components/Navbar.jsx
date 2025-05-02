import React from 'react'
import Logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between align-middle items-center xsz:shadow-md xsz:rounded-lg lg:rounded-2xl xl:rounded-none lg:shadow-lg xsz:px-4 md:px-5 lg:px-8 xl:px-16 bg-white/30 backdrop-blur-3xl">

            {/* Icon for the overpage website */}
            <NavLink to = "/">
                <img src={Logo} alt="Webpage Logo" className="xsz:w-12 cursor-pointer sm:w-16 lg:w-20" />
            </NavLink>

            {/* list for routing to the pages */}
            <ul className="flex flex-row font-poppins md:font-semibold text-indigo md:gap-3 lg:gap-5 xl:gap-7 md:text-lg">
                <NavLink to = "/" className = "hover:text-secondary hover:underline-offset-8 hover:underline duration-75"> Home </NavLink>
                <NavLink to = "/" className = "hover:text-secondary hover:underline-offset-8 hover:underline duration-75"> Analyze </NavLink>
                <NavLink to = "/" className = "hover:text-secondary hover:underline-offset-8 hover:underline duration-75"> Features </NavLink>
                <NavLink to = "/" className = "hover:text-secondary hover:underline-offset-8 hover:underline duration-75"> Use Cases </NavLink>
            </ul>

            {/* Icons for Menu Button */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-menu-button-wide-fill xsz:w-6 text-indigo md:hidden sm:w-8" viewBox="0 0 16 16">
                <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
            </svg>

        </div>
    )
}
