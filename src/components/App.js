import React, { Component } from 'react';
import Header from './Header';
import Lookup from './Lookup';

class App extends Component {
  render() {
    return (
      <div className="">
        <Header />
        <div className="container">
          <h1>Welcome to the Weather App!</h1>
          <p
          >{`We can let you know if it's going to rain today, tomorrow, or in a week.`}</p>
          <p>Start searching by typing into the box</p>
        </div>
        <Lookup />
      </div>
    );
  }
}

export default App;
