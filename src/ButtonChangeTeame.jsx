import './ButtonChangeTeame.css'
import React, { useContext } from 'react';
import ThemeContext from './context/TeameContext';

function ButtonChangeTeame() {

    const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
    const { theme } = useContext(ThemeContext)

    return (

        <button className='button__change-teame' onClick={() => setIsDarkTheme(!isDarkTheme)}
            style={{
                backgroundColor: theme.backgroundColor,
                color: theme.textColor,
            }}
        >
            Тема
        </button>

    );
}

export default ButtonChangeTeame;