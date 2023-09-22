import React from 'react';
import './Header.css';

const Header= () => {
    const titleNew = () => {document.getElementById('headerTitle').textContent = 'Have a Good Time!'}
    return(
        <div className="header" onClick={() => titleNew() }>
            <h1 id="headerTitle">Welcome Message</h1>
        </div>
    )
}
export default Header
