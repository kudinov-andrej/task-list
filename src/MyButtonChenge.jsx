import React from 'react';
import './MyButtonChenge.css'


function MyButtonChenge({...props}) {

    return (
        <button {...props} className='button' type='submit'>
           
        </button>
    );
}

export default MyButtonChenge;