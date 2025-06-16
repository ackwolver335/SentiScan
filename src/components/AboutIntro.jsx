import React from 'react'
import Sentiment from '../assets/images/Sentiment.jpg'

export default function AboutIntro() {
    return (
        <div className="xsz:pt-22 sm:pt-30 xsz:pb-10 lg:pb-16 xsz:px-6 lg:px-12 lg:pt-36 flex xsz:flex-col xsz:gap-5 md:flex-row xsz:items-center xsz:justify-between lg:justify-center xl:gap-12 md:items-start bg-linear-to-br from-[#3b81f5] to-[#9234ea]">

            {/* First Block regarding Page Intro */}
            <div className="flex flex-col items-start xsz:w-fit xl:w-2/4 xsz:gap-3 lg:gap-5">
                <h3 className="xsz:text-2xl sm:text-4xl xl:text-5xl 2xl:text-6xl text-white font-inter font-bold"> Understanding Sentiment Analysis </h3>
                <p className="xsz:text-sm lg:text-base xl:text-lg text-white font-poppins font-medium">
                    Discover how AI interprets emotions and opinions in text to unlock valuable insights.
                </p>
                <button className = "xsz:text-sm lg:text-base 2xl:text-lg 2xl:px-4 2xl:py-2 2xl:rounded-xl bg-white text-blue-400 font-inter font-medium xsz:px-3 xsz:py-1 xsz:rounded-md xsz:shadow-sm active:scale-95 ease-in duration-150 lg:hover:scale-105 lg:hover:shadow-xl cursor-pointer"> Learn More </button>
            </div>

            {/* Another Block regarding Photo Animations */}
            <img src = {Sentiment} alt = "Image Containing Sentiment View" className = "xsz:rounded-lg cursor-pointer xsz:shadow-sm sm:w-3/5 md:w-2/5 lg:w-2/6 xl:w-4/12 lg:hover:scale-105 lg:hover:shadow-lg ease-in duration-150" />

        </div>
    )
}
