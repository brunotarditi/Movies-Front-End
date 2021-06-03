import React, { Component } from "react";
import axios from "axios";
import Rutas from "../routes/Rutas";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Container, Row, Col, Button } from "react-bootstrap";
import Tarjeta from "../components/Tarjeta";
class DetailMovie extends Component {
  state = {
    release_date: "",
    pelicula: {
      
    },
  };
  componentDidMount() {
    this.getMoviePorId(this.props.match.params.id);
  }

  async getMoviePorId(id) {
    await axios.get("http://localhost:3001/movies/detail/" + id).then((res) => {
      console.log(res.data)
      this.setState({ 
        pelicula: res.data,
        release_date: new Date(res.data.release_date).toISOString().split('T')[0]
      });
    });
  }

  deleteInstrumento = (id, e) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "Eliminar",
      text: "¿Estás seguro que deseas eliminar esta película?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminalo",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete("http://localhost:3001/movies/delete/" + id).then((res) => {
          console.log("eliminado");
        });
        MySwal.fire({
          text: "La película se ha eliminado con éxito",
          icon: "success",
          confirmButtonColor: "#3085d6",
          timer: 3000,
        }).then(() => {
          window.location.href = "/movies";
        });
      }
    });
  };

  render() {
    return (
      <>
        <Rutas></Rutas>
        <div className="margenMovies">
        <Container className="mt-4 animate__animated animate__fadeInRight">
          <Row>
            <Col>
              <Tarjeta
                key={this.state.pelicula.id}
                id={this.state.pelicula.id}
                title={this.state.pelicula.title}
                rating={this.state.pelicula.rating}
                awards={this.state.pelicula.awards}
                length={this.state.pelicula.length}
                release_date={this.state.release_date}
              ></Tarjeta>
              <Button size="sm" href="/movies" variant="primary">
                <i className="fas fa-backspace"></i> Volver
              </Button>{" "}
              <Button
                size="sm"
                variant="warning"
                href={`/edit/${this.state.pelicula.id}`}
              >
                <i className="fas fa-edit"></i> Editar
              </Button>{" "}
              <Button
                size="sm"
                variant="danger"
                onClick={(e) =>
                  this.deleteInstrumento(this.state.pelicula.id, e)
                }
              >
                <i className="fas fa-trash"></i> Eliminar
              </Button>{" "}
            </Col>
          </Row>
        </Container>
        </div>
      </>
    );
  }
}

export default DetailMovie;
