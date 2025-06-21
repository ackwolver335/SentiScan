import React, { useEffect } from 'react'
import IntroBlock from '../components/IntroBlock'
import SentiIntro from '../components/SentiIntro'
import Features from '../components/Features'
import Working from '../components/Working'
import UseCases from '../components/UseCases'
import Demo from '../components/Demo'
import Redirect from '../components/Redirect'
import Navbar from '../components/Navbar'
import Clock from '../components/Clock'
import clickSound from '../assets/audio.mp3'

export default function Home() {

    // variable regarding setting up the page background
    const background = "bg-gray-100";
    const bg2 = "bg-white";

    // changing the title when it comes to the Home Page
    useEffect(() => {
        document.title = "Sentiment Analysis - Home"
    }, []);

    return (
        <div className='aboutIntro'>
            <Navbar sound={clickSound} />
            <Clock />
            <IntroBlock sound={clickSound} />
            <SentiIntro />
            <Features bg={background} />
            <Working />
            <UseCases bg={background} sound={clickSound} />
            <Demo bg={bg2} sound={clickSound}/>
            <Redirect />
        </div>
    )
}
