import { Container, Form, Button } from 'react-bootstrap';

export function Login() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Form style={{ width: '300px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Digite seu email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Entrar
        </Button>
      </Form>
    </Container>
  );
}