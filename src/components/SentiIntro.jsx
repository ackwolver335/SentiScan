import React from 'react'
import { Smile, Frown, Meh } from 'lucide-react'

export default function SentiIntro() {
    return (
        <div className="flex flex-col xsz:py-14 xl:py-22 xsz:px-5 xsz:gap-7 lg:gap-10 xl:gap-12">

            {/* Intial Intro Block */}
            <div className="flex flex-col items-center justify-center text-center xsz:gap-2 sm:gap-3 2xl:gap-4">

                <h1 className="font-inter font-bold text-secondary/90 xsz:text-2xl md:text-3xl xl:text-4xl 2xl:text-[38px]"> What is Sentiment Analysis ? </h1>
                <p className="font-inter xsz:text-sm md:text-base xl:text-lg text-secondary/80 font-medium">
                    Sentiment Analysis is the process of determining the emotional tone behind words to gain understanding of attitudes, opinions and emotions.
                </p>

            </div>

            {/* Sentiment Blocks */}
            <div className="flex xsz:flex-col lg:flex-row xsz:justify-center lg:justify-evenly items-center xsz:gap-5 sm:gap-6 lg:gap-10 xl:gap-14 lg:px-5 2xl:px-7">

                {/* Positive Sentiment */}
                <div className="flex flex-col xsz:gap-3 xl:gap-4 items-start bg-blue-200 xsz:px-5 xsz:py-4 xsz:rounded-md sm:w-2/3 md:w-3/5 lg:w-fit lg:hover:-translate-y-2 lg:hover:shadow-lg ease-in-out duration-150">
                    <Smile className="xsz:w-9 xsz:h-9 xl:w-12 xl:rounded-full xl:h-12 xl:p-2 xsz:p-[6px] xsz:rounded-md lg:rounded-lg text-white bg-linear-to-br from-indigo to-blue-500" />
                    <h4 className="text-secondary xsz:text-base xl:text-lg font-inter font-semibold"> Positive Sentiment </h4>
                    <p className="xsz:text-sm text-secondary/90 font-inter xl:text-base font-medium">
                        Identifies expressions of approval, satisfaction, happiness, and other positive emotions in text data.
                    </p>
                </div>

                {/* Neutral Sentiment */}
                <div className="flex flex-col xsz:gap-3 xl:gap-4 items-start bg-yellow-100 xsz:px-5 xsz:py-4 xsz:rounded-md sm:w-2/3 md:w-3/5 lg:w-fit lg:hover:-translate-y-2 lg:hover:shadow-lg ease-in-out duration-150">
                    <Meh className="xsz:w-9 xsz:h-9 xl:w-12 xl:rounded-full xl:h-12 xl:p-2 xsz:p-[6px] xsz:rounded-md lg:rounded-lg text-white bg-linear-to-br from-indigo to-blue-500" />
                    <h4 className="text-secondary xsz:text-base xl:text-lg font-inter font-semibold"> Neutral Sentiment </h4>
                    <p className="xsz:text-sm text-secondary/90 font-inter xl:text-base font-medium">
                        Detects factual statements, objective information, and text without clear emotional indicators.
                    </p>
                </div>

                {/* Negative Sentiment */}
                <div className="flex flex-col xsz:gap-3 xl:gap-4 items-start bg-red-200 xsz:px-5 xsz:py-4 xsz:rounded-md sm:w-2/3 md:w-3/5 lg:w-fit lg:hover:-translate-y-2 lg:hover:shadow-lg ease-in-out duration-150">
                    <Frown className="xsz:w-9 xsz:h-9 xl:w-12 xl:rounded-full xl:h-12 xl:p-2 xsz:p-[6px] xsz:rounded-md lg:rounded-lg text-white bg-linear-to-br from-indigo to-blue-500" />
                    <h4 className="text-secondary xsz:text-base xl:text-lg font-inter font-semibold"> Negative Sentiment </h4>
                    <p className="xsz:text-sm text-secondary/90 font-inter xl:text-base font-medium">
                        Recognizes expressions of criticism, dissatisfaction, anger, and other negative emotions in text.
                    </p>
                </div>

            </div>

        </div>
    )
}
