import React, {Component} from 'react'
import '../pages/Launches.scss';
import {Row, Col, Container} from 'react-bootstrap';

class LaunchComponent extends Component {
  constructor(props) {
    super(props);

    this.state={
      missionName: this.props.missionName,
      missionDate: this.props.missionDate,
      flightNumber: this.props.flightNumber,
      rocketName: this.props.rocketName,
      launchSite: this.props.launchSite,
      payloadType: this.props.payloadType
    }
  }

  render(){

    return (
      <div>
        <div className="launch_container">
            
            <Container>
              <Row className="launch_container_mission_header">
                <Col xs={8}>
                  <div className="launch_container_mission_name">{this.state.missionName}</div>
                  <div className="launch_container_mission_name_text">Mission Name</div>
                </Col>
                <Col xs={3}>
                  <div className="launch_container_flight_number">{this.state.missionDate}</div>
                  <div className="launch_container_flight_number_text">Flight Date (UTC)</div>
                </Col>
              </Row>
              <div className="launch_container_informational_text_group">
                <div className="launch_container_informational_text">Flight Number: {this.state.flightNumber}</div>
                <div className="launch_container_informational_text">Rocket Name: {this.state.rocketName}</div>
                <div className="launch_container_informational_text">Launch Site: {this.state.launchSite}</div>
                <div className="launch_container_informational_text">Payload Type: {this.state.payloadType}</div>
              </div>
              
            </Container>
          </div>
      </div>
    );
  }
  
}

export default LaunchComponent
