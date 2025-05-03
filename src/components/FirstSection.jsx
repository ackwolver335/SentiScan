import React from 'react'
import MainFrame from '../assets/MainFrame.jpg'

export default function FirstSection() {
    return (
        <div className="firstBlock">

            {/* Here we have the image for the background of this Block in App.css */}
            <div className="imageBlock flex flex-col">

                {/* Image for the MainFrame */}
                <img src={MainFrame} alt="Main Section Image" className="w-full" />

                {/* Line and Intro Block with some fixations */}
                <div className="quote font-inter xsz:space-y-3 xsz:mx-5 xsz:-mt-3 bg-indigo/80 xsz:p-3 xsz:rounded-md xsz:shadow-xl">

                    {/* Heading and Message Icon Block */}
                    <div className="partOne flex flex-row justify-between">

                        {/* Icon regarding message */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chat-dots-fill xsz:w-4 xl:w-7 text-white" viewBox="0 0 16 16">
                            <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                        </svg>

                        <p className = " xsz:text-[12px] text-white">
                            Quick Message
                        </p>

                    </div>

                    <div className="partTwo xsz:space-y-1">

                        <h3 className = "xsz:text-[11px] italic font-semibold text-white text-center"> UnderStanding your Text's Emotion Instantly ! </h3>
                        <h3 className = "xsz:text-[10px] italic font-semibold text-white text-center"> Our AI-powered tool analyzes sentences to detect emotion and sentiment in real time. </h3>

                    </div>

                </div>
            </div>

        </div>
    )
}
