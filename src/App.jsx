import './App.css'
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

// all necessary pages are imported here
import Home from './pages/Home';

// componenets are imported here
import TypeTesting from './components/TypeTesting'

function App() {
  
  // defining the state for loading animation
  const [loading,setLoading] = useState(true);

  // placing animation for a particular time interval
  useEffect(() => {
    
    // variable as a timer for animation
    setTimeout(() => {
      setLoading(false)
    },5400);

  },[]);

  if(loading){
    return <div className="loader xsz:text-base lg:text-lg xl:text-2xl font-bold font-serif animate-pulse "> Sentiment is <TypeTesting /> </div>       // component containing loading animation
  }

  return (
    <>

      {/* leaving the space for the navbar here */}

      {/* Setting up the routes here regarding different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </>
  )
}

export default App
