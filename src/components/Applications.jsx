import React from 'react'
import { MessageCircle, Headphones, LineChart, Newspaper } from 'lucide-react'

export default function Applications() {
    return (
        <div className = "flex flex-col items-center xsz:py-16 xl:py-22 2xl:py-24 xsz:px-3 xsz:gap-7 lg:gap-10" id = "applications">
            
            {/* Heading of the Block */}
            <h1 className="xsz:px-3 text-center font-inter font-bold text-secondary/90 xsz:text-2xl md:text-3xl xl:text-4xl 2xl:text-[42px]"> Applications of <span className="bg-gradient-to-br from-indigo-600 to-pink-500 bg-clip-text text-transparent"> Sentiment Analysis </span> </h1>

            {/* Applications Block */}
            <div className="applications xsz:flex xsz:flex-col xsz:gap-5 lg:grid lg:grid-cols-2 items-center justify-center xsz:px-1 lg:px-10 xl:px-14 xl:gap-x-12 xl:gap-y-8">

                {/* Social Media Monitoring */}
                <div className="flex flex-row xsz:gap-4 sm:gap-5 items-start bg-white xsz:px-5 xsz:py-4 xl:py-6 xsz:rounded-md sm:w-2/3 lg:w-fit xl:gap-6">

                    {/* Left Side Icon */}
                    <MessageCircle className="xsz:w-12 xsz:h-9 xl:w-14 xl:h-12 xl:rounded-lg xsz:p-1 text-blue-500 bg-blue-200 xsz:rounded-md" />

                    <div className="flex flex-col xsz:gap-1 items-start">
                        <h3 className="text-base font-inter text-secondary/90 font-bold xl:text-lg"> Social Media Monitoring </h3>
                        <p className="text-[12px] font-inter text-secondary/70 font-medium xl:text-base">
                            Track brand perception and customer sentiment across social platforms to guide marketing strategies and crisis management.
                        </p>
                    </div>

                </div>

                {/* Customer Service */}
                <div className="flex flex-row xsz:gap-4 sm:gap-5 items-start bg-white xsz:px-5 xsz:py-4 xl:py-6 xsz:rounded-md sm:w-2/3 lg:w-fit xl:gap-6">

                    {/* Left Side Icon */}
                    <Headphones className="xsz:w-12 xsz:h-9 xl:w-14 xl:h-12 xl:rounded-lg xsz:p-1 text-purple-500 bg-purple-200 xsz:rounded-md" />

                    <div className="flex flex-col xsz:gap-1 items-start">
                        <h3 className="text-base font-inter text-secondary/90 font-bold xl:text-lg"> Customer Service </h3>
                        <p className="text-[12px] font-inter text-secondary/70 font-medium xl:text-base">
                            Analyze customer feedback to improve products and services, prioritize issues, and enhance overall customer experience.
                        </p>
                    </div>

                </div>

                {/* Market Research */}
                <div className="flex flex-row xsz:gap-4 sm:gap-5 items-start bg-white xsz:px-5 xsz:py-4 xl:py-6 xsz:rounded-md sm:w-2/3 lg:w-fit xl:gap-6">

                    {/* Left Side Icon */}
                    <LineChart className="xsz:w-12 xsz:h-9 xl:w-14 xl:h-12 xl:rounded-lg xsz:p-1 text-green-500 bg-green-200 xsz:rounded-md" />

                    <div className="flex flex-col xsz:gap-1 items-start">
                        <h3 className="text-base font-inter text-secondary/90 font-bold xl:text-lg"> Market Research </h3>
                        <p className="text-[12px] font-inter text-secondary/70 font-medium xl:text-base">
                            Gain insights into consumer opinions about products, services, and competitors to inform business decisions.
                        </p>
                    </div>

                </div>

                {/* Political Analysis */}
                <div className="flex flex-row xsz:gap-4 sm:gap-5 items-start bg-white xsz:px-5 xsz:py-4 xl:py-6 xsz:rounded-md sm:w-2/3 lg:w-fit xl:gap-6">

                    {/* Left Side Icon */}
                    <Newspaper className="xsz:w-12 xsz:h-9 xl:w-14 xl:h-12 xl:rounded-lg xsz:p-1 text-red-500 bg-red-200 xsz:rounded-md" />

                    <div className="flex flex-col xsz:gap-1 items-start">
                        <h3 className="text-base font-inter text-secondary/90 font-bold xl:text-lg"> Political Analysis </h3>
                        <p className="text-[12px] font-inter text-secondary/70 font-medium xl:text-base">
                            Monitor public opinion on political issues, candidates, and policies to understand voter sentiment and predict trends.
                        </p>
                    </div>

                </div>

            </div>
            
        </div>
    )
}
