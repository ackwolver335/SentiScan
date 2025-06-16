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
    return (
        <div className='aboutIntro'>
            <Navbar />
            <IntroBlock />
            <SentiIntro />
            <Features />
            <Working />
            <UseCases />
            <Demo />
            <Redirect />
            <Footer />
        </div>
    )
}
