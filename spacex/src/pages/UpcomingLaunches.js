import React, {Component} from 'react';
import LaunchComponent from '../components/LaunchComponent';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import {Link} from 'react-router-dom'

class UpcomingLaunches extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nextLaunch: [],
      isLoaded: false
    }
  }

  componentDidMount(){
    axios
    .get('https://api.spacexdata.com/v3/launches/upcoming')
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

    var { isLoaded, nextLaunch } = this.state;

    if(!isLoaded) {
      return <LoadingSpinner />;
    } else {

      //const missionName = this.state.nextLaunch.data.mission_name;

      return (
        <>
        {/* <LaunchNavbar /> */}
        <div className="launches_page_body">
          <div className="past_launches_container">
            <div className="launch_header">
              <div className="past_launches_header">UPCOMING LAUNCHES</div>
            </div>
            <div className="past_launches_container_body">
              {
                this.state.nextLaunch.data.map(launch => (
                  <div>
                    <i class="far fa-star"></i>
                    <Link to='/' style={{textDecoration: "none"}}>
                      <LaunchComponent 
                      missionName={launch.mission_name} 
                      missionDate={launch.launch_date_utc.substring(0,10)} 
                      flightNumber={launch.flight_number}
                      rocketName={launch.rocket.rocket_name}
                      launchSite={launch.launch_site.site_name}
                      payloadType={launch.rocket.second_stage.payloads[0].payload_type}/>
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        </>
        
      );
    }
  }
}

export default UpcomingLaunches;
