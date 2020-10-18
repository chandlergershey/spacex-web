import React from "react";
import { Link } from 'react-router-dom';
//import MaterialButton from '@material-ui/core/Button';
import BootstrapButton from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/Buttons.scss';


export default function Header() {
  return (
    <div className=''>
        <Link to='/login'>
          <BootstrapButton color="primary" className="login-button" >
            Login
          </BootstrapButton>
        </Link>
    </div>
  );
}
