import React from 'react'

export default function Questions() {
    return (
        <div className="xsz:py-14 lg:py-22 xsz:px-3 flex flex-col items-center xsz:gap-6 lg:gap-7 xl:gap-10 bg-gray-100" id="questions">

            {/* Heading for Intro of the Block */}
            <h3 className="xsz:text-2xl lg:text-3xl xl:text-4xl text-center font-poppins text-secondary/80 font-bold"> Frequently Asked <span className="bg-gradient-to-br from-blue-500 to-pink-400 bg-clip-text text-transparent"> Questions </span> </h3>

            {/* Questionary Blocks */}
            <div className="questionsAsked flex flex-col items-center xsz:gap-5 lg:gap-7 sm:px-8 md:px-0 md:w-4/5 lg:w-4/6 xl:w-3/6">

                {/* Question1 */}
                <div className="flex flex-col items-center xsz:gap-3 bg-white xsz:px-4 xsz:py-3 lg:px-2 lg:py-5 lg:hover:scale-105 lg:hover:shadow-lg lg:hover:rounded-xl lg:ease-in lg:duration-150 cursor-pointer xsz:rounded-md xsz:shadow-md">
                    <h3 className = "font-inter font-semibold text-secondary/90 xsz:text-sm lg:text-base xl:text-lg"> What is sentiment analysis and how can it help my business? </h3>
                    <p className = "font-inter font-medium text-secondary/80 xsz:text-[12px] lg:text-sm lg:text-center">
                        Sentiment analysis is a technology that identifies and extracts opinions from text, helping businesses understand customer feelings about their products or services. It can help you track brand perception, improve customer service, and make data-driven decisions.
                    </p>
                </div>

                {/* Question2 */}
                <div className="flex flex-col items-center xsz:gap-3 bg-white xsz:px-4 xsz:py-3 lg:px-2 lg:py-5 lg:hover:scale-105 lg:hover:shadow-lg lg:hover:rounded-xl lg:ease-in lg:duration-150 cursor-pointer xsz:rounded-md xsz:shadow-md">
                    <h3 className = "font-inter font-semibold text-secondary/90 xsz:text-sm lg:text-base xl:text-lg"> Do you offer custom sentiment analysis solutions? </h3>
                    <p className = "font-inter font-medium text-secondary/80 xsz:text-[12px] lg:text-sm lg:text-center">
                        Yes, we offer tailored sentiment analysis solutions designed to meet your specific business needs. Our team can customize models for your industry, language requirements, and specific use cases.
                    </p>
                </div>

                {/* Question3 */}
                <div className="flex flex-col items-center xsz:gap-3 bg-white xsz:px-4 xsz:py-3 lg:px-2 lg:py-5 lg:hover:scale-105 lg:hover:shadow-lg lg:hover:rounded-xl lg:ease-in lg:duration-150 cursor-pointer xsz:rounded-md xsz:shadow-md">
                    <h3 className = "font-inter font-semibold text-secondary/90 xsz:text-sm lg:text-base xl:text-lg"> How accurate is your sentiment analysis technology? </h3>
                    <p className = "font-inter font-medium text-secondary/80 xsz:text-[12px] lg:text-sm lg:text-center">
                        Our sentiment analysis models achieve industry-leading accuracy rates of 85-95%, depending on the complexity of the text and domain. We continuously train and improve our models to ensure the highest possible accuracy.
                    </p>
                </div>

                {/* Question4 */}
                <div className="flex flex-col items-center xsz:gap-3 bg-white xsz:px-4 xsz:py-3 lg:px-2 lg:py-5 lg:hover:scale-105 lg:hover:shadow-lg lg:hover:rounded-xl lg:ease-in lg:duration-150 cursor-pointer xsz:rounded-md xsz:shadow-md">
                    <h3 className = "font-inter font-semibold text-secondary/90 xsz:text-sm lg:text-base xl:text-lg"> Can I integrate your sentiment analysis API with my existing systems? </h3>
                    <p className = "font-inter font-medium text-secondary/80 xsz:text-[12px] lg:text-sm lg:text-center">
                        Absolutely! Our sentiment analysis API is designed for easy integration with your existing software and platforms. We provide comprehensive documentation, SDKs for popular programming languages, and dedicated support to ensure smooth implementation.
                    </p>
                </div>

                {/* Question5 */}
                <div className="flex flex-col items-center xsz:gap-3 bg-white xsz:px-4 xsz:py-3 lg:px-2 lg:py-5 lg:hover:scale-105 lg:hover:shadow-lg lg:hover:rounded-xl lg:ease-in lg:duration-150 cursor-pointer xsz:rounded-md xsz:shadow-md">
                    <h3 className = "font-inter font-semibold text-secondary/90 xsz:text-sm lg:text-base xl:text-lg"> How do I get started with SentiScan? </h3>
                    <p className = "font-inter font-medium text-secondary/80 xsz:text-[12px] lg:text-sm lg:text-center">
                        Getting started is easy! Simply fill out the contact form on this page or call us directly. Our team will schedule a consultation to understand your needs and recommend the best solution. We also offer free demos and trial periods for most of our services.
                    </p>
                </div>

            </div>

        </div>
    )
}
