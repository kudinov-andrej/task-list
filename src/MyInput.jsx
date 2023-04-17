
import './MyInput.css'
//import { useState } from 'react';


function MyInput({...props}) {

    return (
        <input {...props} className='input'/>
    );
}

export default MyInput;