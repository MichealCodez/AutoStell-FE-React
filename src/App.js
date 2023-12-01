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
        <div className='page-content'>
          <Hero onClickJoin={toggleOpenBottomSheet}/>
          <div className='top-text'>
            <h2>Introduction To Autostell</h2>
            <p>In today's fast-paced world, buying and selling cars often involves cumbersome processes, lack of transparency, and limited access to reliable automobile services. Additionally, car owners frequently face challenges in finding skilled repairers and engineers to address their specific automotive issues. There is a pressing need for a comprehensive online platform that seamlessly connects buyers and sellers, while also providing a convenient and trustworthy avenue for individuals to access qualified automobile repairers and engineers. Autostell has prioritize user experience, security, and efficient communication channels, ensuring a hassle-free experience for all parties involved in the automobile trading and repair processes. Addressing these pain points will not only enhance the overall car trading experience but also foster a community where automotive enthusiasts can connect, share knowledge, and find tailored solutions for their automobile-related needs</p>
          </div>
          {contentData.map((item, index) => {
            if (index === 4) {
              return (
                <>
                  <CenterCard onClickJoin={toggleOpenBottomSheet} />
                  <CardRight key={index} content={item} onClickJoin={toggleOpenBottomSheet}/>;
                </>
              )
            }

            if (index % 2 === 0) {
              return <CardRight key={index} content={item} onClickJoin={toggleOpenBottomSheet}/>;
            } else {
              return <CardLeft key={index} content={item} onClickJoin={toggleOpenBottomSheet}/>;
            }
          })}

        </div>
        <FooterCard />
        <Footer />
        <BottomSheet isOpen={isOpen} toggleCloseBottomSheet={toggleCloseBottomSheet} toggleBottomSheet={toggleBottomSheet}/>
      </div>
    </div>
  );
}

export default App;
