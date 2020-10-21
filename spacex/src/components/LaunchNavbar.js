import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './LaunchNavbar.scss';
import {Auth} from 'aws-amplify';
import SpaceXLogo from '../assets/images/spacex-logo.svg';
// import { useHistory } from "react-router-dom";

function LaunchNavbar() {

  // let history = useHistory();

  // function signOut(){
  //   history.push('/');
  // }

  return (
    <div className="launch_navbar_container">
      <Navbar className='launch_navbar' fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
            <img src={SpaceXLogo} style={{width:150, marginTop: -7, marginLeft: 20}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navbar_link" href="/past-launches">Past Launches</Nav.Link>
            <Nav.Link className="navbar_link" href="/next-launch">Next Launch</Nav.Link>
            <Nav.Link className="navbar_link" href="/upcoming-launches">Upcoming Launches</Nav.Link>
            
          </Nav>
          <Nav id="nav-dropdown">
            <NavDropdown alignRight title="My Account" id="collasible-nav-dropdown">
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
