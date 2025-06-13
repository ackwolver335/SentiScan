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
        <div className="flex flex-col items-center xsz:py-16 xl:py-24 xsz:px-5 xsz:gap-7 lg:gap-14 xl:gap-16" id="demo">

            {/* Heading & Intro regarding Usage */}
            <div className="flex flex-col items-center justify-center text-center xsz:gap-2 sm:gap-3 xl:gap-5">

                <h1 className="font-inter font-bold text-secondary/90 xsz:text-2xl md:text-3xl xl:text-4xl 2xl:text-[42px]"> Try Sentiment Analysis </h1>
                <p className="font-inter xsz:text-sm md:text-base xl:text-lg text-secondary/80 font-medium">
                    Enter some text below to see our Sentiment Analysis in actions.
                </p>

            </div>

            {/* Use Case Block for Demo Workflow */}
            <div className="mainUsage flex flex-col bg-gray-100 xsz:rounded-md">

                {/* Initial Form for retriving data from the user */}
                <form className="flex flex-col items-centerc xsz:gap-3 xsz:py-4 xsz:px-5">

                    {/* Input Retrieving Elements */}
                    <label htmlFor="userText" className="font-inter font-semibold text-secondary/80 xsz:text-sm"> Enter text to analyze : </label>
                    <textarea name="userText" id="userText" rows="4" cols="40" className="bg-white text-indigo xsz:rounded-md lg:focus:rounded-xl focus:rounded-lg focus:border-indigo border-2 border-indigo/50 outline-none ease-in duration-100 resize-none xsz:px-3 xsz:py-2 xsz:text-sm font-inter font-medium" required></textarea>

                    {/* Getting Values through it */}
                    <div className="workFlow xsz:space-x-2">
                        <button type="button" className="analyseBtn bg-indigo/80 xsz:rounded-sm active:scale-95 lg:hover:scale-105 ease-in duration-100 xsz:px-3 xsz:py-1 font-inter font-medium text-white w-fit xsz:text-sm" onClick={analyseText}> Analyse Text </button>
                        <button type="reset" className="analyseBtn bg-indigo/80 xsz:rounded-sm active:scale-95 lg:hover:scale-105 ease-in duration-100 xsz:px-3 xsz:py-1 font-inter font-medium text-white w-fit xsz:text-sm"> Clear Text </button>
                    </div>
                </form>

            </div>

        </div>
    )
}
