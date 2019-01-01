import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import logoNoBack from '../../img/logoNoBack.png'


class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            fixed: "",
            background: ""
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll)
    }
    handleScroll = () =>{
        // note scroll 'Y' (as in x & y axis??)
        if(window.scrollY >= 10){
            this.setState({
                fixed: "fixed",
                background: "rgba(1,1,1,0.7)"
            })
        } else {
            this.setState({
                fixed: "",
                background: "" 
            })
        }
    }
    render() {
        return (
            <div className="nav" style={{position: this.state.fixed, background: this.state.background, zIndex: 0}}>
                <h1><Link to="/" style={{ textDecoration: "none", color: "white" }}><img className='logoNoBack' src={logoNoBack} alt="Logo" /></Link></h1>
                <ul className="nav-menus">
                    <li><Link to="/" style={{ textDecoration: "none", color: "white" }}>Portfolio</Link></li>
                    <li><Link to="/charts" style={{ textDecoration: "none", color: "white" }}>Analysis</Link></li>
                    <li><Link to="/about" style={{ textDecoration: "none", color: "white" }}>About</Link></li>
                    <li><Link to="/schedule" style={{ textDecoration: "none", color: "white" }}>User</Link></li>
                </ul>
            </div>
        )
    }
}
export default Nav;