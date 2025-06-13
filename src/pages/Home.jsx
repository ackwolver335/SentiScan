import React from 'react'
import IntroBlock from '../components/IntroBlock'
import SentiIntro from '../components/SentiIntro'
import Features from '../components/Features'
import Working from '../components/Working'
import UseCases from '../components/UseCases'
import Demo from '../components/Demo'
import Redirect from '../components/Redirect'

export default function Home() {
    return (
        <>
            <IntroBlock />
            <SentiIntro />
            <Features />
            <Working />
            <UseCases />
            <Demo />
            <Redirect />
        </>
    )
}
