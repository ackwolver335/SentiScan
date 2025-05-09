import './App.css'
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

// all necessary pages are imported here
import Home from './pages/Home';

// componenets are imported here
import TypeTesting from './components/TypeTesting'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  
  // defining the state for loading animation
  const [loading,setLoading] = useState(true);

  // placing animation for a particular time interval
  useEffect(() => {
    
    // variable as a timer for animation
    setTimeout(() => {
      setLoading(false)
    },5300);

  },[]);

  if(loading){
    return <div className="loader xsz:text-base lg:text-lg xl:text-2xl font-bold font-serif animate-pulse "> Sentiment is <TypeTesting /> </div>       // component containing loading animation
  }

  // hardcoding regarding the overall body animation and other effect
  document.querySelector('body').style.animation = "fadeIn 0.8s ease-in-out";
  document.querySelector('html').style.scrollbarColor = "#4f46e5 #ffffff";

  return (
    <>

      {/* leaving the space for the navbar here */}
      <Navbar />

      {/* Setting up the routes here regarding different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* adding a footer now for further page redirection */}
      <Footer />

    </>
  )
}

export default App
