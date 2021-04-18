import React from 'react';
import axios from 'axios';

class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city: this.props.city || 'New York',
            weather: {},
        };
    }

    componentDidMount() {
        //debugger;
        const city = this.state.city;
        const key = process.env.REACT_APP_WEATHER_API_KEY;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
        axios.get(url).then(response => {
          console.log(response);
          if(response.status === 200) {
              this.setState({weather: response.data});
          }
        });
    }

    render() {
        const {city, weather} = this.state;
        return <div>
            <h1>{city}</h1>
            {weather.main && (<div>{weather.sys.country}
            <div>{weather.main.temp}</div>
            <div>{weather.weather[0].main}</div>
            <div>Feels like {weather.main.feels_like}</div>
        </div>)}
        </div>

    }
}

export default Weather;