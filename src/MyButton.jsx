import React from 'react';
import { useContext } from 'react';
import './MyButton.css'
import { ReactComponent as ButtonAdd } from './image/add-circle-svgrepo-com.svg';
import ThemeContext from "./context/TeameContext";


function MyButton({ ...props }) {
    const { theme } = useContext(ThemeContext)

    return (
        <ButtonAdd {...props} type='submit' className="button"
        ></ButtonAdd>
    );
}

export default MyButton;