import React, { Component } from "react";
import Rutas from "../routes/Rutas";
import { Jumbotron, Button, Container } from "react-bootstrap";
class Home extends Component {

  state = { animate: "animate__bounce" };

  handleClick = (e) => {
    const element = document.getElementById("logo");
    element.classList.add("animate__animated", this.state.animate);
    element.addEventListener('animationend', () => {
      element.classList.remove("animate__animated", this.state.animate);
    })
  };
  render() {
    return (
      <>
        <Rutas></Rutas>
        <Jumbotron className="fondo margenHome">
          <Container lg="5">
            <h1 className="text-white">Digital Movies</h1>
            <h2 className="text-white">Bienvenidos a Digital Movies </h2>
            <img
              src={require(`../assets/img/logo.png`).default}
              alt="logo"
              id="logo"
              className="sizeImg"
              onMouseOver={(e) => this.handleClick(e)}
            ></img>
            <hr className="bg-white" />
            <p>
              <Button variant="outline-light" href="/movies">
                Listado de películas
              </Button>
            </p>
          </Container>
        </Jumbotron>
      </>
    );
  }
}

export default Home;
