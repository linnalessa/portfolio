import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import logo from './assets/logo.png'



  export default function App() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Navbar.Brand href="#home">
    
        <Image style={{ height: "100px", width: "",  }} src={logo} />
     
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">ABOUT</Nav.Link>
            <Nav.Link href="#pricing">CONTACT</Nav.Link>
            
            <Nav.Link eventKey={2} href="CONTACT">
              CLIENTS
            </Nav.Link>
            <NavDropdown title="PORTFOLIO" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Example</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Example
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
         
          
        </Navbar.Collapse>
      </Navbar>
);
}



    

    
    

