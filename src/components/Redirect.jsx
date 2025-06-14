import React from 'react'

export default function Redirect() {
    return (
        <div className="flex flex-col items-center xsz:py-16 xl:py-24 xsz:px-5 xsz:gap-7 lg:gap-10 bg-indigo">

            {/* Heading & Intro Block for Redirection */}
            <div className="flex flex-col items-center justify-center text-center xsz:gap-3 xl:gap-5">

                <h1 className="font-inter font-bold text-white xsz:text-2xl md:text-3xl xl:text-4xl 2xl:text-[44px]"> Ready to unlock insights from your text data? </h1>
                <p className="font-inter xsz:text-sm md:text-base xl:text-lg text-white font-medium">
                    Start analyzing sentiment today and transform your customer feedback into actionable insights.
                </p>

            </div>

            {/* Rediration Button Block */}
            <div className="btnBlock flex flex-row items-center xsz:gap-3 lg:gap-5">
                
                <button className = "xsz:px-3 xsz:py-2 xsz:text-sm xl:text-base xl:px-4 xl:rounded-lg text-indigo bg-white xsz:rounded-md font-inter font-semibold cursor-pointer active:scale-95 hover:scale-105 ease-in duration-150 lg:hover:shadow-lg"> Get Started Freely </button>
                <button className = "xsz:px-3 xsz:py-2 xsz:text-sm xl:text-base xl:px-4 xl:rounded-lg text-white border-2 border-white xsz:rounded-md font-inter font-semibold active:scale-95 hover:scale-105 ease-in duration-150 cursor-pointer lg:hover:shadow-lg lg:hover:bg-secondary/20"> Schedule Demo </button>

            </div>

        </div>
    )
}
