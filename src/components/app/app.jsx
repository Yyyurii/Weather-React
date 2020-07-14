import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import Temperature from '../temperature-box';
import Property from '../property';
import Spinner from '../spinner';

export default class App extends Component {
  state = {
    city: undefined,
    loading: false,
    error: false,
  }

  onStateCity = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.setState({
        city: event.target.value,
      },
      // eslint-disable-next-line no-console
      () => { console.log(this.state); });
      // eslint-disable-next-line no-param-reassign
      event.target.value = '';
    }
  }

  render() {
    const { city, loading } = this.state;

    const content = loading ? <Spinner /> : <View city={city} />;

    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="app">
        <Header onStateCity={this.onStateCity} />
        <div className="content">
          {content}
        </div>
      </div>
    );
  }
}


// eslint-disable-next-line react/prop-types
const View = ({ city }) => (
  <>
    <Temperature cityName={city} />
    <Property cityName={city} />
  </>
);
