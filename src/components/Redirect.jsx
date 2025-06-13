import React from 'react'

export default function Redirect() {
    return (
        <div className="flex flex-col items-center xsz:py-16 xl:py-28 xsz:px-5 xsz:gap-7 lg:gap-14 xl:gap-16 bg-indigo">

            {/* Heading & Intro Block for Redirection */}
            <div className="flex flex-col items-center justify-center text-center xsz:gap-2 sm:gap-3 xl:gap-5">

                <h1 className="font-inter font-bold text-white xsz:text-2xl md:text-3xl xl:text-4xl 2xl:text-[44px]"> Ready to unlock insights from your text data? </h1>
                <p className="font-inter xsz:text-sm md:text-base xl:text-lg text-white font-medium">
                    Start analyzing sentiment today and transform your customer feedback into actionable insights.
                </p>

            </div>

            {/* Rediration Button Block */}
            <div className="btnBlock">
                
            </div>

        </div>
    )
}
