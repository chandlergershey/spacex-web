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
      console.log(this.state.nextLaunch.data.flight_number);
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
      return (
        <div className="past_launches_container">
          <div className="launch_headline">

            <div className="past_launches_header">{this.state.nextLaunch.data.flight_number}</div>
            <div className="past_launches_header">{this.state.nextLaunch.data.rocket.rocket_name}</div>
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
}

export default NextLaunch;
