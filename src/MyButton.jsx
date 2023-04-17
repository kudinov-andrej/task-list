import React from 'react';
import './MyButton.css'


function MyButton({...props}) {

    return (
        <button {...props} className='button' type='submit'>
           
        </button>
    );
}

export default MyButton;