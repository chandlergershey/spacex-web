import React, {Component} from 'react';
import LaunchComponent from '../components/LaunchComponent';
import axios from 'axios';

class PastLaunches extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nextLaunch: [],
      isLoaded: false
    }
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
      return <h1>Loading</h1>;
    } else {

      //const missionName = this.state.nextLaunch.data.mission_name;

      return (
        <div className="past_launches_container">
          <div className="launch_header">
            <div className="past_launches_header">PAST LAUNCHES</div>
          </div>
          <div className="past_launches_container_body">
            {
              this.state.nextLaunch.data.map(launch => (
                <LaunchComponent 
                missionName={launch.mission_name} 
                missionDate={launch.launch_date_utc.substring(0,10)} 
                flightNumber={launch.flight_number}
                rocketName={launch.rocket.rocket_name}
                launchSite={launch.launch_site.site_name}
                payloadType="Satellite t"/>
              ))
            }

            




            {/* <LaunchComponent missionName={"Hi"} missionDate="2020-10-21 t" flightNumber="105 t" rocketName="Falcon 9 t" launchSite="CCAFS SLC 40 t" payloadType="Satellite t"/> */}




          </div>
        </div>
      );
    }
  }
}

export default PastLaunches
