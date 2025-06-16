import React from 'react'
import {StickyNote, Layers, BarChart3} from 'lucide-react'

export default function AboutWork() {
    return (
        <div className="flex flex-col items-center xsz:py-16 xl:py-24 xsz:px-3 xsz:gap-7 lg:gap-10 xl:gap-12 bg-gray-100">

            {/* Heading & Intro Block */}
            <h1 className="font-inter font-bold text-secondary/90 xsz:text-2xl md:text-3xl xl:text-4xl 2xl:text-[42px]"> How <span className="bg-gradient-to-br from-indigo-600 to-pink-500 bg-clip-text text-transparent"> Sentiment Analysis </span> Works ? </h1>


            {/* Steps Blocks of Sentiment Analysis Working */}
            <div className="flex xsz:flex-col lg:flex-row items-center lg:justify-center xsz:px-3 xsz:gap-6 sm:gap-7 xl:gap-10 xl:px-8">

                {/* First Step */}
                <div className="flex flex-col items-start xsz:gap-3 bg-white xsz:shadow-md xsz:p-3 md:px-5 md:py-4 xl:rounded-xl xsz:rounded-md xl:hover:shadow-lg xl:hover:scale-105 ease-in duration-150 cursor-pointer sm:w-2/3 md:w-3/5 lg:w-fit">
                    <StickyNote className="text-blue-500 bg-indigo-100 xsz:w-9 xsz:h-9 lg:w-10 lg:h-10 xsz:p-[5px] lg:p-[7px] xsz:rounded-md lg:rounded-lg" />
                    <h3 className="font-inter text-secondary/90 font-semibold xl:text-lg"> Text Collection </h3>
                    <p className="font-inter xsz:text-sm text-secondary/70 font-medium xl:text-base">
                        The process begins with gathering text data from various sources like social media, reviews, surveys, or customer feedback.
                    </p>
                </div>

                {/* Second Step */}
                <div className="flex flex-col items-start xsz:gap-3 bg-white xsz:shadow-md xsz:p-3 md:px-5 md:py-4 xl:rounded-xl xsz:rounded-md xl:hover:shadow-lg xl:hover:scale-105 ease-in duration-150 cursor-pointer sm:w-2/3 md:w-3/5 lg:w-fit">
                    <Layers className="text-blue-500 bg-indigo-100 xsz:w-9 xsz:h-9 lg:w-10 lg:h-10 xsz:p-[5px] lg:p-[7px] xsz:rounded-md lg:rounded-lg" />
                    <h3 className="font-inter text-secondary/90 font-semibold xl:text-lg"> Processing & Analysis </h3>
                    <p className="font-inter xsz:text-sm text-secondary/70 font-medium xl:text-base">
                        The text is processed using NLP techniques to identify sentiment-bearing phrases and analyze their emotional tone.
                    </p>
                </div>

                {/* Third Step */}
                <div className="flex flex-col items-start xsz:gap-3 bg-white xsz:shadow-md xsz:p-3 md:px-5 md:py-4 xl:rounded-xl xsz:rounded-md xl:hover:shadow-lg xl:hover:scale-105 ease-in duration-150 cursor-pointer sm:w-2/3 md:w-3/5 lg:w-fit">
                    <BarChart3 className="text-blue-500 bg-indigo-100 xsz:w-9 xsz:h-9 lg:w-10 lg:h-10 xsz:p-[5px] lg:p-[7px] xsz:rounded-md lg:rounded-lg" />
                    <h3 className="font-inter text-secondary/90 font-semibold xl:text-lg"> Insights & Visualization </h3>
                    <p className="font-inter xsz:text-sm text-secondary/70 font-medium xl:text-base">
                        Results are categorized and visualized to provide actionable insights about public opinion and emotional responses.
                    </p>
                </div>

            </div>

        </div>
    )
}
