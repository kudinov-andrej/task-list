import React from 'react';
import './MyButtonChenge.css'
import { ReactComponent as ButtonAdd } from './image/add-square-svgrepo-com.svg';

function MyButtonChenge({...props}) {

    return (
        <button {...props} className='button button__change' type='submit'
      
        >
        </button>
    );
}

export default MyButtonChenge;