import React, { Component } from "react";
import { Container, Card, Input, Header, Form } from "semantic-ui-react";

class TempDisplay extends Component {
  handleChange = e => {
    console.log("Value changing..." + e.target.value);
    // this.props.convertToKelvin(e.target.value);
  };

  render() {
    return (
      <Container text>
        <Card centered={true}>
          <Card.Content>
            <Header as="h3">{`Temperature (${this.props.scale})`}</Header>
            <Card.Meta>
              <Input
                fluid
                // placeholder={"Blah"}
                value={this.props.convertToLocal(this.props.temp)}
                onChange={this.handleChange}
              />
            </Card.Meta>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default TempDisplay;
