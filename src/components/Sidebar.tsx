// import { Nav } from 'react-bootstrap';

// export function Sidebar() {
//   return (
//     <Nav className="flex-column bg-light vh-100 p-3">
//       <Nav.Link href="#dashboard">Dashboard</Nav.Link>
//       <Nav.Link href="#consumo">Consumo</Nav.Link>
//       <Nav.Link href="#relatorios">Relatórios</Nav.Link>
//     </Nav>
//   );
// }

import { Nav, ListGroup } from 'react-bootstrap';

export function Sidebar() {
  return (
    <ListGroup variant="flush" className="vh-100">
      <ListGroup.Item action href="/dashboard">Dashboard</ListGroup.Item>
      <ListGroup.Item action href="/consumo">Detalhe de Consumo</ListGroup.Item>
      <ListGroup.Item action href="/login">Login</ListGroup.Item>
    </ListGroup>
  );
}
