import { Smile, Frown, Meh } from 'lucide-react'

export default function IntroBlock() {
  return (
    <div className="bg-dots xsz:pt-22 sm:pt-30 xsz:pb-10 lg:pb-20 xsz:px-6 lg:px-8 lg:pt-36 flex xsz:flex-col md:flex-row xsz:gap-3 sm:gap-5 xsz:justify-between lg:justify-center 2xl:justify-evenly lg:gap-10 xl:gap-0 items-center">

      {/* first Initial Block regarding */}
      <div className="headingBlock flex flex-col xsz:gap-4 md:gap-5 xl:gap-7 xsz:items-center md:items-start sm:w-4/6 lg:w-2/5 xl:w-3/6 2xl:w-2/6 xsz:px-3 xsz:py-2">

        <h2 className="text-white font-bold xsz:text-2xl sm:text-4xl xl:text-5xl" > Unlock the Power of <span className="font-bold bg-gradient-to-br from-indigo-600 to-pink-500 bg-clip-text text-transparent" > Sentiment Analysis </span> </h2>
        <p className="text-white/80 xsz:text-sm font-inter xsz:font-medium lg:text-base 2xl:text-lg">
          Transform unstructured text data into actionable insights. Understand what your customers are really saying.
        </p>

        {/* Another Button's Div Block */}
        <div className="navigationBtn xsz:gap-3 md:gap-5 xl:gap-6 w-full flex xsz:flex-col sm:flex-row">
          <button className="text-white font-poppins font-medium xsz:text-sm bg-indigo xsz:rounded-md hover:scale-105 active:scale-95 ease-in duration-100 xsz:w-full sm:w-fit xsz:px-5 xsz:py-2 cursor-pointer xl:text-lg xl:px-7"> Start Free Trial </button>
          <button className="text-white font-poppins font-medium xsz:text-sm bg-transparent border border-white xsz:rounded-md hover:scale-105 active:scale-95 ease-in duration-100 xsz:w-full sm:w-fit xsz:px-5 xsz:py-2 cursor-pointer xl:text-lg xl:px-7"> Watch Demo </button>
        </div>

      </div>

      {/* Block regarding Sentiments */}
      <div className="sentimentView bg-white xsz:rounded-md xl:rounded-lg xsz:shadow-lg xl:shadow-xl xsz:py-3 xsz:px-4 xl:px-6 xl:py-4 xsz:space-y-4 xl:space-y-6">

        {/* First block regarding main Heading */}
        <div className="headBlock flex flex-row justify-between items-center">

          {/* Three dots block */}
          <div className="dotsBlock flex flex-row xsz:gap-1 xl:gap-2 items-center">
            <div className="xsz:w-3 xsz:h-3 xl:w-4 xl:h-4 bg-red-500 rounded-full"></div>
            <div className="xsz:w-3 xsz:h-3 xl:w-4 xl:h-4 bg-yellow-500 rounded-full"></div>
            <div className="xsz:w-3 xsz:h-3 xl:w-4 xl:h-4 bg-green-500 rounded-full"></div>
          </div>

          {/* Heading */}
          <h3 className="text-secondary/70 xsz:text-sm xl:text-base font-inter font-medium"> Sentiment Analysis </h3>

        </div>

        <div className="allSenti flex flex-col xsz:gap-2 xl:gap-4">
          
          {/* Sentiment Difference Blocks */}
          <div className="mainSenti flex flex-row gap-3 xsz:rounded-md xl:rounded-lg bg-green-100 xsz:py-2 xl:py-2 xsz:pr-3">

            {/* Side Liner */}
            <div className="lining xsz:w-1 bg-green-600 rounded-tl-lg xsz:rounded-bl-lg xl:rounded-bl-sm"></div>

            {/* Content Information */}
            <div className="textContent flex flex-col xsz:gap-1">
              <h3 className="font-inter xsz:text-sm xl:text-base font-semibold text-green-600 flex flex-row items-center xsz:gap-2"> <Smile className="xsz:w-5 xsz:h-5 xl:w-7 xl:h-7 text-green-600" /> Positive Sentiment : 68% </h3>
              <p className="text-[12px] text-green-600 font-inter xl:text-sm">
                "I absolutely love this product ! The customer service was excellent."
              </p>
            </div>

          </div>

          {/* Sentiment Difference Blocks */}
          <div className="mainSenti flex flex-row gap-3 xsz:rounded-md xl:rounded-lg bg-yellow-100 xsz:py-2 xl:py-2 xsz:pr-3">

            {/* Side Liner */}
            <div className="lining xsz:w-1 bg-yellow-600 rounded-tl-lg xsz:rounded-bl-lg xl:rounded-bl-sm"></div>

            {/* Content Information */}
            <div className="textContent flex flex-col xsz:gap-1">
              <h3 className="font-inter xsz:text-sm  xl:text-base font-semibold text-yellow-600 flex flex-row items-center xsz:gap-2"> <Meh className="xsz:w-5 xsz:h-5 xl:w-7 xl:h-7 text-yellow-600" /> Neutral Sentiment : 22% </h3>
              <p className="text-[12px] text-yellow-600 font-inter xl:text-sm">
                "I absolutely love this product ! The customer service was excellent."
              </p>
            </div>

          </div>

          {/* Sentiment Difference Blocks */}
          <div className="mainSenti flex flex-row gap-3 xsz:rounded-md xl:rounded-lg bg-red-200 xsz:py-2 xl:py-2 xsz:pr-3">

            {/* Side Liner */}
            <div className="lining xsz:w-1 bg-red-600 rounded-tl-lg xsz:rounded-bl-lg xl:rounded-bl-sm"></div>

            {/* Content Information */}
            <div className="textContent flex flex-col xsz:gap-1">
              <h3 className="font-inter xsz:text-sm xl:text-base font-semibold text-red-600 flex flex-row items-center xsz:gap-2"> <Frown className="xsz:w-5 xsz:h-5 xl:w-7 xl:h-7 text-red-600" /> Negative Sentiment : 10% </h3>
              <p className="text-[12px] text-red-600 font-inter xl:text-sm">
                "I absolutely love this product ! The customer service was excellent."
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
