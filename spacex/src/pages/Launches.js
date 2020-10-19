import React from 'react';
import BootstrapButton from 'react-bootstrap/Button';
import MaterialButton from '@material-ui/core/Button';
import '../scss/Buttons.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComplexGrid from '../components/ComplexGrid';
import Navbar from '../components/navbar';
import SignUp from '../components/Authentication/SignIn';


function launches() {
  return (
    <>

      <BootstrapButton variant="default" className="textColor bgColor">
        TEST TEXT
      </BootstrapButton>

      <BootstrapButton variant="primary" className="btn-primary">Primary</BootstrapButton>

      <MaterialButton variant="contained" color="primary">
        Material Button
      </MaterialButton>

      <ComplexGrid />

      {/* <SignUp /> */}


    </>

  )
}

export default launches
