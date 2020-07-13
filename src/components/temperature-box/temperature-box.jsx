import React, { Component } from 'react';
import './temperature-box.css';
import SwapiService from '../../services/swapi-service';

export default class Temperature extends Component {
  swapiService = new SwapiService();

  state = {
    city: '',
    temperature: null,
    icon: '',
    image: 'wi-day-sunny',
  }

  componentDidMount() {
    this.updateTemperature();
    // this.updateIcon();
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, _prevState) {
    // eslint-disable-next-line react/prop-types
    if (prevProps.cityName !== this.props.cityName) {
      this.updateTemperature();
      this.updateIcon();
    }
  }

  updateTemperature = () => {
    // eslint-disable-next-line react/prop-types
    this.swapiService.getResource(this.props.cityName)
      .then((response) => {
        this.setState({
          city: response.name,
          temperature: `${Math.floor(response.main.temp - 273.15)} °C`,
          icon: response.weather[0].icon,
        });
      })
      .catch(console.log);
  }

  updateIcon = () => {
    const dict = {
      '01d': 'wi-day-sunny',
      '02d': 'wi-day-cloudy',
      '03d': 'wi-cloudy',
      '04d': 'wi-cloudy',
      '09d': 'wi-showers',
      '10d': 'wi-day-rain-mix',
      '11d': 'wi-thunderstorm',
      '13d': 'wi-snow',
      '50d': 'wi-fog',
      '01n': 'wi-night-clear',
      '02n': 'wi-night-alt-cloudy',
      '03n': 'wi-night-alt-cloudy-high',
      '04n': 'wi-cloudy',
      '09n': 'wi-night-alt-sprinkle',
      '10n': 'wi-night-alt-showers',
      '11n': 'wi-night-alt-thunderstorm',
      '13n': 'wi-night-alt-snow',
      '50n': 'wi-night-fog',
    };

    const keys = Object.keys(dict);
    const values = Object.values(dict);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < keys.length; i++) {
      if (this.state.icon === keys[i]) {
        this.setState({
          image: values[i],
        });
      }
    }
  }

  render() {
    const { city, temperature, image } = this.state;

    const reqSvgs = require.context('../../weather-image', true, /\.svg$/);
    const imagePath = reqSvgs(`./${image}.svg`);

    return (
      <div className="temperature-box">
        <div>
          <h1><span>{city}</span></h1>
          <h1><span>{temperature}</span></h1>
        </div>
        <div>
          <img src={imagePath} alt="bg-weather" />
        </div>
      </div>
    );
  }
}
