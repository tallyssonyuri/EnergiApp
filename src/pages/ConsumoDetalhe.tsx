import { Container } from 'react-bootstrap';
import { EnergyTable } from '../components/EnergyTable';

const readingsMock = [
  { date: '2025-05-10', consumption: 120 },
  { date: '2025-05-11', consumption: 140 },
  { date: '2025-05-12', consumption: 130 },
];

export function ConsumoDetalhe() {
  return (
    <Container fluid className="py-4">
      <h2 className="mb-4">Detalhe de Consumo</h2>
      <EnergyTable readings={readingsMock} />
    </Container>
  );
}