import { ArrowLeft, Calendar } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const consumptionData = [
  { hour: '0', kWh: 0.2 },
  { hour: '4', kWh: 0.5 },
  { hour: '8', kWh: 0.8 },
  { hour: '12', kWh: 1.3 },
  { hour: '16', kWh: 1.6 },
  { hour: '20', kWh: 1.0 },
];

export default function Dashboard() {
  return (
    <div className="bg-black text-white min-h-screen p-4">
      <header className="flex items-center justify-between mb-6">
        <button className="text-yellow-400 p-2 rounded-full hover:bg-gray-800">
          <ArrowLeft size={28} />
        </button>
        <h1 className="text-2xl font-bold">VER CONSUMO</h1>
        <button className="text-yellow-400 p-2 rounded-full hover:bg-gray-800">
          <Calendar size={28} />
        </button>
      </header>

      <div className="mb-6">
        <h2 className="text-sm text-gray-400 mb-2">ELETRODOMÉSTICO</h2>
        <div className="bg-gray-800 text-white rounded-lg px-4 py-3 flex justify-between items-center">
          <span>Ar-condicionado</span>
          <ArrowLeft size={20} className="transform rotate-180 text-gray-400" />
        </div>
      </div>

      <div className="mb-6">
        <div className="bg-gray-800 text-white rounded-lg px-4 py-3 flex items-center space-x-3">
          <Calendar size={20} className="text-yellow-400" />
          <span>23/04/2024</span>
        </div>
      </div>

      <section>
        <div className="bg-gray-800 rounded-lg p-4">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={consumptionData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
              <XAxis dataKey="hour" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip
                contentStyle={{ backgroundColor: '#333', border: 'none' }}
                labelStyle={{ color: '#fff' }}
                itemStyle={{ color: '#fff' }}
              />
              <Bar dataKey="kWh" fill="#FACC15" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}
