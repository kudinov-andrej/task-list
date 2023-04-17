import logotip from './image/free-icon-branding-6979651.png';
import './Logo.css';

function Logo() {
  return (
      <header className="App-header">
       <img className='header__logo' src={logotip} alt="логотип приложения"/>   
      </header>
  );
}

export default Logo;