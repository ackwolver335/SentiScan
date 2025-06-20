import React, { useState } from 'react'

export default function Clock() {

    // time variable for setting time
    const [time, setTime] = useState({
        hours: '',
        minutes: '',
        meridian: ''
    });

    setInterval(() => {
        let date = new Date();
        let hour = date.getHours();
        setTime({
            hours: hour > 12 ? date.getHours() - 12 : date.getHours(),
            minutes: date.getMinutes(),
            meridian: hour > 12 ? 'PM' : 'AM'
        });
    }, 1000);

    // onClick Method for getting time
    const checkTime = () => {
        document.querySelector(".digiClock").classList.toggle("xsz:translate-x-26");

        // timeout after which it automatically get aside
        setTimeout(() => {
            document.querySelector(".digiClock").classList.add("xsz:translate-x-26");
        },3000);
    }

    return (
        <div className="digiClock fixed bg-indigo/70 backdrop-blur-lg xsz:rounded-md lg:rounded-xl xsz:px-3 xsz:py-2 sm:py-3 xsz:translate-x-26 xsz:bottom-15 lg:bottom-30 right-0 flex flex-row items-center xsz:gap-3 ease-in duration-150">

            {/* Clock Icon to click and get time */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-alarm xsz:w-5 lg:w-6 cursor-pointer text-white xsz:mr-4 lg:mr-1" viewBox="0 0 16 16" onClick={checkTime}>
                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z" />
                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1" />
            </svg>

            {/* time fetched as per your device */}
            <h3 className="xsz:text-sm lg:text-base font-poppins font-semibold text-white">
                {time.hours} : {time.minutes} : {time.meridian}
            </h3>

        </div>
    )
}
