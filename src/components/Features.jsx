import { Languages, FileBarChart, PieChart, LineChart, TrendingUp } from 'lucide-react'

export default function Features(props) {
    return (
        <div className={`flex flex-col xsz:py-16 xl:py-24 xsz:px-5 xsz:gap-7 lg:gap-10 xl:gap-12 ${props.bg}`} id="features">

            {/* Intial Intro Block */}
            <div className="flex flex-col items-center justify-center text-center xsz:gap-2 sm:gap-3 xl:gap-5">

                <h1 className="font-inter font-bold text-secondary/90 xsz:text-2xl md:text-3xl xl:text-4xl 2xl:text-[42px]"> Powerful Features </h1>
                <p className="font-inter xsz:text-sm md:text-base xl:text-lg text-secondary/80 font-medium">
                    Our sentiment analysis platform offers cutting-edge capabilities to help you extract meaningful insights.
                </p>

            </div>

            {/* Main Features Blocks */}
            <div className="featuresBlock xsz:flex xsz:flex-col lg:grid lg:grid-cols-2 xsz:gap-5 lg:gap-6 justify-center items-center xsz:px-1 xl:px-10 xl:gap-x-12 xl:gap-y-8">

                {/* Feature-1 */}
                <div className="flex flex-row xsz:gap-4 sm:gap-5 items-center bg-white xsz:px-5 xsz:py-4 xl:py-6 xsz:rounded-md xsz:shadow-md sm:w-2/3 lg:w-fit xl:gap-6 lg:hover:scale-105 ease-in duration-150">

                    {/* Left Side Icon */}
                    <TrendingUp className="xsz:w-12 xsz:h-9 xl:w-14 xl:h-12 xl:rounded-lg xsz:p-1 text-white bg-linear-to-br from-indigo to-blue-500 xsz:rounded-md" />

                    <div className="flex flex-col xsz:gap-1 items-start">
                        <h3 className="text-base font-inter text-secondary/90 font-bold xl:text-lg"> Real-Time Analysis </h3>
                        <p className="text-[12px] font-inter text-secondary/70 font-medium xl:text-base">
                            Process and analyze text data in real-time to get immediate insights into customer sentiment.
                        </p>
                    </div>

                </div>

                {/* Feature-2 */}
                <div className="flex flex-row xsz:gap-4 sm:gap-5 items-center bg-white xsz:px-5 xsz:py-4 xl:py-6 xsz:rounded-md xsz:shadow-md sm:w-2/3 lg:w-fit xl:gap-6 lg:hover:scale-105 ease-in duration-150">

                    {/* Left Side Icon */}
                    <Languages className="xsz:w-12 xsz:h-9 xsz:p-1 xl:w-14 xl:h-12 xl:rounded-lg text-white bg-linear-to-br from-indigo to-blue-500 xsz:rounded-md" />

                    <div className="flex flex-col xsz:gap-1 items-start">
                        <h3 className="text-base font-inter text-secondary/90 font-bold xl:text-lg"> Multi-Language Support </h3>
                        <p className="text-[12px] font-inter text-secondary/70 font-medium xl:text-base">
                            Analyze sentiment across multiple languages to understand global customer feedback.
                        </p>
                    </div>

                </div>

                {/* Feature-3 */}
                <div className="flex flex-row xsz:gap-4 sm:gap-5 items-center bg-white xsz:px-5 xsz:py-4 xl:py-6 xsz:rounded-md xsz:shadow-md sm:w-2/3 lg:w-fit xl:gap-6 lg:hover:scale-105 ease-in duration-150">

                    {/* Left Side Icon */}
                    <PieChart className="xsz:w-12 xsz:h-9 xsz:p-1 xl:w-14 xl:h-12 xl:rounded-lg text-white bg-linear-to-br from-indigo to-blue-500 xsz:rounded-md" />

                    <div className="flex flex-col xsz:gap-1 items-start">
                        <h3 className="text-base font-inter text-secondary/90 font-bold xl:text-lg"> Aspect-Based Analysis </h3>
                        <p className="text-[12px] font-inter text-secondary/70 font-medium xl:text-base">
                            Identify specific aspects of your product or service that customers are commenting on.
                        </p>
                    </div>

                </div>

                {/* Feature-4 */}
                <div className="flex flex-row xsz:gap-4 sm:gap-5 items-center bg-white xsz:px-5 xsz:py-4 xl:py-6 xsz:rounded-md xsz:shadow-md sm:w-2/3 lg:w-fit xl:gap-6 lg:hover:scale-105 ease-in duration-150">

                    {/* Left Side Icon */}
                    <FileBarChart className="xsz:w-12 xsz:h-9 xsz:p-1 xl:w-14 xl:h-12 xl:rounded-lg text-white bg-linear-to-br from-indigo to-blue-500 xsz:rounded-md" />

                    <div className="flex flex-col xsz:gap-1 items-start">
                        <h3 className="text-base font-inter text-secondary/90 font-bold xl:text-lg"> Customizable Reports </h3>
                        <p className="text-[12px] font-inter text-secondary/70 font-medium xl:text-base">
                            Generate detailed reports with visualizations to share insights across your organization.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}
