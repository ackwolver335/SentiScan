import Sentiment from 'sentiment'

export default function Demo() {

    // creating dependencing for gathering sentiment data.
    let sentiment = new Sentiment();

    // method regarding text analysis
    const analyseText = () => {
        const result = sentiment.analyze(document.querySelector('#userText').value)
        console.log(result);
    }

    return (
        <div className="flex flex-col items-center xsz:py-16 xl:py-24 xsz:px-5 xsz:gap-7 lg:gap-10" id="demo">

            {/* Heading & Intro regarding Usage */}
            <div className="flex flex-col items-center justify-center text-center xsz:gap-2 sm:gap-3 xl:gap-5">

                <h1 className="font-inter font-bold text-secondary/90 xsz:text-2xl md:text-3xl xl:text-4xl 2xl:text-[42px]"> Try Sentiment Analysis </h1>
                <p className="font-inter xsz:text-sm md:text-base xl:text-lg text-secondary/80 font-medium">
                    Enter some text below to see our Sentiment Analysis in actions.
                </p>

            </div>

            {/* Use Case Block for Demo Workflow */}
            <div className="mainUsage flex flex-col bg-gray-100 xsz:rounded-md lg:rounded-lg">

                {/* Initial Form for retriving data from the user */}
                <form className="flex flex-col items-centerc xsz:gap-3 sm:gap-4 md:gap-5 xsz:py-4 xsz:px-5 md:p-6 xl:px-8 xl:py-7">

                    {/* Input Retrieving Elements */}
                    <label htmlFor="userText" className="font-inter font-semibold text-secondary/80 xsz:text-sm md:text-base xl:text-lg"> Enter text to analyze : </label>
                    <input type="text" id="userText" className="bg-white sm:w-100 text-indigo xsz:rounded-md lg:focus:rounded-xl focus:rounded-lg focus:border-indigo border-2 border-indigo/50 outline-none ease-in duration-100 xsz:px-3 xsz:py-2 xsz:text-[12px] sm:text-sm xl:text-base font-inter font-medium" placeholder = "Type or Paste text here..." required />

                    {/* Getting Values through it */}
                    <div className="workFlow xsz:space-x-2 md:space-x-3">
                        <button type="button" className="analyseBtn bg-indigo/80 xsz:rounded-sm active:scale-95 lg:hover:scale-105 ease-in duration-100 xsz:px-3 xsz:py-1 font-inter font-medium text-white w-fit xsz:text-sm xl:rounded-lg xl:text-base cursor-pointer" onClick={analyseText}> Analyse Text </button>
                        <button type="reset" className="analyseBtn bg-indigo/80 xsz:rounded-sm active:scale-95 lg:hover:scale-105 ease-in duration-100 xsz:px-3 xsz:py-1 font-inter font-medium text-white w-fit xsz:text-sm xl:rounded-lg xl:text-base cursor-pointer"> Clear Text </button>
                    </div>
                </form>

            </div>

        </div>
    )
}
