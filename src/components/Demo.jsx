import Sentiment from 'sentiment'
import { React, useState } from 'react';

export default function Demo(props) {

    // variable for storing sentiment result providing sentiment type
    const [analysis, setAnalysis] = useState({});                                                  // for object on return
    const [category, setCategory] = useState('');                                                    // for setting sentiment type

    // method regarding text analysis
    const analyseText = (e) => {

        // preventing the default event
        e.preventDefault();

        // creating dependencing for gathering sentiment data.
        let sentiment = new Sentiment();
        const result = sentiment.analyze(document.querySelector('#userText').value);                // variable containing sentiments after results
        setAnalysis(result);

        // classifying sentiments category
        let sentimentType = "Neutral";
        if (result.score > 0) {
            sentimentType = "Positive";
        } else if (result.score < 0) {
            sentimentType = "Negative";
        }

        // setting the category of the sentiment
        setCategory(sentimentType);

        if (document.querySelector('#userText').value === '') {
            return
        } else {

            // sound effect
            props.sound();

            // showing the content
            document.querySelector(".analyzedData").classList.remove("xsz:translate-y-[500px]");
        }

        // setting a timer regarding automatically closing the view after 3-4 seconds incase user forget to do that
        setTimeout(() => {
            document.querySelector(".analyzedData").classList.add("xsz:translate-y-[500px]");
        }, 5500);
    }

    // method for closing the analysis window
    const closeWindow = () => {
        document.querySelector(".analyzedData").classList.toggle("xsz:translate-y-[500px]");
    }

    // method to copy the result shown below
    const copyResult = () => {

        // sound effect
        props.sound();

        // copy content code
        const copyContent = document.querySelector('.resultContent').innerText;
        navigator.clipboard.writeText(copyContent);
    }

    return (
        <div className={`flex flex-col items-center xsz:py-16 xl:py-24 xsz:px-5 xsz:gap-7 lg:gap-10 ${props.bg}`} id="demo">

            {/* Heading & Intro regarding Usage */}
            <div className="flex flex-col items-center justify-center text-center xsz:gap-2 sm:gap-3 lg:gap-5 xl:gap-5">

                <h1 className="font-inter font-bold text-secondary/90 xsz:text-2xl md:text-3xl xl:text-4xl 2xl:text-[42px]"> Try Sentiment Analysis </h1>
                <p className="font-inter xsz:text-sm md:text-base xl:text-lg text-secondary/80 font-medium">
                    Enter some text below to see our Sentiment Analysis in actions.
                </p>

            </div>

            {/* Use Case Block for Demo Workflow */}
            <div className="mainUsage flex flex-col bg-gray-100 xsz:rounded-md lg:rounded-lg">

                {/* Initial Form for retriving data from the user */}
                <form className="flex flex-col items-start xsz:gap-3 sm:gap-4 xl:gap-5 xsz:py-4 xsz:px-5 md:p-6 xl:px-8 xl:py-7">

                    {/* Input Retrieving Elements */}
                    <label htmlFor="userText" className="font-inter font-semibold text-secondary/80 xsz:text-sm md:text-base xl:text-lg"> Enter text to analyze : </label>
                    <input type="text" id="userText" className="bg-white xsz:w-70 sm:w-100 text-indigo xsz:rounded-md lg:focus:rounded-xl focus:rounded-lg focus:border-indigo border-2 border-indigo/50 outline-none ease-in duration-100 xsz:px-3 xsz:py-2 xsz:text-[12px] sm:text-sm xl:text-base font-inter font-medium" placeholder="Type or Paste text here..." required />

                    {/* Getting Values through it */}
                    <div className="workFlow xsz:space-x-2 md:space-x-3 xl:space-x-4">
                        <button type="button" className="analyseBtn bg-indigo/80 xsz:rounded-sm active:scale-95 active:shadow-md hover:scale-105 ease-in duration-100 xsz:px-3 xsz:py-1 font-inter font-medium text-white w-fit xsz:text-sm xl:rounded-lg xl:text-base cursor-pointer xl:px-4" onClick={analyseText}> Analyse Text </button>
                        <button type="reset" className="bg-indigo/80 xsz:rounded-sm active:scale-95 active:shadow-md hover:scale-105 ease-in duration-100 xsz:px-3 xsz:py-1 font-inter font-medium text-white w-fit xsz:text-sm xl:rounded-lg xl:text-base cursor-pointer xl:px-4" onClick={props.sound}> Clear Text </button>
                    </div>
                </form>

            </div>

            {/* Main After Result Block containing Analyzed data */}
            <div className={`analyzedData fixed xsz:bottom-10 lg:bottom-14 xl:bottom-20 xsz:translate-y-[500px] xsz:w-80 sm:w-100 md:w-[500px] xl:w-[700px] bg-white/80 backdrop-blur-md xsz:py-3 xsz:px-4 md:py-5 md:px-6 xsz:rounded-md xsz:shadow-md md:shadow-lg flex flex-col xsz:gap-3 ease-in duration-250`}>

                {/* Heading Block with Closing Button */}
                <div className="flex flex-row justify-between items-center">
                    <h3 className="xsz:text-base lg:text-lg xl:text-xl font-inter text-secondary/90 font-semibold"> Analyzed Result </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-x-square xsz:w-6 lg:w-7 xl:w-8 cursor-pointer ${category === 'Positive' ? 'text-green-700' : category === 'Negative' ? 'text-red-500' : 'text-yellow-700'}`} viewBox="0 0 16 16" onClick={closeWindow}>
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </div>

                <div className="flex flex-col items-start xsz:gap-1">

                    <p className={`xsz:text-sm lg:text-base font-inter font-medium ${category === 'Positive' ? 'text-green-700' : category === 'Negative' ? 'text-red-500' : 'text-yellow-700'}`}> Sentiment Category : {category} </p>
                    <p className={`xsz:text-sm lg:text-base font-inter font-medium ${category === 'Positive' ? 'text-green-700' : category === 'Negative' ? 'text-red-500' : 'text-yellow-700'}`}> Sentiment Score : {analysis.score} </p>
                    <p className={`xsz:text-sm lg:text-base font-inter font-medium ${category === 'Positive' ? 'text-green-700' : category === 'Negative' ? 'text-red-500' : 'text-yellow-700'}`}> Percentage : {analysis.comparative * 100}% </p>

                    <p className="resultContent hidden">
                        Sentiment Category : {category} <br />
                        Sentiment Score : {analysis.score} <br />
                        Percentage : {analysis.comparative * 100}% <br />
                    </p>

                </div>

                {/* Button regarding Result to be Copied */}
                <button className={`${category === 'Positive' ? 'text-green-700' : category === 'Negative' ? 'text-red-500' : 'text-yellow-700'} ${category === 'Positive' ? 'bg-green-300/50' : category === 'Negative' ? 'bg-red-300/40' : 'bg-yellow-300/40'} font-inter font-semibold xsz:text-sm lg:text-base w-fit xsz:px-3 xsz:py-1 lg:px-4 lg:py-2 cursor-pointer lg:shadow-md xsz:rounded-md active:scale-95 hover:scale-105 ease-in duration-150`} onClick={copyResult}> Copy Result </button>

            </div>

        </div>
    )
}
