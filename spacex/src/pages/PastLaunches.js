import React from 'react'
import {Button, DropdownButton, InputGroup, FormControl, Dropdown} from 'react-bootstrap';
import {Row, Col, Container} from 'react-bootstrap';
import LaunchComponent from '../components/LaunchComponent';

function PastLaunches() {
  return (
    <div className="past_launches_container">
      <div className="launch_header">
        <div className="past_launches_header">PAST LAUNCHES</div>

        {/* <InputGroup>
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />

          <DropdownButton
            as={InputGroup.Append}
            variant="outline-secondary"
            title="Filter"
            id="input-group-dropdown-2"
          >
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Separated link</Dropdown.Item>
          </DropdownButton>
          
        </InputGroup> */}

      </div>
      <div className="past_launches_container_body">
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
        <LaunchComponent />
        <LaunchComponent />
        <LaunchComponent />
      </div>
    </div>
  )
}

export default PastLaunches
