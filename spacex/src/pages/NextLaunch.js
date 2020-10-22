import React, { UseState } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import LaunchComponent from '../components/LaunchComponent';
import Countdown from '../components/Countdown';
import LoadingSpinner from '../components/LoadingSpinner';
import LaunchNavbar from '../components/LaunchNavbar';
import axios from 'axios';
import Modal from '../components/ModalComponent';

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NextLaunch extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      nextLaunch: [],
      isLoaded: false,
      rocketData: []
    }
  }

  componentDidMount(){
    axios
    .get('https://api.spacexdata.com/v3/launches/next')
    .then(json => {
      this.setState({ 
        nextLaunch: json
      });



        var rocket = this.state.nextLaunch.data.rocket.rocket_id;
        const launchName = this.state.nextLaunch.data.launch_site.side_id;
        
        var urlAddress = 'https://api.spacexdata.com/v3/rockets/' + rocket;
        axios
        .get(urlAddress)
        .then(json => {
          this.setState({ 
            isLoaded: true,
            rocketData: json
          });
          console.log(launchName);
          console.log(this.state.rocketData.data);
        })
        .catch(error => console.error(error));


        

      console.log(this.state.nextLaunch.data);
    })
    .catch(error => console.error(error));
  }

  // onClick = event => {
  //   var x = document.getElementById("rocketsContainer");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // }

  onClick(name, dropdownIconID){
    var x = document.getElementById(name);
    var dropdownIcon = document.getElementById(dropdownIconID);
    if (x.style.display === "none") {
      x.style.display = "block";
      dropdownIcon.style.transform = "rotate(180deg)";
    } else {
      x.style.display = "none";
      dropdownIcon.style.transform = "rotate(0deg)";
    }
  }

  render(){
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

    const weatherAPI = 'http://api.weatherstack.com/current?access_key=f95f1aab7875cba50d63534a2cc07dc6';

  

    var { isLoaded, nextLaunch, rocketData } = this.state;

    if(!isLoaded) { 
      return (
        <LoadingSpinner />
      )
    } else {

      const missionName = this.state.nextLaunch.data.mission_name;
      const flightNumber = this.state.nextLaunch.data.flight_number;
      const rocketName = this.state.nextLaunch.data.rocket.rocket_name;
      const launchDateUTC = this.state.nextLaunch.data.launch_date_local.substring(0,19);
      const launchSite = this.state.nextLaunch.data.launch_site.site_name;
      const payloadType = this.state.nextLaunch.data.rocket.second_stage.payloads[0].payload_type;
      const payloadMassKg = this.state.nextLaunch.data.rocket.second_stage.payloads[0].payload_mass_kg;
      console.log("TESSSTTT " + this.state.nextLaunch.data.launch_site.site_name);

      var rocketInformation = this.state.rocketData.data;
      var launchInformation = this.state.nextLaunch.data;
      // console.log("TESSSTTT2 " + rocketInformation.rocket_name);



      return (
        <>
        <LaunchNavbar />
        <div className="launches_page_body">
          <div className="past_launches_container">
            <div className="launch_headline">
              <Container>
                <Row xs={1} md={2}>
                  <Col>
                    <div className="launch_mission_name">{missionName}</div>
                    <div className="launch_mission_name_text">Mission Name</div>
                  </Col>
                  <Col>
                    <Countdown date={launchDateUTC} />
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="">
      
              <div className="">
      
                <Container>
                  <Row className="justify-content-md-center">

                    <Col onClick={() => this.onClick('launchInfoContainer', 'dropdown-icon-mission-info-container')} xs={12} className="launch_modal_info_container">
                      <div className="launch_rocket_header">Mission Info <FontAwesomeIcon className="dropdown-icon" id='dropdown-icon-mission-info-container' icon={faAngleDown}/></div>
                      <LaunchInformation launchInfo={launchInformation}/>
                    </Col>

                    <Col onClick={() => this.onClick('rocketsContainer', 'dropdown-icon-rockets-info-container')} xs={12} className="launch_modal_info_container">
                      <div className="launch_rocket_header">Rocket <FontAwesomeIcon className="dropdown-icon" id='dropdown-icon-rockets-info-container' icon={faAngleDown}/></div>
                      <RocketInformation rocketInfo={rocketInformation}/>
                    </Col>
                    
                    <Col onClick={() => this.onClick('weatherInfoContainer', 'dropdown-icon-weather-info-container')} xs={12} className="launch_modal_info_container">
                      <div className="launch_rocket_header">Weather <FontAwesomeIcon className="dropdown-icon" id='dropdown-icon-weather-info-container' icon={faAngleDown}/></div>
                      <WeatherInformation/>
                    </Col>

                    <Col onClick={() => this.onClick('launchSiteInfoContainer', 'dropdown-icon-launch-site-info-container')} xs={12} className="launch_modal_info_container">
                      <div className="launch_rocket_header">Launch Site <FontAwesomeIcon className="dropdown-icon" id='dropdown-icon-launch-site-info-container' icon={faAngleDown}/></div>
                      <LaunchSiteInformation/>
                    </Col>

                    <Col onClick={() => this.onClick('payloadInfoContainer', 'dropdown-icon-payload-info-container')} xs={12} className="launch_modal_info_container">
                      <div className="launch_rocket_header">Payload <FontAwesomeIcon className="dropdown-icon" id='dropdown-icon-payload-info-container' icon={faAngleDown}/></div>
                      <PayloadInformation/>
                    </Col>

                    <Col onClick={() => this.onClick('socialInfoContainer', 'dropdown-icon-social-info-container')} xs={12} className="launch_modal_info_container">
                      <div className="launch_rocket_header">Social <FontAwesomeIcon className="dropdown-icon" id='dropdown-icon-social-info-container' icon={faAngleDown}/></div>
                      <SocialInformation/>
                    </Col>

                  </Row>
                  <Row xs={12} className="justify-content-md-center">
                    
                  </Row>
                </Container>
                
              </div>
            </div>
          </div>
        </div>
        </>
        
      )
    }
  }
}

