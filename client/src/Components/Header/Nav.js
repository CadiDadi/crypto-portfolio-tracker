import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Ticker from './Ticker'
import logoNoBack from '../../img/logoNoBack.png'
import Axios from "axios";

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            fixed: "",
            background: "" 
        }
    }
    // componentDidMount(){
    //     window.addEventListener('scroll', this.handleScroll)
    // }
    // componentWillUnmount(){
    //     window.removeEventListener("scroll", this.handleScroll)
    // }
    // handleScroll = () =>{
    //     // 'Y' & 'z' axis, cannot separate from scroll and Index
    //     if(window.scrollY >= 10){
    //         this.setState({
    //             fixed: "fixed",
    //             background: "rgba(0,50,150,0.6)"
    //         })
    //     } else {
    //         this.setState({
    //             fixed: "",
    //             background: "" 
    //         })
    //     }
    // }
    render() {
        return (
            <div className="nav" style={{position: this.state.fixed, background: this.state.background, zIndex: 0}}>
                <Ticker />
                <h1><Link to="/" style={{ color: "white" }}><img className='logoNoBack' src={logoNoBack} alt="Logo" /></Link></h1>
                <ul className="nav-menus">
                    <li><Link to="/" style={{ color: "white" }}>Portfolio</Link></li>
                    <li><Link to="/charts" style={{ color: "white" }}>Charts</Link></li>
                    <li><Link to="/market" style={{ color: "white" }}>Market</Link></li>
                    <li><Link to="/news" style={{ color: "white" }}>News</Link></li>
                    {/* <li><Link to="/about" style={{ color: "white" }}>About</Link></li>
                    <li><Link to="/schedule" style={{ color: "white" }}>User</Link></li> */}
                </ul>
            </div>
        )
    }
}
export default Nav;