import React from 'react'
import NavDirect from '../components/NavDirect'
import AboutIntro from '../components/AboutIntro'
import AboutSenti from '../components/AboutSenti'
import AboutWork from '../components/AboutWork'
import Applications from '../components/Applications'

export default function About() {

    return (
        <div className = "aboutIntro">
            <NavDirect />
            <AboutIntro />
            <AboutSenti />
            <AboutWork />
            <Applications />
        </div>
    )
}
