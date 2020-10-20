import React from 'react'
import '../pages/Launches.scss';
import {Row, Col, Container} from 'react-bootstrap';

function LaunchComponent() {
  return (
    <div>
      <div className="launch_container">
          
          <Container>
            <Row className="launch_container_mission_header">
              <Col xs={8}>
                <div className="launch_container_mission_name">Starlink-14 (v1.0)</div>
                <div className="launch_container_mission_name_text">Mission Name</div>
              </Col>
              <Col xs={3}>
                <div className="launch_container_flight_number">2020-10-21</div>
                <div className="launch_container_flight_number_text">Flight Date (UTC)</div>
              </Col>
            </Row>
            <div className="launch_container_informational_text_group">
              <div className="launch_container_informational_text">Flight Number: 105</div>
              <div className="launch_container_informational_text">Rocket Name: Falcon 9</div>
              <div className="launch_container_informational_text">Launch Site: CCAFS SLC 40</div>
              <div className="launch_container_informational_text">Payload Type: Satellite</div>
            </div>
            
          </Container>
        </div>
    </div>
  )
}

export default LaunchComponent
