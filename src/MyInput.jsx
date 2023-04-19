
import './MyInput.css'
import ThemeContext from './context/TeameContext';
import { useContext } from 'react';


function MyInput({...props}) {

    const { theme } = useContext(ThemeContext);

    return (
        <input {...props} className='input'
        style={{
            backgroundColor: theme.backgroundColor,
            color: theme.textColor,
          }}
        />
    );
}

export default MyInput;