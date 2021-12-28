import React from 'react'
import Navbar from './components/Navbar';
import Section from './components/Section';
import Section2 from './components/Section2';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {ParallaxProvider} from 'react-scroll-parallax';

const App = () => {
  return (
  
   <ParallaxProvider>
    <Navbar />
    <Section />
    <Section2/>
    <Timeline/>
    <Projects/>
    <Contact style={{maringBottom:"10px"}}/>
    </ParallaxProvider>
   

    
  )
}
export default App