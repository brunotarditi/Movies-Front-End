import React, { Component } from "react";
import Rutas from "../routes/Rutas";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
class Formulario extends Component {

  //Creo el estado con los atributos
  state = {
    id: "",
    title: "",
    rating: "",
    awards: "",
    release_date: "",
    length: "",
    genre_id: "",
    genres: [],
  };

  componentDidMount() {
    this.getMoviePorId(this.props.match.params.id);
    this.getAllGenres();
  }

  //Busco la película por el id y paso a los atributos del estado los datos recibidos
  async getMoviePorId(id) {
    await axios.get("http://localhost:3001/movies/detail/" + id).then((res) => {
      this.setState({
        id: res.data.id,
        title: res.data.title,
        rating: res.data.rating,
        awards: res.data.awards,
        release_date: new Date(res.data.release_date).toISOString().split('T')[0],
        length: res.data.length,
        genre_id: res.data.genre_id,
      });
    });
  }

  //Listo todos los géneros
  async getAllGenres() {
    await axios.get("http://localhost:3001/genres").then((res) => {
      this.setState({ genres: res.data });
    });
  }

  //Metodo que me permite obtener los valores del formulario
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //Envio el formulario con sus peticiones correspondientes
  handleSubmit = (event) => {
    event.preventDefault();
    //Declaro un objeto para recuperar los datos del estado
    const peliculaForm = {
      title: this.state.title,
      rating: this.state.rating,
      awards: this.state.awards,
      release_date: this.state.release_date,
      length: this.state.length,
      genre_id: this.state.genre_id,
    };
    //Si el id es mayor a 0 significa que existe un id y actualizo
    if (this.state.id > 0) {
      axios
      .put("http://localhost:3001/movies/update/" + this.state.id, peliculaForm)
      .then((res) => {
        window.location.href = "/movies";
      });

    //Si no, lo crea
    } else {
      console.log(peliculaForm);
      axios
      .post("http://localhost:3001/movies/create", peliculaForm)
      .then((res) => {
        window.location.href = "/movies";
      });
    }

  }
  render() {
    //Recorro los géneros y los asigno a las opciones de un combo
    const genre = this.state.genres.map((g) => {
      return (
        <option key={g.id} value={g.id} name="genre_id">
          {g.name}
        </option>
      );
    });
    return (
      //Retorno un formulario
      <>
        <Rutas></Rutas>
        <div className="margenMovies">
        <Container className="col-md-4 mt-4">
          <Row className="shadow-lg p-4 mb-5 rounded ">
            <Col>
              <h2>Película</h2>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formGroupTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={this.handleChange}
                    value={this.state.title}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formGroupRating">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Rating"
                    name="rating"
                    onChange={this.handleChange}
                    value={this.state.rating}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formGroupAwards">
                  <Form.Label>Awards</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Awards"
                    name="awards"
                    onChange={this.handleChange}
                    value={this.state.awards}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formGroupReleaseDate">
                  <Form.Label>Release Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Release Date"
                    name="release_date"
                    onChange={this.handleChange}
                    value={this.state.release_date}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formGroupLength">
                  <Form.Label>Length</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Length"
                    name="length"
                    onChange={this.handleChange}
                    value={this.state.length}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formGroupGenre">
                <Form.Label>Genres</Form.Label>
                  <Form.Control
                    as="select"
                    name="genre_id"
                    onChange={this.handleChange}
                    value={this.state.genre_id}
                    required
                  >
                    <option value="">Seleccione el género</option>
                    {genre}
                  </Form.Control>
                </Form.Group>

                <Button href={`/detailMovie/${this.props.match.params.id}`} className="btn btn-info m-2">
                  <i className="fas fa-backspace"></i> Volver
                </Button>
                <Button variant="primary" type="submit">
                  <i className="fas fa-plus"></i> Añadir
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        </div>
      </>
    );
  }
}

export default Formulario;
