import logotip from './image/free-icon-branding-6979651.png';
import './Logo.css';
import React from 'react';
import ButtonChangeTeame from './ButtonChangeTeame'

function Logo() {


  
  return (
      <header className="App-header">
       <img className='header__logo' src={logotip} alt="логотип приложения"/>
       <ButtonChangeTeame />   
      </header>
  );
}

export default Logo;