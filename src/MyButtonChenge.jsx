import React from 'react';
import './MyButtonChenge.css'


function MyButtonChenge({...props}) {

    return (
        <button {...props} className='button button__change' type='submit'
      
        >
        </button>
    );
}

export default MyButtonChenge;