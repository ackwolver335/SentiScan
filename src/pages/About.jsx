import React, { useEffect } from 'react'
import NavDirect from '../components/NavDirect'
import AboutIntro from '../components/AboutIntro'
import AboutSenti from '../components/AboutSenti'
import AboutWork from '../components/AboutWork'
import Applications from '../components/Applications'
import Demo from '../components/Demo'
import Clock from '../components/Clock'

export default function About(props) {

    // variable regarding setting up the page background
    const background = "bg-blue-100";

    // changing the title when it comes to the Home Page
    useEffect(() => {
        document.title = "Sentiment Analysis - About"
    }, []);

    return (
        <div className="aboutIntro">
            <NavDirect sound={props.sound} />
            <Clock sound={props.sound} />
            <AboutIntro />
            <AboutSenti />
            <AboutWork />
            <Applications />
            <Demo bg={background} sound={props.sound} />
        </div>
    )
}
