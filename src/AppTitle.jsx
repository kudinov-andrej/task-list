import './AppTitle.css';
import ThemeContext from './context/TeameContext';
import { useContext } from 'react';

function AppTitle(props) {

  const { theme } = useContext(ThemeContext);
  
  return (    
      <h2 className='app__title'
      style={{
        color: theme.textColor,
      }}
      >{props.title}</h2>
  );
}

export default AppTitle;