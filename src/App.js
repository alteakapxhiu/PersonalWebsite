import React from 'react';
import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from './components/Carousel';
import NavBar from './components/NavBar'; 
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import { Certeficates } from './components/Certeficates';
import { Contact } from './components/Contact';
import PopupMessage from './components/PopUp';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Altea from './components/Altea';


function App() {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
    {showPopup && (
      <PopupMessage 
        message="Hello ! This Website was created using React !"
        onClose={handleClosePopup}
      />
    )}
    <div className="App">
      <NavBar  />
      <Altea />
      <Banner />
      <MyCarousel />
      <Projects />
      <Certeficates />
      <Education />
      <Experience />
      <Contact />
      <Footer />
      
      
     

    </div> </div>
  );
}

export default App;
