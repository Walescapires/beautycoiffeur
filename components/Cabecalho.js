import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="salao">Beauty Coiffeur</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="funcionarios">Funcionários</Nav.Link>
            <Nav.Link href="clientes">Clientes</Nav.Link>
            <NavDropdown title="Atendimentos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="unhas">Unhas</NavDropdown.Item>
              <NavDropdown.Item href="cabelos">Cabelos</NavDropdown.Item>
              <NavDropdown.Item href="depilacao">Depilação</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Cabecalho