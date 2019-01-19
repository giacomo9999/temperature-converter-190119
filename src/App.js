import React, { Component } from "react";
import { Container, Card, Header } from "semantic-ui-react";
import TempDisplay from "./components/tempDisplay.component";

class App extends Component {
  state = { kelvin: 273.15 };

  kelvinToCelsius = temp => (temp - 273.15).toFixed(2);
  celsiusToKelvin = temp => (temp + 273.15).toFixed(2);

  kelvinToFahrenheit = temp => (temp * (9 / 5) - 459.67).toFixed(2);
  fahrenheitToKelvin = temp => ((temp + 459.67) * (5 / 9)).toFixed(2);

  changeValue = newValue => {
    this.setState({ kelvin: newValue });
  };

  render() {
    return (
      <Container text>
        <br />
        <Card centered={true}>
          <Card.Content>
            <Header as="h3">
              {"Temperature (Kelvin): " + this.state.kelvin}
            </Header>
          </Card.Content>
        </Card>

        <TempDisplay
          scale="Fahrenheit"
          temp={this.state.kelvin}
          convertToLocal={this.kelvinToFahrenheit}
          convertToKelvin={this.fahrenheitToKelvin}
          onChange={this.changeValue}
        />
        <TempDisplay
          scale="Celsius"
          temp={this.state.kelvin}
          convertToLocal={this.kelvinToCelsius}
          convertToKelvin={this.celsiusToKelvin}
          onChange={this.changeValue}
        />
      </Container>
    );
  }
}

export default App;
