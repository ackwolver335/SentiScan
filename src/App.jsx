import './App.css'
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

// all necessary pages are imported here
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'

// componenets are imported here
import TypeTesting from './components/TypeTesting'
import Footer from './components/Footer';

function App() {

    // defining the state for loading animation
    const [loading, setLoading] = useState(true);

    // placing animation for a particular time interval
    useEffect(() => {

        // variable as a timer for animation
        setTimeout(() => {
            setLoading(false)
        }, 4500);

    }, []);

    if (loading) {
        // return <div className="loader xsz:text-base lg:text-lg xl:text-2xl font-bold font-serif animate-pulse "> Sentiment is <TypeTesting /> </div>       // component containing loading animation
    }

    // hardcoding regarding the overall body animation and other effect
    document.querySelector('body').style.animation = "fadeIn 0.8s ease-in-out";
    document.querySelector('html').style.scrollbarColor = "#4f46e5 #ffffff";

    return (
        <>

            {/* Setting up the routes here regarding different pages */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            {/* Footer for further redirections */}
            {/* <Footer /> */}
            {/* Removing footer for a temporary time interval */}

        </>
    )
}

export default App
