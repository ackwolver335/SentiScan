import React from 'react'

export default function Alert(props) {

    return (
        <div className={`alertComp ${props.alert.show ? 'aboutIntro' : 'hidden'} fixed bg-white/80 backdrop-blur-lg xsz:rounded-md border-2 border-secondary/80 lg:rounded-lg xl:rounded-xl xsz:py-2 xsz:px-3 md:px-4 xsz:top-20 sm:top-24 xsz:w-fit xsz:shadow-md lg:shadow-xl ease-in duration-150`}>

            {/* Main Content starts here */}
            <div className="flex flex-row items-center justify-center xsz:gap-2 md:gap-3 xl:gap-4">

                {/* Condition for first component */}
                {props.alert.type === "Success" ?

                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check-circle-fill xsz:w-5 text-green-500" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>

                    :

                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-exclamation-diamond-fill xsz:w-5 text-red-500" viewBox="0 0 16 16">
                        <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>

                }

                {/* alert Warning Message */}
                {props.alert.type === "Success" ?
                
                    <p className = "xsz:text-sm font-inter font-medium xl:text-base text-green-500">
                        {props.alert.message}
                    </p>

                    :

                    <p className = "xsz:text-sm font-inter font-medium xl:text-base text-red-500">
                        {props.alert.message}
                    </p>
                
                }

            </div>

        </div >
    )
}
