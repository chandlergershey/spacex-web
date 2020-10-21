import React from "react";
import { Link } from 'react-router-dom';
import BootstrapButton from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/Buttons.scss';
import SpaceXLogo from '../assets/images/spacex-logo.svg';
import './LoginHeader.scss';

export default function Header() {

  return (
    <div className=''>
        <img src={SpaceXLogo} className="SpaceXLogo_Login"/>
        <Link to='/login'>
          <BootstrapButton color="primary" className="login-button">
            Enter site
          </BootstrapButton>
        </Link>
        
    </div>
  );
}
