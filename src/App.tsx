import React from 'react';
import './styles/global.css';
import './styles/pages/landing.css'
import logoImg from './images/Logo.svg';


function App() {
  return (
    <div id="page-landing">
    <div className="content-wrapper"></div>
    <img src={logoImg} alt = "Happy"/>
       </div>
  );
}

export default App;
