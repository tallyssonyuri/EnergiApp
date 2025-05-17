import { Navbar, Container, Nav } from 'react-bootstrap';

export function Header() {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container fluid>
        <Navbar.Brand href="/">EnergiApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/consumo">Consumo</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}