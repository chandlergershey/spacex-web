import React, {Component} from 'react';
import LaunchComponent from '../components/LaunchComponent';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import {Link} from 'react-router-dom'
import SearchBox from '../components/SearchBox';

class PastLaunches extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nextLaunch: [],
      isLoaded: false,
      searchLaunch: ''
    }
  }

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({searchLaunch: e.target.value})
  }

  componentDidMount(){
    axios
    .get('https://api.spacexdata.com/v3/launches/past')
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

      let filteredLaunches = this.state.nextLaunch.data.filter((launch) => {
        return launch.mission_name.toLowerCase().includes(this.state.searchLaunch.toLowerCase())
      })

      return (
        <div className="launches_page_body">
          <div className="past_launches_container">
            <div className="launch_header">
              <div className="past_launches_header">PAST LAUNCHES</div>
              <SearchBox handleInput={this.handleInput}/>
            </div>
            <div className="past_launches_container_body">
              {
                filteredLaunches.map(launch => (
                  <div>
                    {/* <i class="far fa-star"></i> */}
                    <Link to={"/launch/" + launch.flight_number} style={{textDecoration: "none"}}>
                      <LaunchComponent key={launch.flight_number}
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
      );
    }
  }
}

export default PastLaunches
