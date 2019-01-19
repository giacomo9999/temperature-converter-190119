import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import TempDisplay from "./components/tempDisplay.component";

class App extends Component {
  state = { kelvin: 22 };

  celsFunc = temp => temp + 33;

  fahrFunc = temp => temp + 100;

  render() {
    return (
      <Container text>
        <br />
        <TempDisplay
          scale="Fahrenheit"
          temp={this.state.kelvin}
          transFunc={this.fahrFunc}
        />
        <TempDisplay
          scale="Celsius"
          temp={this.state.kelvin}
          transFunc={this.celsFunc}
        />
        />
      </Container>
    );
  }
}

export default App;
