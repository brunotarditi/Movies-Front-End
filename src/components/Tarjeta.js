import React, { Component } from "react";
import { Card } from "react-bootstrap";
class Tarjeta extends Component {
  render() {
    return (
      <>
        <Card border="primary" style={{ width: "30rem" }} className="my-4">
          <Card.Header className="title">{this.props.title}</Card.Header>
          <Card.Body>
          <Card.Title><i className="fas fa-star"></i> RATING: {this.props.rating}</Card.Title>
            <Card.Text><i className="fas fa-award"></i> AWARDS: {this.props.awards}</Card.Text>
            <Card.Text><i className="fas fa-clock"></i> LENGTH: {this.props.length}</Card.Text>
            <Card.Text><i className="fas fa-calendar-day"></i> RELEASE DATE: {this.props.release_date}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Tarjeta;
