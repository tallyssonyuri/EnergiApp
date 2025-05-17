import { Table } from 'react-bootstrap';

interface Reading { date: string; consumption: number; }
interface EnergyTableProps { readings: Reading[]; }

export function EnergyTable({ readings }: EnergyTableProps) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Data</th>
          <th>Consumo (kWh)</th>
        </tr>
      </thead>
      <tbody>
        {readings.map((r, idx) => (
          <tr key={idx}>
            <td>{r.date}</td>
            <td>{r.consumption}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
