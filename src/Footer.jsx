import './Footer.css';
import React, { useState, useEffect } from "react";

  

function Footer() {
    
    const [date, setDate] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setDate(new Date());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);

  return ( 
      <footer className='footer' >
        <p className='footer__avtor'>Web-разработчик: Кудинов Андрей</p>
        < p className='footer__data'>Текущая дата: {date.toLocaleString()}</p>
      </footer> 
  );
}

export default Footer;