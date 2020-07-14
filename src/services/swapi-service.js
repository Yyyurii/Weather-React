import { Component } from 'react';

export default class SwapiService extends Component {
  // eslint-disable-next-line class-methods-use-this
  async getResource(nameCity) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=2ec7f7b5fab44885766bbe4fc05fde4f`);

    if (!res.ok) {
      // eslint-disable-next-line
        throw new Error(`Could not fetch ${nameCity}` + `, received ${res.status}`)
    }

    // eslint-disable-next-line no-return-await
    return await res.json();
  }
}
