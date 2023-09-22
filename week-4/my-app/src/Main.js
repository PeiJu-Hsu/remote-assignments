import React from 'react';
import { useState } from 'react';
import './Main.css';

const Main= () => {
    const [displayMode,setDisplayMode] = useState("none")
    const handleClick = () => {
        setDisplayMode("")
        }
    
    return(
        <div className="main">
            <div className="toptitle">
                <h2>Section Title</h2>
            </div>
            <div className="wrap">
                <div className="item">Content Box 1</div>
                <div className="item">Content Box 2</div>
                <div className="item">Content Box 3</div>
                <div className="item">Content Box 4</div>
            </div>
            <div className="bottom" onClick={() => handleClick() }>
                <p>Call to Action</p>
            </div>
            <div className="wraphide" style={{display:displayMode}}>
                <div className="item">Content Box 5</div>
                <div className="item">Content Box 6</div>
                <div className="item">Content Box 7</div>
                <div className="item">Content Box 8</div>
            </div>
        </div>
    )
}
export default Main
