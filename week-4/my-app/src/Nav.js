import React from 'react';
import { useState } from 'react';
import './Nav.css';

const Nav= () => {
    const [displayMode,setDisplayMode] = useState("")
    const showClick = () => {
        setDisplayMode("flex")
    }
    const closeClick = () => {
        setDisplayMode("")
    }
    return (
        <div className="nav">
            <div className="wrap">
                <div className="logo">
                    <p>Website Title / Logo</p>
                </div>
                <div className="items">
                    <div className="menu-btn" onClick={() => showClick()}><span></span></div>
                    <div className="menu-item" style={{display:displayMode}}>
                        <div className="cross" onClick={() => closeClick()}>X</div>
                        <div className="link">Item 1</div>
                        <div className="link">Item 2</div>
                        <div className="link">Item 3</div>
                        <div className="link">Item 4</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Nav;