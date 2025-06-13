import { Backpack, BarChart, MessageCircle } from 'lucide-react'

export default function UseCases() {
    return (
        <div className="flex flex-col xsz:py-16 xl:py-24 xsz:px-5 xsz:gap-7 lg:gap-10 xl:gap-12 bg-gray-100" id="useCases">

            {/* Heading and Intro Block */}
            <div className="flex flex-col items-center justify-center text-center xsz:gap-2 sm:gap-3 xl:gap-5">

                <h1 className="font-inter font-bold text-secondary/90 xsz:text-2xl md:text-3xl xl:text-4xl 2xl:text-[42px]"> Sentiment Analysis Use Cases </h1>
                <p className="font-inter xsz:text-sm md:text-base xl:text-lg text-secondary/80 font-medium">
                    Discover how organizations across industries leverage sentiment analysis to drive better decisions.
                </p>

            </div>

            {/* Use Cases Block */}
            <div className="flex xsz:flex-col lg:flex-row xsz:justify-center lg:justify-evenly items-center xsz:gap-7 lg:gap-10 xl:gap-14 lg:px-5 2xl:px-7">

                {/* Brand Monitoring */}
                <div className="flex flex-col xsz:gap-3 items-start bg-white xsz:px-5 xsz:py-4 xsz:rounded-md sm:w-2/3 md:w-3/5 lg:w-fit shadow-md ease-in duration-150 lg:hover:scale-105 cursor-pointer lg:hover:shadow-lg">
                    <Backpack className="xsz:w-9 xsz:h-9 xl:w-12 xl:h-12 xl:p-2 xsz:p-[6px] xsz:rounded-md xl:rounded-xl text-indigo bg-indigo/30" />
                    <h4 className="text-secondary xsz:text-base xl:text-lg font-inter font-semibold"> Brand Monitoring </h4>
                    <p className="xsz:text-sm text-secondary/90 font-inter xl:text-base font-medium">
                        Track brand perception across social media and review sites to identify trends and address issues proactively.
                    </p>
                    <a href="#">
                        <h6 className="font-inter font-medium text-indigo xsz:text-sm lg:text-base lg:hover:translate-x-2 lg:ease-in-out lg:duration-150 cursor-pointer"> Learn More → </h6>
                    </a>
                </div>

                {/* Market Research */}
                <div className="flex flex-col xsz:gap-3 items-start bg-white xsz:px-5 xsz:py-4 xsz:rounded-md sm:w-2/3 md:w-3/5 lg:w-fit shadow-md ease-in duration-150 lg:hover:scale-105 cursor-pointer lg:hover:shadow-lg">
                    <BarChart className="xsz:w-9 xsz:h-9 xl:w-12 xl:h-12 xl:p-2 xsz:p-[6px] xsz:rounded-md xl:rounded-xl text-green-500 bg-green-100" />
                    <h4 className="text-secondary xsz:text-base xl:text-lg font-inter font-semibold"> Market Research </h4>
                    <p className="xsz:text-sm text-secondary/90 font-inter xl:text-base font-medium">
                        Analyze customer opinions about products, features, and competitors to inform product development.
                    </p>
                    <a href="#">
                        <h6 className="font-inter font-medium text-indigo xsz:text-sm lg:text-base lg:hover:translate-x-2 lg:ease-in-out lg:duration-150 cursor-pointer"> Learn More → </h6>
                    </a>
                </div>

                {/* Customer Support */}
                <div className="flex flex-col xsz:gap-3 items-start bg-white xsz:px-5 xsz:py-4 xsz:rounded-md sm:w-2/3 md:w-3/5 lg:w-fit shadow-md ease-in duration-150 lg:hover:scale-105 cursor-pointer lg:hover:shadow-lg">
                    <MessageCircle className="xsz:w-9 xsz:h-9 xl:w-12 xl:h-12 xl:p-2 xsz:p-[6px] xsz:rounded-md xl:rounded-xl text-purple-500 bg-purple-100" />
                    <h4 className="text-secondary xsz:text-base xl:text-lg font-inter font-semibold"> Customer Support </h4>
                    <p className="xsz:text-sm text-secondary/90 font-inter xl:text-base font-medium">
                        Prioritize customer support tickets based on sentiment to address negative experiences quickly.
                    </p>
                    <a href="#">
                        <h6 className="font-inter font-medium text-indigo xsz:text-sm lg:text-base lg:hover:translate-x-2 lg:ease-in-out lg:duration-150 cursor-pointer"> Learn More → </h6>
                    </a>
                </div>

            </div>

        </div>
    )
}
