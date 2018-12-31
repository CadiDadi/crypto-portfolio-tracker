// import React, { Component } from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";

// const NavbarElement = () => {
//     return(
//         <div>
//         {/*Main Navigation*/}
//         <header>
//             <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
//             <a className="navbar-brand" href="#"><strong>Navbar</strong></a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon" />
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="/">Link</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Profile</a>
//                 </li>
//                 </ul>
//             </div>
//             </nav>
//             <div className="view intro-2" style={{}}>
//             <div className="full-bg-img">
//                 <div className="mask rgba-purple-light flex-center">
//                 <div className="container text-center white-text wow fadeInUp">
//                     <h2>This Navbar is fixed and transparent</h2>
//                     <br />
//                     <h5>It will always stay visible on the top, even when you scroll down</h5>
//                     <p>Navbar's background will switch from transparent to solid color while scrolling down</p>
//                     <br />
//                     <p>Full page intro with background image will be always displayed in full screen mode, regardless of
//                     device </p>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </header>
//         {/*Main Navigation*/}
//         {/*Main Layout*/}
//         <main className="text-center py-5">
//             <div className="container">
//             <div className="row">
//                 <div className="col-md-12">
//                 <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//                     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
//                     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
//                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
//                     consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                     enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
//                     nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//                     mollit anim id est laborum.</p>
//                 </div>
//             </div>
//             </div>
//         </main>
//         {/*Main Layout*/}
//         </div>

//     )
// }

// export default NavbarElement

// -------------

// import React, { Component } from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";

// class NavbarElement extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             fixed: "",
//             background: ""
//         }
//     }
//     componentDidMount(){
//         window.addEventListener('scroll', this.handleScroll)
//     }
//     componentWillUnmount(){
//         window.removeEventListener("scroll", this.handleScroll)
//     }
//     handleScroll = () =>{
//         if(window.scrollY >= 10){
//             this.setState({
//                 fixed: "fixed",
//                 background: "rgba(1,1,1,1)"
//             })
//         } else {
//             this.setState({
//                 fixed: "",
//                 background: "rgba(1,255,1,1)" 
                
//             })
//         }
//     }
//     render() {
//         return (
//             <div className="nav" style={{position: this.state.fixed, background: this.state.background, zIndex: 0}}>
//                 <h1><Link to="/" >Relitz</Link></h1>
//                 <ul className="nav-menus">
//                     <li><Link to="/" >Home</Link></li>
//                     <li><Link to="/foodblogs" >Foods</Link></li>
//                     <li><Link to="/calories" >Targeted Calories</Link></li>
//                     <li><Link to="/schedule" >Schedule An Event</Link></li>
//                 </ul>
//             </div>
//         )
//     }
// }
// export default NavbarElement;

///////////////

import React, { Component } from "react"
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa } from "mdbreact"

class NavbarElement extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (

      <Navbar color="indigo" dark expand="md">
          <NavbarBrand>
            <strong className="white-text">Navbar</strong>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
          <Collapse
            id="navbarCollapse3"
            isOpen={this.state.isOpen}
            navbar
          >
            <NavbarNav left>
              <NavItem>
                <NavLink to="/">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/charts">Analysis</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <Fa icon="user" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-default" right>
                    <DropdownItem href="#!">Login</DropdownItem>
                    <DropdownItem href="#!">Register</DropdownItem>
                    <DropdownItem href="#!">My Account</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
          </Collapse>
      </Navbar>
    );
  }
}

export default NavbarElement;

