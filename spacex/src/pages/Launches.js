import React from 'react';
import BootstrapButton from 'react-bootstrap/Button';
import MaterialButton from '@material-ui/core/Button';
import '../scss/Buttons.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComplexGrid from '../components/ComplexGrid';
import Navbar from '../components/navbar';
import SignUp from '../components/Authentication/SignIn';
import LaunchNavbar from '../components/LaunchNavbar';
import './Launches.scss';

import PastLaunches from './PastLaunches';
import NextLaunch from './NextLaunch';
import {Route} from 'react-router-dom';

function launches() {
  
  return (
    <>
    <LaunchNavbar />
    <div className="launches_page_body">

      {/* <NextLaunch /> */}
      <PastLaunches />




    </div>
    </>
    

  )
}

export default launches
