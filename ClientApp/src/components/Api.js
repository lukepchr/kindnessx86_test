import React, { Component } from 'react';

export class Api extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h2>Task #4/4: Api Endpoint</h2>

        <h4>Back-end task. 
          <ul>
            <li>
            Add a new GET endpoint to the API in the WeatherForecastController.cs class
            </li>
            <li>
            It will return a list of a few strings (colour names will work)
            </li>
            <li>
            Display these strings here as a HTML Unordered List.
            </li>
          </ul>
          (End of test)
        </h4>
      </div>
    );
  }
}
