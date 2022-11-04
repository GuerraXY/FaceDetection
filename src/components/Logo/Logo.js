import React from "react";
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './brain.png'

const Logo = () => {
    return (
        <div className="pa4">
            <div className="logo pa4">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner">
                <img style={{paddingTop: '25px'}} alt='logo' src={brain}></img>
            </div>
        </Tilt>
        </div>
        </div>  
    )
}

export default Logo;