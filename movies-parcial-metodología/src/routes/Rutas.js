import React, { Component } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

class Rutas extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Lista de películas" id="basic-nav-dropdown">
                <NavDropdown.Item href="/movies"><i className="fas fa-list"></i> Películas</NavDropdown.Item>
                <NavDropdown.Item href="/recommended"><i className="fas fa-star"></i> Recomendadas</NavDropdown.Item>
                <NavDropdown.Item href="/fordate"><i className="fas fa-calendar-day"></i> Por Fecha</NavDropdown.Item>
                <NavDropdown.Item href="/genres"><i className="fas fa-list"></i> Géneros</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/create">
                <i className="fas fa-plus"></i> Nueva
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Rutas;
