import React, { Component } from 'react';

import Predictions from './Predictions/Predictions';
import SearchForm from './SearchForm';
const keys = require('../config/keys');

console.log(keys.weatherAPI);

const PREDSTYLE = {
  heigh: 'auto',
  width: 'auto',
  overflowX: 'scroll',
  overflowY: 'hidden',
  whiteSpace: 'nowrap'
};

const ForecastMessage = ({ city }) => {
  let message =
    city == null ? (
      <p>Invalid city</p>
    ) : city.length === 0 ? null : (
      <p>The 5-day weather prediction for {city} is: </p>
    );
  return message;
};

class Lookup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      data: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async getWeather(city) {
    const obj = [];
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&type=like&units=imperial&APPID=${
        keys.weatherAPI
      }`
    );
    const json = await res.json();
    console.log(json);
    if (json.cod >= '200' && json.cod <= '300') {
      json.list.map(arr => {
        const date = arr.dt_txt.split(' ');
        const msec = Date.parse(`${date[0]}T${date[1]}`);
        const d = new Date(msec);
        obj.push({
          date: d,
          weather: arr.weather[0].main,
          icon: arr.weather[0].icon,
          temp: arr.main.temp
        });
        return null;
      });
    } else {
      city = null;
    }
    this.setState(
      {
        city: city,
        data: obj
      },
      console.log(this.state)
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getWeather(document.getElementById('cityName').value);
  }

  render() {
    return (
      <div className="container">
        <h5>5-Day Weather Forecast</h5>
        <div className="row">
          <div className="input-field col s3">
            <SearchForm onSubmit={this.handleSubmit} />
          </div>
        </div>
        <ForecastMessage city={this.state.city} />
        <div style={PREDSTYLE}>
          <Predictions data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Lookup;
