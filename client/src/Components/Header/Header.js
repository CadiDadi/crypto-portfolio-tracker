import React from "react";
import Nav from "./Nav"
// import Ticker from './Ticker'
import "./Header.css"
import whiteLong from '../../img/whiteLong.png'

const Header = () => {
    return(
        <div className = "header">
            {/* <Ticker /> */}
            <Nav />
            <div className ="header-theme">
                <div className='whiteLong'>
                    <img className='whiteLong1' src={whiteLong} alt="Logo" />
                </div>
            </div>
        </div>
    )
}
export default Header;