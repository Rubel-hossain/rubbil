import React, { Component, Fragment } from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../assets/css/topNavigation.css";
import whiteLogo from "../assets/images/navlogo.svg";
import blueLogo from "../assets/images/navlogoScroll.svg";

class TopNavigation extends Component {

    constructor(){
         super();
         this.state = {
            navbarClass: "topNavigation",
            brandLogo: [whiteLogo]
         }
    }

    scrollMenu = ()=> {

        if(window.scrollY > 100){
           
           this.setState({
               navbarClass: "fixedTopNavigation",
               brandLogo: [blueLogo]
           });
     } else {

        this.setState({
            navbarClass: "topNavigation",
            brandLogo: [whiteLogo]
        });
     }
    }
     componentDidMount(){
        window.addEventListener("scroll", this.scrollMenu);
     }
    render() {
        return (
            <Fragment>
                <Navbar collapseOnSelect expand="lg" className={this.state.navbarClass} fixed="top">
                <Navbar.Brand href="#" className="text-white brandText"><img src={this.state.brandLogo}/> RUBEL HOSSAIN</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="ml-auto">
                    <Nav.Link href="#">HOME</Nav.Link>
                    <Nav.Link href="#">SERVICES</Nav.Link>
                    <Nav.Link href="#">COURSES</Nav.Link>
                    <Nav.Link href="#">PORTFOLIO</Nav.Link>
                    <Nav.Link href="#">CONTACT</Nav.Link>
                    <Nav.Link href="#">ABOUT</Nav.Link>
                 </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;