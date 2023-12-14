import React, { useState } from 'react';
import CardLeft from './components/CardLeft';
import CardRight from './components/CardRight';
import Hero from './components/Hero';
import contentData from './content.json';
import './App.css';
import Footer from './components/js/Footer';
import FooterCard from './components/js/FooterCard';
import CenterCard from './components/js/CenterCard';
import BottomSheet from './components/js/BottomSheet'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBottomSheet = () => {
    setIsOpen(!isOpen);
  }

  const toggleOpenBottomSheet = () => {
    setIsOpen(true)
  }

  const toggleCloseBottomSheet = () => {
    setIsOpen(false)
  }


  return (
    <div className="App">
      <div className='container'>
        <Hero onClickJoin={toggleOpenBottomSheet} />
        <div className='page-content'>
          <div className='top-text'>
            <h2>Why Autostell?</h2>
            <p>Being a car enthusiast can be challenging at times, with difficulties in fixing automobile issues and selling cars. Autostell recognizes these issues and aims to provide a unified platform to address them. Think of it as a Stack Overflow for mechanics and a seamless marketplace for buying and selling cars. Autostell is committed to offering general solutions for various automobile problems.</p>
          </div>
          <div className='card-container'>
            {contentData.map((item, index) => {
              if (index === 4) {
                return (
                  <>
                    <CenterCard onClickJoin={toggleOpenBottomSheet} />
                    <CardRight key={index} content={item} onClickJoin={toggleOpenBottomSheet} />
                  </>
                )
              }

              if (index % 2 === 0) {
                return <CardRight key={index} content={item} onClickJoin={toggleOpenBottomSheet} />
              } else {
                return <CardLeft key={index} content={item} 
                onClickJoin={toggleOpenBottomSheet} />
              }
            })}

          </div>
        </div>
        <FooterCard />
        <Footer />
        <BottomSheet isOpen={isOpen} toggleCloseBottomSheet={toggleCloseBottomSheet} toggleBottomSheet={toggleBottomSheet} />
      </div>
    </div>
  );
}

export default App;
