import React from "react";
// import Nav from "./Nav"
import "./Footer.css"
import whiteLong from '../../img/whiteLong.png'

const Footer = () => {
    return(
        <div className = "footer">
            {/* <Nav /> */}
            <div className ="footer-theme">
                <div className='whiteLongFooter'>
                    <img className='whiteLong1' src={whiteLong} alt="Logo" />
                </div>
            </div>
        </div>
    )
}
export default Footer