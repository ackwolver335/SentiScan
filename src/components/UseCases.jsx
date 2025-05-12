// Necesarry Hooks & Packages
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// required images
import CustomerFeedbackAnalysis from '../assets/images/CustomerFeedbackAnalysis.webp'
import SocialMediaMonitoring from '../assets/images/SocialMediaMonitoring.webp'
import MentalHealthSupport from '../assets/images/MentalHealthSupport.webp'
import ContentModeration from '../assets/images/ContentModeration.webp'
import EducationFeedbackEvaluation from '../assets/images/EducationFeedbackEvaluation.webp'

export default function UseCases() {

    // active state regarding the tab-item
    const [currentTab, setCurrentTab] = useState('Tab1');                // here initially we have tab 1

    return (
        <div className="useCases xsz:px-5 xsz:py-7 sm:px-7 md:px-8 lg:px-14 xsz:space-y-3 md:space-y-3" id="useCase">

            {/* Main Headline regarding Use Cases Block */}
            <div className="useCaseHeading flex flex-row justify-between items-center">

                {/* Icons regarding Side Phases */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-briefcase xsz:w-5 md:6 xl:w-8 text-secondary lg:hover:text-indigo ease-in duration-100" viewBox="0 0 16 16">
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                </svg>

                <h2 className="font-merriweather xsz:text-lg md:text-xl xl:text-2xl xsz:font-semibold xsz:text-secondary/90"> Use Cases </h2>

                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-briefcase-fill xsz:w-5 md:6 xl:w-8 text-secondary lg:hover:text-indigo ease-in duration-100" viewBox="0 0 16 16">
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
                </svg>

            </div>

            {/* Main Block regarding Tab-Item */}
            <div className="useCasesContent xsz:space-y-4">

                {/* btn block */}
                <div className="tabBtns flex flex-row flex-wrap xsz:justify-start lg:justify-center xsz:gap-2 sm:gap-4 lg:gap-5 xl:gap-6 xsz:py-2 sm:py-4">

                    <button className={`xsz:text-[11px] sm:text-sm lg:text-base font-poppins text-white ${currentTab === "Tab1" ? 'bg-secondary/90 shadow-lg lg:shadow-2xl' : 'bg-indigo/95'} xsz:p-2 xsz:rounded-sm ease-in duration-150 sm:px-3 xl:px-4 hover:cursor-pointer`} onClick={() => { setCurrentTab('Tab1') }}> Use Case 1 </button>
                    <button className={`xsz:text-[11px] sm:text-sm lg:text-base font-poppins text-white ${currentTab === "Tab2" ? 'bg-secondary/90 shadow-lg lg:shadow-2xl' : 'bg-indigo/95'} xsz:p-2 xsz:rounded-sm ease-in duration-150 sm:px-3 xl:px-4 hover:cursor-pointer`} onClick={() => { setCurrentTab('Tab2') }}> Use Case 2 </button>
                    <button className={`xsz:text-[11px] sm:text-sm lg:text-base font-poppins text-white ${currentTab === "Tab3" ? 'bg-secondary/90 shadow-lg lg:shadow-2xl' : 'bg-indigo/95'} xsz:p-2 xsz:rounded-sm ease-in duration-150 sm:px-3 xl:px-4 hover:cursor-pointer`} onClick={() => { setCurrentTab('Tab3') }}> Use Case 3 </button>
                    <button className={`xsz:text-[11px] sm:text-sm lg:text-base font-poppins text-white ${currentTab === "Tab4" ? 'bg-secondary/90 shadow-lg lg:shadow-2xl' : 'bg-indigo/95'} xsz:p-2 xsz:rounded-sm ease-in duration-150 sm:px-3 xl:px-4 hover:cursor-pointer`} onClick={() => { setCurrentTab('Tab4') }}> Use Case 4 </button>
                    <button className={`xsz:text-[11px] sm:text-sm lg:text-base font-poppins text-white ${currentTab === "Tab5" ? 'bg-secondary/90 shadow-lg lg:shadow-2xl' : 'bg-indigo/95'} xsz:p-2 xsz:rounded-sm ease-in duration-150 sm:px-3 xl:px-4 hover:cursor-pointer`} onClick={() => { setCurrentTab('Tab5') }}> Use Case 5 </button>

                </div>

                {/* Use Cases Block */}
                <div className="mainCases">

                    {/* Customer Feedback Analysis */}
                    {
                        currentTab == 'Tab1'
                        &&

                        <AnimatePresence mode="wait">
                            <motion.div key={currentTab} initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}>

                                <div className="tab1 flex flex-col items-center xsz:gap-3">

                                    <h2 className="xsz:text-sm sm:text-base md:text-lg xl:text-xl font-merriweather xsz:font-semibold xsz:text-secondary/90"> Customer Feedback Analysis </h2>
                                    <img src={CustomerFeedbackAnalysis} alt="Customer Feedback Analysis" className="xsz:w-2/3 md:w-2/4 lg:w-2/5 xl:w-1/4 rounded-md" />

                                    {/* Use Case Description */}
                                    <p className="font-inter xsz:text-[11px] sm:text-sm lg:text-base text-center text-secondary/85">
                                        <b> Description : </b> Analyze reviews or survey responses to gauge customer satisfaction and identify areas of improvement.
                                    </p>

                                    {/* Use Case Example */}
                                    <p className="font-inter xsz:text-[11px] sm:text-sm lg:text-base sm:px-4 lg:px-6 lg:py-3 text-center text-white bg-secondary/80 xsz:p-2 xsz:rounded-b-lg xsz:shadow-lg lg:shadow-2xl">
                                        <b> Example : </b> A marketer enters recent tweets mentioning their brand to track shifts in public opinion in real time.
                                    </p>

                                </div>

                            </motion.div>
                        </AnimatePresence>
                    }

                    {/* Social Media Monitoring */}
                    {
                        currentTab == 'Tab2'
                        &&

                        <AnimatePresence mode="wait">
                            <motion.div key={currentTab} initial={{ opacity: 0, y: 20, scale: 0.5 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -100, scale: 0.8 }}
                                transition={{ duration: 0.5 }}>

                                <div className="tab1 flex flex-col items-center xsz:gap-3">

                                    <h2 className="xsz:text-sm sm:text-base md:text-lg xl:text-xl font-merriweather xsz:font-semibold xsz:text-secondary/90"> Social Media Monitoring </h2>
                                    <img src={SocialMediaMonitoring} alt="Social Media Monitoring" className="xsz:w-2/3 md:w-2/4 lg:w-2/5 xl:w-1/4 rounded-md" />

                                    {/* Use Case Description */}
                                    <p className="font-inter xsz:text-[11px] sm:text-sm lg:text-base text-center text-secondary/85">
                                        <b> Description : </b> Monitor public sentiment on platforms like Twitter, Reddit, or LinkedIn to understand brand perception.
                                    </p>

                                    {/* Use Case Example */}
                                    <p className="font-inter xsz:text-[11px] sm:text-sm lg:text-base sm:px-4 lg:px-6 lg:py-3 text-center text-white bg-secondary/80 xsz:p-2 xsz:rounded-b-lg xsz:shadow-lg lg:shadow-2xl">
                                        <b> Example : </b> A marketer enters recent tweets mentioning their brand to track shifts in public opinion in real time.
                                    </p>

                                </div>

                            </motion.div>
                        </AnimatePresence>
                    }

                    {/* Mental Health Support */}
                    {
                        currentTab == 'Tab3'
                        &&

                        <AnimatePresence mode="wait">
                            <motion.div key={currentTab} initial={{ opacity: 0, y: 20, scale: 0.5 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -100, scale: 0.8 }}
                                transition={{ duration: 0.5 }}>

                                <div className="tab1 flex flex-col items-center xsz:gap-3">

                                    <h2 className="xsz:text-sm sm:text-base md:text-lg xl:text-xl font-merriweather xsz:font-semibold xsz:text-secondary/90"> Mental Health Support </h2>
                                    <img src={MentalHealthSupport} alt="Mental Health Support" className="xsz:w-2/3 md:w-2/4 lg:w-2/5 xl:w-1/4 rounded-md" />

                                    {/* Use Case Description */}
                                    <p className="font-inter xsz:text-[11px] sm:text-sm lg:text-base text-center text-secondary/85">
                                        <b> Description : </b> Detect emotional patterns in user inputs that may indicate anxiety, sadness, or distress, helping mental health professionals.
                                    </p>

                                    {/* Use Case Example */}
                                    <p className="font-inter xsz:text-[11px] sm:text-sm lg:text-base sm:px-4 lg:px-6 lg:py-3 text-center text-white bg-secondary/80 xsz:p-2 xsz:rounded-b-lg xsz:shadow-lg lg:shadow-2xl">
                                        <b> Example : </b> A chatbot logs user interactions and highlights concerning emotional signals for human review.
                                    </p>

                                </div>

                            </motion.div>
                        </AnimatePresence>
                    }

                    {/* Content Moderation */}
                    {
                        currentTab == 'Tab4'
                        &&

                        <AnimatePresence mode="wait">
                            <motion.div key={currentTab} initial={{ opacity: 0, y: 20, scale: 0.5 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -100, scale: 0.8 }}
                                transition={{ duration: 0.5 }}>

                                <div className="tab1 flex flex-col items-center xsz:gap-3">

                                    <h2 className="xsz:text-sm sm:text-base md:text-lg xl:text-xl font-merriweather xsz:font-semibold xsz:text-secondary/90"> ContentModeration </h2>
                                    <img src={ContentModeration} alt="ContentModeration" className="xsz:w-2/3 md:w-2/4 lg:w-2/5 xl:w-1/4 rounded-md" />

                                    {/* Use Case Description */}
                                    <p className="font-inter xsz:text-[11px] sm:text-sm lg:text-base text-center text-secondary/85">
                                        <b> Description : </b> Automatically flag toxic, aggressive, or harmful comments based on emotional and sentiment analysis.
                                    </p>

                                    {/* Use Case Example */}
                                    <p className="font-inter xsz:text-[11px] sm:text-sm lg:text-base sm:px-4 lg:px-6 lg:py-3 text-center text-white bg-secondary/80 xsz:p-2 xsz:rounded-b-lg xsz:shadow-lg lg:shadow-2xl">
                                        <b> Example : </b> A forum implements this tool to detect and review posts with high anger or negativity.
                                    </p>

                                </div>

                            </motion.div>
                        </AnimatePresence>
                    }

                    {/* Educational Feedback Analysis */}
                    {
                        currentTab == 'Tab5'
                        &&

                        <AnimatePresence mode="wait">
                            <motion.div key={currentTab} initial={{ opacity: 0, y: 20, scale: 0.5 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -100, scale: 0.8 }}
                                transition={{ duration: 0.5 }}>

                                <div className="tab1 flex flex-col items-center xsz:gap-3">

                                    <h2 className="xsz:text-sm sm:text-base md:text-lg xl:text-xl font-merriweather xsz:font-semibold xsz:text-secondary/90"> Educational Feedback Evaluation </h2>
                                    <img src={EducationFeedbackEvaluation} alt="Education Feedback Evaluation" className="xsz:w-2/3 md:w-2/4 lg:w-2/5 xl:w-1/4 rounded-md" />

                                    {/* Use Case Description */}
                                    <p className="font-inter xsz:text-[11px] sm:text-sm lg:text-base text-center text-secondary/85">
                                        <b> Description : </b> Teachers or institutions can analyze student feedback to understand morale, teaching quality, or stress levels.
                                    </p>

                                    {/* Use Case Example */}
                                    <p className="font-inter xsz:text-[11px] sm:text-sm lg:text-base sm:px-4 lg:px-6 lg:py-3 text-center text-white bg-secondary/80 xsz:p-2 xsz:rounded-b-lg xsz:shadow-lg lg:shadow-2xl">
                                        <b> Example : </b> After exams, sentiment from feedback forms is analyzed to assess how students felt about the course.
                                    </p>

                                </div>

                            </motion.div>
                        </AnimatePresence>
                    }

                </div>

            </div>

        </div >
    )
}
