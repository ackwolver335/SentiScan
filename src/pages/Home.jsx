import React from 'react'
import IntroBlock from '../components/IntroBlock'
import SentiIntro from '../components/SentiIntro'
import Features from '../components/Features'
import Working from '../components/Working'
import UseCases from '../components/UseCases'
import Demo from '../components/Demo'
import Redirect from '../components/Redirect'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {

    // variable regarding setting up the page background
    const background = "bg-gray-100";

    return (
        <div className='aboutIntro'>
            <Navbar />
            <IntroBlock />
            <SentiIntro />
            <Features bg={background} />
            <Working />
            <UseCases bg={background} />
            <Demo />
            <Redirect />
            <Footer />
        </div>
    )
}
