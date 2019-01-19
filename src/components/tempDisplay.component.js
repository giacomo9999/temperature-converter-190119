import React, { Component } from "react";
import { Container, Card } from "semantic-ui-react";

class TempDisplay extends Component {
  render() {
    return (
      <Container text>
        <br />
        <Card centered={true}>
          <Card.Content>
            <Card.Header>{this.props.scale}</Card.Header>
            <Card.Meta>{this.props.transFunc(this.props.temp)}</Card.Meta>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default TempDisplay;
