import React, { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Alert from './Alert';

export default function Connect(props) {

    // defining use state for alert component
    const [alert, setAlert] = useState({
        show: false,
        type: 'Success',
        message: "Message sent Successfully !",
    })

    // defining the variables for setting the values
    const [userName, setuserName] = useState({
        first: '',
        second: ''
    });


    /**
    |--------------------------------------------------
    | Details regarding different things to be send to the user
    |--------------------------------------------------
    */

    const [userEmail, setuserEmail] = useState('');
    const [userCompany, setuserCompany] = useState('');
    const [userIssue, setuserIssue] = useState('');
    const [userMessage, setuserMessage] = useState('');

    // details regarding different ids that are included in the 
    const serviceID = "service_krg6g4p";
    const templateIDAR = "template_qspowuq";
    const templateIDCU = "template_zjunc5g";
    const publicKey = "A_V7bsyGUneA_J-1V";

    // method for clearing all the data's value
    const clearAllData = () => {
        let blankData = '';

        // clear data code
        setuserName({ first: blankData, second: blankData });
        [setuserEmail, setuserCompany, setuserIssue, setuserMessage].forEach(setter => setter(blankData));
    }

    // method regarding sending the details to the specified mail
    const handleSubmit = (e) => {
        e.preventDefault();                                             // preventing the default reload of the page

        // checking if one user have already send an email
        const lastCheck = localStorage.getItem("emailData");

        // sound effect
        props.sound();

        if (document.querySelector("#userConfirmation").value === "on" && !lastCheck) {

            // object to be passed when creating a dynamic changes onSubmit
            const templateParams = {
                to_email: userEmail,
                from_name: `${userName.first} ${userName.second}`,
                from_site: 'SentiScan Org',
                user_company: userCompany,
                user_issue: userIssue,
                user_message: userMessage
            }

            // mail to be send over to the owner regarding new user request
            emailjs.send(serviceID, templateIDCU, templateParams, publicKey).then(() => {
                clearAllData();
            }).catch(() => {
                setAlert({ show: true, type: "Warning", message: "Error in sending credentials !" });

                // timer for the alert component
                setTimeout(() => {
                    setAlert(prev => ({ ...prev, show: false}));
                }, 2500);
            })

            // mail to be send to the user that we have recieved his/her request
            emailjs.send(serviceID, templateIDAR, templateParams, publicKey).then(() => {
                setAlert({ show: true, type: "Success", message: "Thanks for sending Feedback !" });

                // timer to close the message box
                setTimeout(() => {
                    setAlert(prev => ({ ...prev, show: false}));
                }, 2500);

            }).catch(() => {
                setAlert({ show: true, type: "Warning", message: "Error in getting Data !" });

                // timer to be stopped after the warning
                setTimeout(() => {
                    setAlert(prev => ({ ...prev, show: false}));
                }, 2500);
            })

            // setting data in the localstorage for not allowing user to send multiple emails
            localStorage.setItem("emailData", JSON.stringify({ userData: "sentSuccess" }));
        }

        else {
            setAlert({ show: true, type: "Warning", message: "Wrong Credentials or already filled !" });
            clearAllData();

            // timer for the alert component
            setTimeout(() => {
                setAlert(prev => ({ ...prev, show: false}));
            }, 2500);

            return
        }

    }

    return (
        <div className="xsz:py-10 sm:py-12 lg:py-20 flex xsz:flex-col lg:flex-row xsz:items-center lg:items-start lg:justify-center xsz:gap-7 md:gap-9 lg:gap-14 xl:gap-20" id="connect">

            <Alert alert={alert} />

            {/* First Block for sending Email Messages */}
            <div className="connectBlock flex flex-col items-start xsz:gap-3 lg:gap-5">

                {/* Heading of the Block */}
                <h3 className="xsz:text-2xl lg:text-3xl font-poppins text-secondary/80 font-bold"> Send Us a <span className="bg-gradient-to-br from-blue-500 to-pink-400 bg-clip-text text-transparent"> Message </span> </h3>

                {/* Form Block to send data from Client Side */}
                <form className="flex flex-col items-start xsz:gap-3 md:gap-4" onSubmit={handleSubmit}>

                    {/* UserName with First & Last */}
                    <div className="userName flex xsz:flex-col lg:flex-row items-center xsz:gap-3 md:gap-4 lg:gap-5">

                        <div className="flex flex-col items-start xsz:gap-2">
                            <label htmlFor="userFirstName" className="xsz:text-[12px] font-inter font-medium text-secondary/70"> First Name </label>
                            <input type="text" name="userFirstName" value={userName.first} id="userFirstName" className="xsz:px-2 xsz:py-1 xsz:w-75 sm:w-100 lg:w-fit sm:px-3 sm:py-2 outline-none border-2 border-secondary/40 font-inter xsz:text-[12px] sm:text-sm xsz:rounded-md focus:border-secondary focus:rounded-lg ease-in duration-150" placeholder="Your First Name" required
                                onChange={(e) => setuserName(prev => ({ ...prev, first: e.target.value }))} />
                        </div>

                        <div className="flex flex-col items-start xsz:gap-2">
                            <label htmlFor="userLastName" className="xsz:text-[12px] font-inter font-medium text-secondary/70"> Last Name </label>
                            <input type="text" name="userLastName" id="userLastName" value={userName.second} className="xsz:px-2 xsz:py-1 xsz:w-75 sm:w-100 lg:w-fit sm:px-3 sm:py-2 outline-none border-2 border-secondary/40 font-inter xsz:text-[12px] sm:text-sm xsz:rounded-md focus:border-secondary focus:rounded-lg ease-in duration-150" placeholder="Your Last Name" required
                                onChange={(e) => setuserName(prev => ({ ...prev, second: e.target.value }))} />
                        </div>

                    </div>

                    {/* Email Address */}
                    <div className="userEmail flex flex-col items-start xsz:gap-2">

                        <div className="flex flex-col items-start xsz:gap-2">
                            <label htmlFor="userEmail" className="xsz:text-[12px] font-inter font-medium text-secondary/70"> Email Address </label>
                            <input type="email" name="userEmail" id="userEmail" value={userEmail} className="xsz:px-2 xsz:py-1 xsz:w-75 sm:w-100 lg:w-[470px] sm:px-3 sm:py-2 outline-none border-2 border-secondary/40 font-inter xsz:text-[12px] sm:text-sm xsz:rounded-md focus:border-secondary focus:rounded-lg ease-in duration-150" placeholder="your.email@example.com" required
                                onChange={(e) => setuserEmail(e.target.value)} />
                        </div>

                    </div>

                    {/* Company Name (Optional if have any) */}
                    <div className="userCompany flex flex-col items-start xsz:gap-2">

                        <div className="flex flex-col items-start xsz:gap-2">
                            <label htmlFor="userCompany" className="xsz:text-[12px] font-inter font-medium text-secondary/70"> Company Name (Optional) </label>
                            <input type="text" name="userCompany" id="userCompany" value={userCompany} className="xsz:px-2 xsz:py-1 xsz:w-75 sm:w-100 lg:w-[470px] sm:px-3 sm:py-2 outline-none border-2 border-secondary/40 font-inter xsz:text-[12px] sm:text-sm xsz:rounded-md focus:border-secondary focus:rounded-lg ease-in duration-150" placeholder="Your Company Name"
                                onChange={(e) => setuserCompany(e.target.value !== '' ? e.target.value : 'Not available')} />
                        </div>

                    </div>

                    {/* Subject for sending the Mail */}
                    <div className="userCompany flex flex-col items-start xsz:gap-2">

                        <div className="flex flex-col items-start xsz:gap-2">
                            <label htmlFor="userIssue" className="xsz:text-[12px] font-inter font-medium text-secondary/70"> Subject </label>
                            <select name="userIssue" id="userIssue" value={userIssue} className="xsz:px-2 xsz:py-1 xsz:w-75 sm:w-100 lg:w-[470px] sm:px-3 sm:py-2 outline-none border-2 border-secondary/40 font-inter xsz:text-[12px] sm:text-sm xsz:rounded-md focus:border-secondary focus:rounded-lg ease-in duration-150" placeholder="Your Company Name" required
                                onChange={(e) => setuserIssue(e.target.value)}>
                                <option value="Select a Subject" className="border-none outline-none"> Select a Subject </option>
                                <option value="General Enquiry" className="border-0 outline-none"> General Enquiry </option>
                                <option value="Request a Demo" className="border-0 outline-none"> Request a Demo </option>
                                <option value="Technical Support" className="border-0 outline-none"> Technical Support </option>
                                <option value="Partnership Opportunity" className="border-0 outline-none"> Partnership Opportunity </option>
                                <option value="Others" className="border-0 outline-none"> Others </option>
                            </select>
                        </div>

                    </div>

                    {/* Message or Comment */}
                    <div className="userMessage flex flex-col items-start xsz:gap-2">

                        <div className="flex flex-col items-start xsz:gap-2">
                            <label htmlFor="userMessage" className="xsz:text-[12px] font-inter font-medium text-secondary/70"> Message </label>
                            <textarea name="userMessage" id="userMessage" value={userMessage} className="xsz:px-2 xsz:py-1 xsz:w-75 sm:w-100 lg:w-[470px] sm:px-3 sm:py-2 outline-none border-2 border-secondary/40 font-inter xsz:text-[12px] sm:text-sm xsz:rounded-md focus:border-secondary focus:rounded-lg ease-in duration-150 resize-none" placeholder="How we can Help you ?" required
                                onChange={(e) => setuserMessage(e.target.value)}>
                            </textarea>
                        </div>

                    </div>

                    {/* Confirmation Check */}
                    <div className="userConfirmation flex flex-col items-start xsz:gap-2">

                        <div className="flex flex-row items-center xsz:gap-2">
                            <input type="checkbox" name="userConfirmation" id="userConfirmation" className="xsz:w-fit cursor-pointer sm:px-3 sm:py-2 outline-none border-2 border-secondary/40 font-inter xsz:text-[12px] sm:text-sm xsz:rounded-md focus:border-secondary focus:rounded-lg ease-in duration-150" placeholder="Your Company Name" required />
                            <label htmlFor="userConfirmation" className="xsz:text-[12px] font-inter font-medium text-secondary/70 xsz:w-70 sm:w-100"> I agree to receive communications from SentiSense. We respect your privacy and you can unsubscribe at any time. </label>
                        </div>

                    </div>

                    {/* Button for submitting the Request */}
                    <div className="buttons flex flex-row items-center justify-start xsz:gap-3 sm:gap-4 lg:gap-5">
                        <button type="submit" className="xsz:px-3 xsz:py-2 xsz:shadow-none cursor-pointer active:scale-95 hover:scale-105 ease-in duration-100 lg:hover:lg:rounded-lg lg:hover:shadow-lg xsz:rounded-md bg-linear-to-br from-[#3b81f5] to-[#9234ea] text-white font-poppins xsz:text-sm sm:text-base font-medium"> Send Message </button>
                        <button type="button" className="xsz:px-3 xsz:py-2 xsz:shadow-none cursor-pointer active:scale-95 hover:scale-105 ease-in duration-100 lg:hover:lg:rounded-lg lg:hover:shadow-lg xsz:rounded-md bg-linear-to-br from-[#3b81f5] to-[#9234ea] text-white font-poppins xsz:text-sm sm:text-base font-medium" onClick={clearAllData}> Clear All </button>
                    </div>
                </form>

            </div>

            {/* Contact Related Information */}
            <div className="contactInfo flex flex-col items-start xsz:gap-4 lg:gap-5 xsz:px-3">

                {/* Heading of Contact related Information */}
                <h3 className="xsz:text-2xl lg:text-3xl font-poppins text-secondary/80 font-bold"> Contact <span className="bg-gradient-to-br from-blue-500 to-pink-400 bg-clip-text text-transparent"> Information </span> </h3>

                {/* Contact Links */}
                <div className="contactDetails flex flex-col xsz:gap-4 lg:gap-6">

                    {/* Phone or Contact Details */}
                    <div className="flex flex-row items-start xsz:gap-4 bg-blue-100 xsz:px-3 xsz:py-2 xsz:rounded-md lg:rounded-lg lg:hover:shadow-lg lg:hover:rounded-xl lg:hover:translate-y-1 ease-in duration-150 cursor-pointer">
                        <Phone className="xsz:w-9 xsz:h-9 xsz:p-2 bg-blue-200 text-blue-500 xsz:rounded-lg" />
                        <div className="flex flex-col xsz:gap-1 items-start">
                            <h3 className="xsz:text-base font-inter font-semibold text-secondary/80"> Phone </h3>
                            <p className="xsz:text-sm font-inter font-medium text-secondary/80">
                                Our support team is available Mon-Fri, 9am-5pm.
                            </p>
                            <h4 className="xsz:text-sm text-blue-500 font-inter font-medium"> +91-8130621593 </h4>
                        </div>
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-row items-start xsz:gap-4 bg-violet-100 xsz:px-3 xsz:py-2 xsz:rounded-md lg:rounded-lg lg:hover:shadow-lg lg:hover:rounded-xl lg:hover:translate-y-1 ease-in duration-150 cursor-pointer">
                        <Mail className="xsz:w-9 xsz:h-9 xsz:p-2 bg-violet-200 text-violet-500 xsz:rounded-lg" />
                        <div className="flex flex-col xsz:gap-1 items-start">
                            <h3 className="xsz:text-base font-inter font-semibold text-secondary/80"> Email </h3>
                            <p className="xsz:text-sm font-inter font-medium text-secondary/80">
                                We'll respond to your inquiry within 24 hours
                            </p>
                            <h4 className="xsz:text-sm text-violet-500 font-inter font-medium"> abhaych335@gmail.com </h4>
                        </div>
                    </div>

                    {/* Office Address */}
                    <div className="flex flex-row items-start xsz:gap-4 bg-green-100 xsz:px-3 xsz:py-2 xsz:rounded-md lg:rounded-lg lg:hover:shadow-lg lg:hover:rounded-xl lg:hover:translate-y-1 ease-in duration-150 cursor-pointer">
                        <MapPin className="xsz:w-9 xsz:h-9 xsz:p-2 bg-green-200 text-green-500 xsz:rounded-lg" />
                        <div className="flex flex-col xsz:gap-1 items-start">
                            <h3 className="xsz:text-base font-inter font-semibold text-secondary/80"> Nearby Centre </h3>
                            <p className="xsz:text-sm font-inter font-medium text-secondary/80">
                                C4 - Janakpuri, New Delhi
                            </p>
                            <h4 className="xsz:text-sm text-green-500 font-inter font-medium"> Delhi, New Delhi - 45 </h4>
                        </div>
                    </div>

                </div>

                {/* Connection Block from different Social Media Icons */}
                <div className="flex flex-col items-start xsz:gap-2 lg:gap-4">

                    {/* Connection Heading for Social Media Links */}
                    <h3 className="font-poppins xsz:text-lg lg:text-xl text-secondary/90 xsz:font-semibold lg:font-bold lg:text-secondary/80"> Connect With Us </h3>

                    {/* Social Media Icon's Links */}
                    <div className="iconsLinks flex flex-row items-center xsz:gap-3 lg:gap-4">

                        {/* Twitter */}
                        <a href="https://x.com/AbhayCh84760" className="bg-blue-200 text-blue-600 xsz:p-2 lg:p-3 xsz:rounded-full lg:hover:bg-blue-600 lg:hover:text-white ease-in duration-150" target="_blank" onClick={props.sound}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter-x xsz:w-5 ease-in duration-150" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                            </svg>
                        </a>

                        {/* LinkdIn */}
                        <a href="https://www.linkedin.com/in/abhaychaudhary335/" className="bg-blue-200 text-blue-600 xsz:p-2 lg:p-3 xsz:rounded-full lg:hover:bg-blue-600 lg:hover:text-white ease-in duration-150" target="_blank" onClick={props.sound}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin xsz:w-5 ease-in duration-150" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a href="https://www.instagram.com/being_chaudhary.ig/" className="bg-blue-200 text-blue-600 xsz:p-2 lg:p-3 xsz:rounded-full lg:hover:bg-blue-600 lg:hover:text-white ease-in duration-150" target="_blank" onClick={props.sound}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-instagram xsz:w-5 ease-in duration-150" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg>
                        </a>

                        {/* Facebook */}
                        <a href="https://www.facebook.com/coding.needs/" className="bg-blue-200 text-blue-600 xsz:p-2 lg:p-3 xsz:rounded-full lg:hover:bg-blue-600 lg:hover:text-white ease-in duration-150" target="_blank" onClick={props.sound}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-facebook xsz:w-5 ease-in duration-150" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg>
                        </a>

                    </div>

                </div>

            </div>

        </div>
    )
}
