import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import LaunchComponent from '../components/LaunchComponent';
import Countdown from '../components/Countdown';
 
import axios from 'axios'

class NextLaunch extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      nextLaunch: [],
      isLoaded: false
    }
  }

  componentDidMount(){
    axios
    .get('https://api.spacexdata.com/v3/launches/next')
    .then(json => {
      this.setState({ 
        isLoaded: true,
        nextLaunch: json
      });
      console.log(this.state.nextLaunch.data);
    })
    .catch(error => console.error(error));
  }

  render(){
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

    var { isLoaded, nextLaunch } = this.state;

    if(!isLoaded) {
      return <h1>Loading</h1>;
    } else {

      const missionName = this.state.nextLaunch.data.mission_name;
      const flightNumber = this.state.nextLaunch.data.flight_number;
      const rocketName = this.state.nextLaunch.data.rocket.rocket_name;
      const launchDateUTC = this.state.nextLaunch.data.launch_date_local.substring(0,19);
      const launchSite = this.state.nextLaunch.data.launch_site.site_name;
      const payloadType = this.state.nextLaunch.data.rocket.second_stage.payloads[0].payload_type;
      const payloadMassKg = this.state.nextLaunch.data.rocket.second_stage.payloads[0].payload_mass_kg;

  

      return (
        <div className="past_launches_container">
          <div className="launch_headline">
            <Container>
              <Row>
                <Col>
                  <div className="launch_mission_name">{missionName}</div>
                  <div className="launch_mission_name_text">Mission Name</div>
                </Col>
                <Col>
                  <Countdown date={launchDateUTC} />
                </Col>
              </Row>
            </Container>
            
            {/* <div className="">{flightNumber}</div>
            <div className="">Flight Number</div>
            <div className="">{launchDateUTC}</div>
            <div className="">Launch Date</div> */}


            
            
            
    
          </div>
          <div className="">
    
            <div className="">
    
              <Container>
                <Row className="justify-content-md-center">
                  <Col className="launch_modal_info_container">
                    <div>Rocket</div> <div>{rocketName}</div>
                  </Col>
                  <Col className="launch_modal_info_container">Weather</Col>
                  <Col className="launch_modal_info_container">
                    <div>Launch Site</div> <div>{launchSite}</div>
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col className="launch_modal_info_container">Destination</Col>
                  <Col className="launch_modal_info_container">
                    Payload <div>{payloadType}</div><div>{payloadMassKg} kg</div>
                  </Col>
                  <Col className="launch_modal_info_container">Social</Col>
                </Row>
              </Container>
              
            </div>
          </div>
        </div>
      )
    }
  }
}

export default NextLaunch;
