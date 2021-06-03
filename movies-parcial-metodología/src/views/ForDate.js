import React, { Component } from "react";
import axios from "axios";
import Rutas from "../routes/Rutas";
import { Container, Row, Col } from "react-bootstrap";
import Tarjeta from "../components/Tarjeta";
class ForDate extends Component {
  state = {
    peliculas: [],
  };

  componentDidMount() {
    this.getAllMovieForDate();
  }
  async getAllMovieForDate() {
    await axios.get("http://localhost:3001/movies/new").then((res) => {
      this.setState({ peliculas: res.data });
    });
  }
  render() {
    const peliculaRecomendada = this.state.peliculas.map((pelicula) => {
      return (
        <Tarjeta
          key={pelicula.id}
          id={pelicula.id}
          title={pelicula.title}
          rating={pelicula.rating}
          awards={pelicula.awards}
          length={pelicula.length}
          release_date={new Date(pelicula.release_date).toISOString().split('T')[0]}
        ></Tarjeta>
      );
    });
    return (
      <>
        <Rutas></Rutas>
        <div className="margenMovies">
        <Container className="d-flex justify-content-center my-4">
          <Row>
            <Col>
              <h2>Películas ordenadas por fecha</h2>
              {peliculaRecomendada}
            </Col>
          </Row>
        </Container>
        </div>
      </>
    );
  }
}

export default ForDate;
