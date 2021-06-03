import React, { Component } from "react";
import Tabla from "../components/Tabla";
import Rutas from "../routes/Rutas";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
class Movies extends Component {
  state = {
    peliculas: [],
  };

  componentDidMount() {
    this.getAllMovies();
  }

  async getAllMovies() {
    await axios.get("http://localhost:3001/movies").then((res) => {
      console.log(res.data);
      this.setState({ peliculas: res.data });
    });
  }
  render() {
    const pelicula = this.state.peliculas.map((p, i) => {
      return <Tabla key={p.id} id={p.id} title={p.title}></Tabla>;
    });
    return (
      <>
        <Rutas></Rutas>
        <div className="margenMovies">
        <h2 className="d-flex justify-content-center my-4">Listado de películas</h2>
        <Container className="d-flex justify-content-center my-4 col-md-6">
          <Table striped bordered hover size="sm" className="text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Título</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>{pelicula}</tbody>
          </Table>
        </Container>
        </div>
      </>
    );
  }
}

export default Movies;
