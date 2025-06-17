import React from 'react'

export default function Connect() {
    return (
        <div className = "xsz:py-10 sm:py-12 lg:py-20 flex xsz:flex-col lg:flex-row items-center lg:justify-center xsz:gap-4" id = "connect">

            {/* First Block for sending Email Messages */}
            <div className="connectBlock flex flex-col items-start xsz:gap-3 lg:gap-5">

                {/* Heading of the Block */}
                <h3 className = "xsz:text-2xl lg:text-3xl font-poppins text-secondary/80 font-bold"> Send Us a <span className = "bg-gradient-to-br from-blue-500 to-pink-400 bg-clip-text text-transparent"> Message </span> </h3>

                {/* Form Block to send data from Client Side */}
                <form className = "flex flex-col items-start xsz:gap-3 md:gap-4">

                    {/* UserName with First & Last */}
                    <div className="userName flex xsz:flex-col lg:flex-row items-center xsz:gap-3 md:gap-4 lg:gap-5">

                        <div className="flex flex-col items-start xsz:gap-2">
                            <label htmlFor = "userFirstName" className = "xsz:text-[12px] font-inter font-medium text-secondary/70"> First Name </label>
                            <input type="text" name="userFirstName" id="userFirstName" className = "xsz:px-2 xsz:py-1 xsz:w-75 sm:w-100 lg:w-fit sm:px-3 sm:py-2 outline-none border-2 border-secondary/40 font-inter xsz:text-[12px] sm:text-sm xsz:rounded-md focus:border-secondary focus:rounded-lg ease-in duration-150" placeholder = "Your First Name" required />
                        </div>

                        <div className="flex flex-col items-start xsz:gap-2">
                            <label htmlFor = "userLastName" className = "xsz:text-[12px] font-inter font-medium text-secondary/70"> Last Name </label>
                            <input type="text" name="userLastName" id="userLastName" className = "xsz:px-2 xsz:py-1 xsz:w-75 sm:w-100 lg:w-fit sm:px-3 sm:py-2 outline-none border-2 border-secondary/40 font-inter xsz:text-[12px] sm:text-sm xsz:rounded-md focus:border-secondary focus:rounded-lg ease-in duration-150" placeholder = "Your Last Name" required />
                        </div>

                    </div>

                    {/* Email Address */}
                    <div className="userEmail flex flex-col items-start xsz:gap-2">

                        <div className="flex flex-col items-start xsz:gap-2">
                            <label htmlFor = "userEmail" className = "xsz:text-[12px] font-inter font-medium text-secondary/70"> Email Address </label>
                            <input type="email" name="userEmail" id="userEmail" className = "xsz:px-2 xsz:py-1 xsz:w-75 sm:w-100 lg:w-[470px] sm:px-3 sm:py-2 outline-none border-2 border-secondary/40 font-inter xsz:text-[12px] sm:text-sm xsz:rounded-md focus:border-secondary focus:rounded-lg ease-in duration-150" placeholder = "your.email@example.com" required />
                        </div>

                    </div>

                    {/* Company Name (Optional if have any) */}
                    <div className="userCompany flex flex-col items-start xsz:gap-2">

                        <div className="flex flex-col items-start xsz:gap-2">
                            <label htmlFor = "userCompany" className = "xsz:text-[12px] font-inter font-medium text-secondary/70"> Company Name (Optional) </label>
                            <input type="email" name="userCompany" id="userCompany" className = "xsz:px-2 xsz:py-1 xsz:w-75 sm:w-100 lg:w-[470px] sm:px-3 sm:py-2 outline-none border-2 border-secondary/40 font-inter xsz:text-[12px] sm:text-sm xsz:rounded-md focus:border-secondary focus:rounded-lg ease-in duration-150" placeholder = "Your Company Name" required />
                        </div>

                    </div>

                    {/* Subject for sending the Mail */}
                    <div className="userCompany flex flex-col items-start xsz:gap-2">

                        <div className="flex flex-col items-start xsz:gap-2">
                            <label htmlFor = "userCompany" className = "xsz:text-[12px] font-inter font-medium text-secondary/70"> Subject </label>
                            <select type="email" name="userCompany" id="userCompany" className = "xsz:px-2 xsz:py-1 xsz:w-75 sm:w-100 lg:w-[470px] sm:px-3 sm:py-2 outline-none border-2 border-secondary/40 font-inter xsz:text-[12px] sm:text-sm xsz:rounded-md focus:border-secondary focus:rounded-lg ease-in duration-150" placeholder = "Your Company Name" required> 
                                <option selected className = "border-none outline-none"> Select a Subject </option>
                                <option value="1" className = "border-0 outline-none"> General Enquiry </option>
                                <option value="2" className = "border-0 outline-none"> Request a Demo </option>
                                <option value="3" className = "border-0 outline-none"> Technical Support </option>
                                <option value="4" className = "border-0 outline-none"> Partnership Opportunity </option>
                                <option value="5" className = "border-0 outline-none"> Others </option>
                            </select>
                        </div>

                    </div>

                    {/* Message or Comment */}
                    <div className="userMessage flex flex-col items-start xsz:gap-2">

                        <div className="flex flex-col items-start xsz:gap-2">
                            <label htmlFor = "userMessage" className = "xsz:text-[12px] font-inter font-medium text-secondary/70"> Message </label>
                            <textarea name="userMessage" id="userMessage" className  = "xsz:px-2 xsz:py-1 xsz:w-75 sm:w-100 lg:w-[470px] sm:px-3 sm:py-2 outline-none border-2 border-secondary/40 font-inter xsz:text-[12px] sm:text-sm xsz:rounded-md focus:border-secondary focus:rounded-lg ease-in duration-150 resize-none" placeholder = "How we can Help you ?"></textarea>
                        </div>

                    </div>

                    {/* Confirmation Check */}
                    <div className="userConfirmation flex flex-col items-start xsz:gap-2">

                        <div className="flex flex-row items-center xsz:gap-2">
                            <input type="checkbox" name="userConfirmation" id="userConfirmation" className = "xsz:w-fit cursor-pointer sm:px-3 sm:py-2 outline-none border-2 border-secondary/40 font-inter xsz:text-[12px] sm:text-sm xsz:rounded-md focus:border-secondary focus:rounded-lg ease-in duration-150" placeholder = "Your Company Name" required />
                            <label htmlFor = "userConfirmation" className = "xsz:text-[12px] font-inter font-medium text-secondary/70 xsz:w-70 sm:w-100"> I agree to receive communications from SentiSense. We respect your privacy and you can unsubscribe at any time. </label>
                        </div>

                    </div>

                    {/* Button for submitting the Request */}
                    <div className="buttons flex flex-row items-center justify-start xsz:gap-3 sm:gap-4 lg:gap-5">
                        <button type = "submit" className = "xsz:px-3 xsz:py-2 xsz:shadow-none cursor-pointer active:scale-95 lg:hover:scale-105 ease-in duration-150 lg:hover:lg:rounded-lg lg:hover:shadow-lg xsz:rounded-md bg-linear-to-br from-[#3b81f5] to-[#9234ea] text-white font-poppins xsz:text-sm sm:text-base font-medium"> Send Message </button>
                        <button type = "reset" className = "xsz:px-3 xsz:py-2 xsz:shadow-none cursor-pointer active:scale-95 lg:hover:scale-105 ease-in duration-150 lg:hover:lg:rounded-lg lg:hover:shadow-lg xsz:rounded-md bg-linear-to-br from-[#3b81f5] to-[#9234ea] text-white font-poppins xsz:text-sm sm:text-base font-medium"> Clear All </button>
                    </div>

                </form>

            </div>

        </div>
    )
}
