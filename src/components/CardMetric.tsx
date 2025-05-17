import { Card } from 'react-bootstrap';

interface CardMetricProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
}

export function CardMetric({ title, value, icon }: CardMetricProps) {
  return (
    <Card className="h-100 text-center">
      <Card.Body>
        {icon && <div className="mb-2">{icon}</div>}
        <Card.Title>{title}</Card.Title>
        <Card.Text className="display-6">{value}</Card.Text>
      </Card.Body>
    </Card>
  );
}