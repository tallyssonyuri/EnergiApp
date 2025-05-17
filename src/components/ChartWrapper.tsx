import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface ChartWrapperProps {
  data: any[];
}

export function ChartWrapper({ data }: ChartWrapperProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#1a73e8" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
