import React from 'react'
import NavDirect from '../components/NavDirect'
import AboutIntro from '../components/AboutIntro'
import AboutSenti from '../components/AboutSenti'

export default function About() {
    return (
        <div className = "aboutIntro">
            <NavDirect />
            <AboutIntro />
            <AboutSenti />
        </div>
    )
}
