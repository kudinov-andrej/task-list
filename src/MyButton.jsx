import React from 'react';
import './MyButton.css'
import { ReactComponent as ButtonAdd } from './image/add-circle-svgrepo-com.svg';



function MyButton({ ...props }) {


    return (
        <ButtonAdd {...props} type='submit' className="button"
        ></ButtonAdd>
    );
}

export default MyButton;