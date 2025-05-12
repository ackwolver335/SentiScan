import React from 'react'
import FirstSection from '../components/FirstSection'
import Features from '../components/Features'
import UseCases from '../components/UseCases'

export default function Home() {
    return (
        <div className = "xsz:py-4 sm:py-3 lg:pb-5 bg-white">
            <FirstSection />
            <Features />
            <UseCases />
        </div>
    )
}
