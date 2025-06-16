import React from 'react'

export default function AboutSenti() {
    return (
        <div className = "xsz:py-14 lg:py-20 flex flex-col items-center xsz:gap-5 md:gap-8 xl:gap-10">
            
            {/* Heading of the Block */}
            <h3 className = "xsz:text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-poppins font-bold text-secondary/80"> What is <span className = "bg-gradient-to-br from-indigo-600 to-pink-500 bg-clip-text text-transparent"> Sentiment Analysis </span> ? </h3>

            {/* Paragraph Block regarding content and Intro */}
            <div className="contentBlock flex flex-col items-center xsz:gap-4 md:gap-6 xsz:px-4 sm:px-6 xsz:w-fit lg:w-4/5 xl:w-4/6">

                <p className = "xsz:text-[12px] sm:text-sm xl:text-base font-medium font-inter text-secondary/70 text-center">
                    Sentiment analysis is a branch of artificial intelligence that uses natural language processing (NLP) and machine learning techniques to identify, extract, and study subjective information from text data.
                </p>

                <p className = "xsz:text-[12px] sm:text-sm xl:text-base font-medium font-inter text-secondary/70 text-center">
                    Also known as opinion mining or emotion AI, sentiment analysis determines whether a piece of text expresses a positive, negative, or neutral sentiment toward a subject. It helps businesses, researchers, and organizations understand the emotional tone behind words.
                </p>

                <div className="designedBlock flex flex-row xsz:gap-2 items-center bg-blue-200 xsz:pr-4 sm:pr-6 xsz:w-fit sm:w-5/6 xl:w-4/6 xl:hover:rounded-tr-lg xl:hover:rounded-br-lg xl:hover:scale-105 ease-in duration-150 cursor-pointer">
                    <div className = "xsz:w-2 sm:w-1 xsz:h-16 lg:w-2 xl:h-18 bg-blue-600"></div>
                    <p className = "xsz:text-[12px] sm:text-sm xl:text-base xsz:py-2 xl:py-3 font-medium font-inter text-blue-500">
                        "Sentiment analysis allows us to transform unstructured text into structured data of public opinions."
                    </p>
                </div>

            </div>

        </div>
    )
}