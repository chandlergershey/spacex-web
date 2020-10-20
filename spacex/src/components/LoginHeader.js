import React from "react";
import { Link } from 'react-router-dom';
import BootstrapButton from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/Buttons.scss';
import SpaceXLogo from '../assets/images/spacex-logo.svg';


export default function Header() {

  return (
    <div className=''>
        <img src={SpaceXLogo} style={{width:300, marginTop: 33, marginLeft: 50}} />
        <Link to='/login'>
          <BootstrapButton color="primary" className="login-button" style={{float: "right", marginRight: 50, marginTop: 25}}>
            Enter site
          </BootstrapButton>
        </Link>
        
    </div>
  );
}
