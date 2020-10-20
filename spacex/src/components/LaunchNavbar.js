import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './LaunchNavbar.scss';
import {Auth} from 'aws-amplify';
// import { useHistory } from "react-router-dom";

function LaunchNavbar() {

  // let history = useHistory();

  // function signOut(){
  //   history.push('/');
  // }

  return (
    <div className="launch_navbar_container">
      <Navbar className='launch_navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">SPACEX</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navbar_link" href="#features">Past Launches</Nav.Link>
            <Nav.Link className="navbar_link" href="#pricing">Next Launch</Nav.Link>
            <Nav.Link className="navbar_link" href="#pricing">Upcoming Launches</Nav.Link>
            
          </Nav>
          <Nav id="nav-dropdown">
            <NavDropdown alignRight  title="My Account" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Liked Launches</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">My Payloads</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/" onClick={
                  () => Auth.signOut()
                }>Sign out</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default LaunchNavbar
