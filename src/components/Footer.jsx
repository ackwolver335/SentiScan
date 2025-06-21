import { FileText } from 'lucide-react'
import { Link } from 'react-router-dom';

export default function Footer(props) {

    // button sound when get clicked
    const clickBtn = new Audio(props.sound);
    clickBtn.preload = 'auto';
    clickBtn.volume = '0.5';                    // volumne adjusted to 60%

    // method for using it
    const getSound = () => {
        clickBtn.play();
    }

    return (
        <div className="bg-darkBG xsz:py-6 xsz:px-5 md:px-8 md:py-6 xl:px-12 xl:py-8 flex flex-col justify-between xsz:gap-5">

            {/* First Block regarding Intro & Links */}
            <div className="firstBlock flex xsz:flex-col md:flex-row justify-between xsz:gap-5">

                {/* Heading & Intro Block */}
                <div className="headindIcon flex flex-col items-start xsz:gap-2 xl:gap-4">

                    <div className="flex flex-row items-center xsz:gap-2">
                        <FileText className="xsz:w-6 xsz:h-6 xl:w-8 xl:h-8 text-indigo" />
                        <h3 className="xsz:text-xl xl:text-2xl text-indigo font-poppins font-semibold"> SentiScan </h3>
                    </div>

                    <p className="xsz:text-sm xl:text-base font-inter xsz:text-white/50 lg:text-white/80 font-medium">
                        Transforming text into actionable insights through advanced sentiment analysis.
                    </p>

                </div>

                {/* Further Pages redirection */}
                <div className="lists flex xsz:flex-col md:flex-row xsz:items-start xsz:gap-5 md:gap-12">

                    {/* Documentation & Resources */}
                    <div className="detailsView flex flex-col items-start justify-between xsz:gap-2">
                        <h2 className="text-white/70 font-inter font-semibold xl:text-lg"> Docs & Resources </h2>
                        <ul className="flex flex-col xsz:gap-1 items-start">
                            <a href="#features" className="xsz:text-sm xl:text-base text-white/60 font-inter lg:hover:text-white ease-in duration-150"> <li> Features </li> </a>
                            <a href="#useCases" className="xsz:text-sm xl:text-base text-white/60 font-inter lg:hover:text-white ease-in duration-150"> <li> UseCases </li> </a>
                            <a href="# onClick={getSound}" className="xsz:text-sm xl:text-base text-white/60 font-inter lg:hover:text-white ease-in duration-150"> <li> Guides </li> </a>
                            <a href="# onClick={getSound}" className="xsz:text-sm xl:text-base text-white/60 font-inter lg:hover:text-white ease-in duration-150"> <li> Support </li> </a>
                        </ul>
                    </div>

                    {/* Connections */}
                    <div className="detailsView flex flex-col items-start justify-between xsz:gap-2">
                        <h2 className="text-white/70 font-inter xl:text-lg font-semibold"> Get Connections </h2>
                        <ul className="flex flex-col xsz:gap-1 items-start">
                            <Link to="/about" className="xsz:text-sm text-white/60 font-inter xl:text-base lg:hover:text-white ease-in duration-150" onClick={getSound}> About </Link>
                            <Link to="/contact" className="xsz:text-sm text-white/60 font-inter xl:text-base lg:hover:text-white ease-in duration-150" onClick={getSound}> Contact </Link>
                        </ul>
                    </div>

                </div>

            </div>

            {/* Distributing Line regarding Further different Links */}
            <div className="xsz:h-[1px] w-full xsz:rounded-md bg-white/70"></div>

            <div className="lastNavigation flex xsz:flex-col sm:flex-row-reverse xsz:items-start sm:items-center sm:justify-between xsz:gap-4">

                {/* Icons Block */}
                <div className="flex flex-row xsz:gap-4 xl:gap-5 items-center">

                    <a href="https://x.com/AbhayCh84760" target = "_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter-x xsz:w-5 xl:w-6 active:scale-95 lg:hover:scale-105 text-white/70 lg:hover:text-white ease-in duration-150" viewBox="0 0 16 16"  onClick={getSound}>
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/abhaychaudhary335/" target = "_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin xsz:w-5 xl:w-6 active:scale-95 lg:hover:scale-105 text-white/70 lg:hover:text-white ease-in duration-150" viewBox="0 0 16 16"  onClick={getSound}>
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                    </a>

                    <a href="https://github.com/ackwolver335" target = "_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github xsz:w-5 xl:w-6 active:scale-95 lg:hover:scale-105 text-white/70 lg:hover:text-white ease-in duration-150" viewBox="0 0 16 16"  onClick={getSound}>
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                    </a>

                </div>

                {/* EndLine regarding Copyright Reservation */}
                <p className = "text-white/70 font-inter xsz:text-sm xl:text-base">
                    &#169; 2025 SentiScan. All rights reserved.
                </p>

            </div>

        </div>
    )
}
