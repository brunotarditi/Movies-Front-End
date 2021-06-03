import React, { Component } from "react";
import { Button } from "react-bootstrap";
class Tabla extends Component {
  render() {
    return (
      <>
            <tr>
              <td>{this.props.id}</td>
              <td>{this.props.title}</td>
              <td >
                <Button href={`/detailMovie/${this.props.id}`} className="btn btn-primary m-1"><i className="fas fa-info-circle"></i> Ver</Button>
              </td>
            </tr>
      </>
    );
  }
}

export default Tabla;
