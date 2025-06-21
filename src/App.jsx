import './App.css'
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

// all necessary pages are imported here
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'

// importing the required sound effect
import clickSound from './assets/audio.mp3'

// componenets are imported here
import TypeTesting from './components/TypeTesting'
import Footer from './components/Footer';

function App() {

    // button sound when get clicked
    const clickBtn = new Audio(clickSound);
    clickBtn.preload = 'auto';
    clickBtn.volume = '0.5';                    // volumne adjusted to 60%

    // method for using it
    const getSound = () => {
        clickBtn.currentTime = 0;               // rewind to start
        clickBtn.play();
    }

    // defining the state for loading animation
    const [loading, setLoading] = useState(true);

    // placing animation for a particular time interval
    useEffect(() => {

        // variable as a timer for animation
        setTimeout(() => {
            setLoading(false)
        }, 5000);

    }, []);

    if (loading) {
        return <div className="loader xsz:text-base lg:text-lg xl:text-2xl font-bold font-serif animate-pulse "> Sentiment is <TypeTesting /> </div>       // component containing loading animation
    }

    // hardcoding regarding the overall body animation and other effect
    document.querySelector('body').style.animation = "fadeIn 0.8s ease-in-out";
    document.querySelector('html').style.scrollbarColor = "#4f46e5 #ffffff";

    return (
        <>

            {/* Setting up the routes here regarding different pages */}
            <Routes>
                <Route path="/" element={<Home sound={getSound} />} />
                <Route path="/about" element={<About sound={getSound} />} />
                <Route path="/contact" element={<Contact sound={getSound} />} />
            </Routes>

            {/* Footer for further redirections */}
            <Footer sound={getSound} />

        </>
    )
}

export default App
