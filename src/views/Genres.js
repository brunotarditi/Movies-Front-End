import React, { Component } from "react";
import axios from "axios";
import Rutas from "../routes/Rutas";
import { Container, Table } from "react-bootstrap";
class Genres extends Component {
  state = {
    generos: [],
  };

  componentDidMount() {
    this.getAllMovies();
  }

  async getAllMovies() {
    await axios.get("http://localhost:3001/genres").then((res) => {
        console.log(res.data)
      this.setState({ generos: res.data });
    });
  }
  render() {
        const genero = this.state.generos.map((g, i) => {
        return( 
        <tr className="table-light" key={g.id}>
            <td>{g.id}</td>
            <td>{g.name}</td>
        </tr>
        );
      });
    return (
      <>
        <Rutas></Rutas>
        <div className="margenMovies">
        <h2 className="d-flex justify-content-center my-4">Listado de géneros</h2>
        <Container className="table table-hover d-flex justify-content-center my-4 col-md-6">
          <Table className="thead-dark text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
            {genero}
            </tbody>
          </Table>
        </Container>
        </div>
      </>
    );
  }
}

export default Genres;
