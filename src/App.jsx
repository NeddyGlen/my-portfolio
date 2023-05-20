//import styled from './styled-components'
import React from 'react'
import './App.css';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Resume from './components/Resume';


function App() {
  return (
    <header class="header" id="header">
      <div className="App">
      <ul class="nav__list">
                    <div className='web'><li class="nav__item"><a href="App" class="nav__link"> Web Master</a></li></div>
                    <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                    <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
                    <li class="nav__item"><a href="#resume" class="nav__link">Resume</a></li>
                    </ul>
     <About/>
     <ContactUs/>
     <Resume/>
    </div></header>
    
  );
}

export default App;
