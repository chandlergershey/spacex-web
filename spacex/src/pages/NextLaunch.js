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
      rocket: []
    }
  }

  componentDidMount(){
    axios
    .get('https://api.spacexdata.com/v3/launches/next')
    .then(res => {
      this.setState({ nextLaunch: res.data });
      console.log(this.state.nextLaunch);
      console.log(this.state.nextLaunch.rocket.rocket_name);
      console.log(this.state.data.nextLaunch.rocket.rocket_name);
    })
    .catch(error => console.error(error));
  }


  render(){
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    const flightNumber = this.state.nextLaunch.flight_number;
    const missionName = this.state.nextLaunch.mission_name;


    return (
      <div className="past_launches_container">
        <div className="launch_headline">
          <div className="past_launches_header">{missionName}</div>
          <div className="past_launches_header">{flightNumber}</div>
          {/* {
            true === true || this.state.nextLaunch.map( rocket => (
              <div className="past_launches_header">Hi</div>
            ))
            // <div className="past_launches_header">NEXT LAUNCH</div>
          } */}
          <div className="past_launches_header"></div>
          
          
          <Countdown date={`${year}-12-24T00:00:00`} />
  
        </div>
        <div className="">
  
          <div className="">
  
            <Container>
              <Row className="justify-content-md-center">
                <Col className="launch_modal_info_container">
                  Rocket
                </Col>
                <Col className="launch_modal_info_container">Weather</Col>
                <Col className="launch_modal_info_container">Launch Site</Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col className="launch_modal_info_container">Destination</Col>
                <Col className="launch_modal_info_container">Payload</Col>
                <Col className="launch_modal_info_container">Social</Col>
              </Row>
            </Container>
            
          </div>
        </div>
      </div>
    )
  }
  
}

export default NextLaunch;
