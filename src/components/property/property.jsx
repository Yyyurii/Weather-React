import React, { Component } from 'react';
import './property.css';
import SwapiService from '../../services/swapi-service';

export default class Property extends Component {
    swapiService = new SwapiService();

    state = {
      humidity: null,
      wind: null,
      feelsLike: null,
      description: null,
    };

    componentDidMount() {
      this.updateWeather();
    }

    // eslint-disable-next-line no-unused-vars
    componentDidUpdate(prevProps, _prevState) {
      // eslint-disable-next-line react/prop-types
      if (prevProps.cityName !== this.props.cityName) {
        this.updateWeather();
      }
    }

    updateWeather = () => {
      // eslint-disable-next-line react/prop-types
      // eslint-disable-next-line react/prop-types
      this.swapiService.getResource(this.props.cityName)
        .then((response) => {
          this.setState({
            humidity: `${response.main.humidity} %`,
            wind: `${response.wind.speed}  m/s`,
            feelsLike: `${Math.floor(response.main.feels_like - 273.15)} °C`,
            description: response.weather[0].description,
          });
        })
        .catch((error) => { console.log(error); });
    }

    render() {
      const {
        humidity, wind, feelsLike, description,
      } = this.state;

      return (
        <div className="property">
          <div>
            <ul>
              <li>
                <span>Humidity: </span>
                <span>{humidity}</span>
              </li>
              <li>
                <span>Wind: </span>
                <span>{wind}</span>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <span>Feels like: </span>
                <span>{feelsLike}</span>
              </li>
              <li>
                <span>Description: </span>
                <span>{description}</span>
              </li>
            </ul>
          </div>
        </div>
      );
    }
}
