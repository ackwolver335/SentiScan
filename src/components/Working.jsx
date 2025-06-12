import React from 'react'

export default function Working() {
    return (
        <div className="flex flex-col items-center xsz:py-16 xl:py-28 xsz:px-5 xsz:gap-7 lg:gap-14 xl:gap-16" id="working">

            {/* Heading & Intro Block */}
            <div className="flex flex-col items-center justify-center text-center xsz:gap-2 sm:gap-3 xl:gap-6">

                <h1 className="font-inter font-bold text-secondary/90 xsz:text-2xl md:text-3xl xl:text-4xl 2xl:text-[42px]"> How Sentiment Analysis Works ? </h1>
                <p className="font-inter xsz:text-sm md:text-base xl:text-lg text-secondary/80 font-medium">
                    Our advanced AI-powered platform processes text data through multiple stages to deliver accurate sentiment insights.
                </p>

            </div>

            {/* Steps Blocks of Sentiment Analysis Working */}
            <div className = "flex xsz:flex-col lg:flex-row items-center xsz:px-4 xsz:gap-5 sm:gap-7 xl:gap-10 xl:px-8">

                {/* First Step */}
                <div className="flex flex-col items-center justify-center xsz:gap-3 text-center sm:w-2/3 md:w-3/5 lg:w-fit xl:gap-5">
                    <button className = "font-inter font-bold text-white bg-indigo/80 xsz:px-4 xsz:py-2 rounded-full xl:px-5 xl:py-3 xl:text-lg"> 1 </button>
                    <h3 className = "font-inter text-secondary/90 font-semibold xl:text-lg"> Data Collection </h3>
                    <p className = "font-inter xsz:text-sm text-secondary/70 font-medium xl:text-base">
                        Gather text data from various sources like social media, reviews, surveys, and customer support interactions.
                    </p>
                </div>

                {/* Second Step */}
                <div className="flex flex-col items-center justify-center xsz:gap-3 text-center sm:w-2/3 md:w-3/5 lg:w-fit xl:gap-5">
                    <button className = "font-inter font-bold text-white bg-indigo/80 xsz:px-4 xsz:py-2 rounded-full xl:px-5 xl:py-3 xl:text-lg"> 2 </button>
                    <h3 className = "font-inter text-secondary/90 font-semibold xl:text-lg"> Text Processing </h3>
                    <p className = "font-inter xsz:text-sm text-secondary/70 font-medium xl:text-base">
                        Clean and prepare text data by removing noise, standardizing format, and identifying key linguistic features.
                    </p>
                </div>

                {/* Third Step */}
                <div className="flex flex-col items-center justify-center xsz:gap-3 text-center sm:w-2/3 md:w-3/5 lg:w-fit xl:gap-5">
                    <button className = "font-inter font-bold text-white bg-indigo/80 xsz:px-4 xsz:py-2 rounded-full xl:px-5 xl:py-3 xl:text-lg"> 3 </button>
                    <h3 className = "font-inter text-secondary/90 font-semibold xl:text-lg"> Sentiment Classification </h3>
                    <p className = "font-inter xsz:text-sm text-secondary/70 font-medium xl:text-base">
                        Apply machine learning algorithms to classify text as positive, negative, or neutral with confidence scores.
                    </p>
                </div>

                {/* Fourth Step */}
                <div className="flex flex-col items-center justify-center xsz:gap-3 text-center sm:w-2/3 md:w-3/5 lg:w-fit xl:gap-5">
                    <button className = "font-inter font-bold text-white bg-indigo/80 xsz:px-4 xsz:py-2 rounded-full xl:px-5 xl:py-3 xl:text-lg"> 4 </button>
                    <h3 className = "font-inter text-secondary/90 font-semibold xl:text-lg"> Insights Generation </h3>
                    <p className = "font-inter xsz:text-sm text-secondary/70 font-medium xl:text-base">
                        Transform sentiment data into actionable insights through visualization and trend analysis.
                    </p>
                </div>

            </div>

        </div>
    )
}
