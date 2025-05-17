// import { Container, Row, Col } from 'react-bootstrap';
// import { CardMetric } from '../components/CardMetric';
// import { ChartWrapper } from '../components/ChartWrapper';

// export function Dashboard() {
//   return (
//     <Container className="py-4">
//       <Row className="mb-4">
//         <Col><CardMetric title="Energia Hoje" value="150 kWh" /></Col>
//         <Col><CardMetric title="Custo Médio" value="R$ 0,75/kWh" /></Col>
//         <Col><CardMetric title="Emissão CO₂" value="23 kg" /></Col>
//       </Row>
//       <Row>
//         <Col>
//           <ChartWrapper /* props com dados do Figma */ />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

import { Container, Row, Col } from 'react-bootstrap';
import { CardMetric } from '../components/CardMetric';
import { ChartWrapper } from '../components/ChartWrapper';

const mockMetrics = [
  { title: 'Energia Hoje', value: '150 kWh' },
  { title: 'Custo Médio', value: 'R$ 0,75/kWh' },
  { title: 'Emissão CO₂', value: '23 kg' },
];
const mockChartData = [
  { time: '00:00', value: 10 }, { time: '06:00', value: 50 },
  { time: '12:00', value: 120 }, { time: '18:00', value: 80 },
];

export function Dashboard() {
  return (
    <Container fluid className="py-4">
      <Row className="mb-4">
        {mockMetrics.map((m, i) => (
          <Col key={i} md={4} className="mb-3">
            <CardMetric title={m.title} value={m.value} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <ChartWrapper data={mockChartData} />
        </Col>
      </Row>
    </Container>
  );
}