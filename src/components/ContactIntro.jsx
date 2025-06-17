import React from 'react'

export default function ContactIntro() {
    return (
        <div className = "xsz:pt-22 sm:pt-30 xsz:pb-10 lg:pb-16 xl:pb-20 xsz:px-6 lg:px-12 lg:pt-36 flex xsz:flex-col xsz:gap-5 md:flex-row xsz:items-center xsz:justify-between lg:justify-center xl:gap-12 md:items-start bg-linear-to-br from-[#3b81f5] to-[#9234ea]">

            {/* First Heading & Intro Block */}
            <div className="flex flex-col items-center xsz:w-fit lg:w-3/5 xl:w-2/4 xsz:gap-3 lg:gap-5 xl:gap-7">
                <h3 className="xsz:text-2xl sm:text-4xl xl:text-5xl 2xl:text-6xl text-white font-inter font-bold"> Get in Touch </h3>
                <p className="xsz:text-sm lg:text-base xl:text-lg text-white font-poppins font-medium text-center">
                    Have questions about sentiment analysis or want to learn how our solutions can help your business? We'd love to hear from you.
                </p>
            </div>

        </div>
    )
}