export default NextLaunch;


function RocketInformation(props) {
  return (
    <div id="rocketsContainer" style={{display:"none"}}>
      <div>Rocket Name: {props.rocketInfo.rocket_name}</div>
      <div>Mass: {props.rocketInfo.mass.kg} kg</div>
      <div>Diameter: {props.rocketInfo.diameter.meters} meters</div>
      <div>Height: {props.rocketInfo.height.meters} (meters)</div>
      <div className="rocket-info-container-image"><img className="launch_rocket_image" src={props.rocketInfo.flickr_images[0]}/></div>
    </div>
  )
}

function LaunchInformation(props) {
  return (
    <div id="launchInfoContainer" style={{display:"none"}}>
      <div>Mission Name: {props.launchInfo.mission_name}</div>
      <div>Flight Number: {props.launchInfo.flight_number}</div>
      <div>Launch Date UTC: {props.launchInfo.launch_date_utc}</div>
      <div>Launch Success: {props.launchInfo.launch_success}</div>
      <div className="rocket-info-container-image"><img className="launch_rocket_image" src={props.launchInfo.links.mission_patch}/></div>
    </div>
  )
}

function WeatherInformation(){
  return (
    <div id="weatherInfoContainer" style={{display:"none"}}>
      <div>API weather loaded from http://api.weatherstack.com/</div>
    </div>
  )
}

function LaunchSiteInformation(){
  return (
    <div id="launchSiteInfoContainer" style={{display:"none"}}>
      <div>Site location displayed on Google Maps</div>
    </div>
  )
}

function PayloadInformation(){
  return (
    <div id="payloadInfoContainer" style={{display:"none"}}>
      <div>Add Payload to Rocket functionality</div>
    </div>
  )
}

function SocialInformation(){
  return (
    <div id="socialInfoContainer" style={{display:"none"}}>
      <div>Social feeds such as SpaceX twitter, news articles from Google</div>
    </div>
  )
}
