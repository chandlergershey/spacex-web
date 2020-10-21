import React, { Component } from 'react';
import '../scss/Buttons.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import LaunchNavbar from '../components/LaunchNavbar';
import './Launches.scss';

export default class launches extends Component{

  render(){

    return (
      <>
      <LaunchNavbar />
      { this.props.children }
      </>
    )
  }
}
