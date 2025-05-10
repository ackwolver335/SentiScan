import React from 'react'
import FirstSection from '../components/FirstSection'
import Features from '../components/Features'

export default function Home() {
    return (
        <div className = "xsz:py-4 sm:py-3">
            <FirstSection />
            <Features />
        </div>
    )
}
