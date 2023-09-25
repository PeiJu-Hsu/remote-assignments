import React, { useState} from 'react';
import './Header.css';


const Header= () => {
    const [title, setTitle]=useState('Welcome Message'); 
    const changeTitle = () => {
        if (title === 'Welcome Message') {
            setTitle('Have a Good Day!')
        } else {
            setTitle('Welcome Message')
        }
        
    }
    return(
        <div className="header" onClick={changeTitle}>
            <h1 id="headerTitle">{title}</h1>
        </div>
    )
}
export default Header
