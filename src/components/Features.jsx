import RealTimeAnalysis from '../assets/images/RealTimeAnalysis.webp'
import MultiEmotionDetection from '../assets/images/MultiEmotionDetection.webp'
import ScoreBasedAnalysis from '../assets/images/ScoreBasedAnalysis.webp'
import CleanUI from '../assets/images/CleanUI.webp'
import MobileFriendly from '../assets/images/MobileFriendly.webp'
import PrivacyFirst from '../assets/images/PrivacyFirst.webp'


export default function Features() {
    return (
        <div className="xsz:px-5 sm:px-7 md:px-8 md:py-7 xl:py-8 xsz:py-6 flex flex-col xsz:gap-3 z-10 bg-white" id = "feature">

            {/* Initial Block of Heading */}
            <div className="headingBlock flex flex-row justify-between xsz:px-1 md:px-2 lg:px-6 xl:px-8 3xl:px-10">

                {/* Main Heading regarding the Features's Section */}
                <h2 className="xsz:text-lg md:text-xl xl:text-2xl font-merriweather xsz:font-bold text-indigo"> Features Scales </h2>

                {/* Icon regarding Features of this Web-App */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-pencil-square xsz:w-5 md:w-6 xl:w-8 text-indigo " viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                </svg>

            </div>

            {/* Another Block regarding its features & overview */}
            <div className="featureCards grid xsz:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xsz:gap-6 md:gap-8 3xl:gap-10 xsz:px-2 xsz:py-4">

                {/* Features with image explanation with cards */}
                {/* 1. Real Time Analysis */}
                <div className="imageCard blockAnimate flex flex-col items-center xsz:shadow-md lg:hover:shadow-indigo-500 lg:hover:shadow-xl xsz:px-2 xsz:py-4 xsz:rounded-lg lg:scale-90 hover:scale-100 ease-     md:gap-3 duration-100 xsz:gap-2">
                    <img src = {RealTimeAnalysis} alt = "Feature - Real Time Analysis" className = "xsz:w-2/3 rounded-t-md" />
                    <h2 className = "font-merriweather text-secondary xsz:font-semibold xl:text-lg xsz:text-[15px]"> Real Time Analysis </h2>
                    <p className = "font-inter xsz:text-[11px] md:text-sm xl:text-base">
                        Get Instant Sentiment Results as you type.
                    </p>
                </div>


                <div className="imageCard blockAnimate flex flex-col items-center xsz:shadow-md lg:hover:shadow-indigo-500 lg:hover:shadow-xl xsz:px-2 xsz:py-4 xsz:rounded-lg lg:scale-90 hover:scale-100 ease-     md:gap-3 duration-100 xsz:gap-2">
                    <img src = {MultiEmotionDetection} alt = "Multi-Emotion Detection" className = "xsz:w-2/3 rounded-t-md" />
                    <h2 className = "font-merriweather text-secondary xsz:font-semibold xl:text-lg xsz:text-[15px]"> Multi-Emotion Detection </h2>
                    <p className = "font-inter xsz:text-[11px] md:text-sm xl:text-base">
                        Goes beyond Positive/Negative — detects Happy, Angry, etc.
                    </p>
                </div>

                <div className="imageCard blockAnimate flex flex-col items-center xsz:shadow-md lg:hover:shadow-indigo-500 lg:hover:shadow-xl xsz:px-2 xsz:py-4 xsz:rounded-lg lg:scale-90 hover:scale-100 ease-     md:gap-3 duration-100 xsz:gap-2">
                    <img src = {ScoreBasedAnalysis} alt = "Score Based Insights" className = "xsz:w-2/3 rounded-t-md" />
                    <h2 className = "font-merriweather text-secondary xsz:font-semibold xl:text-lg xsz:text-[15px]"> Score Based Insights </h2>
                    <p className = "font-inter xsz:text-[11px] md:text-sm xl:text-base">
                        Shows emotional intensity on a scale (e.g., 0.0 - 1.0).
                    </p>
                </div>

                <div className="imageCard blockAnimate flex flex-col items-center xsz:shadow-md lg:hover:shadow-indigo-500 lg:hover:shadow-xl xsz:px-2 xsz:py-4 xsz:rounded-lg lg:scale-90 hover:scale-100 ease-     md:gap-3 duration-100 xsz:gap-2">
                    <img src = {CleanUI} alt = "Clean UI" className = "xsz:w-2/3 rounded-t-md" />
                    <h2 className = "font-merriweather text-secondary xsz:font-semibold xl:text-lg xsz:text-[15px]"> Clean UI </h2>
                    <p className = "font-inter xsz:text-[11px] md:text-sm xl:text-base">
                        Simple and distraction-free experience.
                    </p>
                </div>

                <div className="imageCard blockAnimate flex flex-col items-center xsz:shadow-md lg:hover:shadow-indigo-500 lg:hover:shadow-xl xsz:px-2 xsz:py-4 xsz:rounded-lg lg:scale-90 hover:scale-100 ease-     md:gap-3 duration-100 xsz:gap-2">
                    <img src = {MobileFriendly} alt = "Mobile Friendly Experience" className = "xsz:w-2/3 rounded-t-md" />
                    <h2 className = "font-merriweather text-secondary xsz:font-semibold xl:text-lg xsz:text-[15px]"> Mobile Friendly </h2>
                    <p className = "font-inter xsz:text-[11px] md:text-sm xl:text-base">
                        Fully responsive — works smoothly on phones and tablets.
                    </p>
                </div>

                <div className="imageCard blockAnimate flex flex-col items-center xsz:shadow-md lg:hover:shadow-indigo-500 lg:hover:shadow-xl xsz:px-2 xsz:py-4 xsz:rounded-lg lg:scale-90 hover:scale-100 ease-     md:gap-3 duration-100 xsz:gap-2">
                    <img src = {PrivacyFirst} alt = "User's Privacy First" className = "xsz:w-2/3 rounded-t-md" />
                    <h2 className = "font-merriweather text-secondary xsz:font-semibold xl:text-lg xsz:text-[15px]"> Privacy First </h2>
                    <p className = "font-inter xsz:text-[11px] md:text-sm xl:text-base">
                        We don't store or share your sentences.
                    </p>
                </div>

            </div>

        </div>
    )
}
