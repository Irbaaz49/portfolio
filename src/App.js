import React from 'react'
import Navbar from './components/Navbar';
import Section from './components/Section';
import Section2 from './components/Section2';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Final from './components/Final'

const App = () => {
  return (
   <>
    <Navbar />
    <Section />
    <Section2/>
    <Timeline/>
    <Projects/>
    <Contact style={{maringBottom:"10px"}}/>
    <Final/>
   </>

    
  )
}
export default App