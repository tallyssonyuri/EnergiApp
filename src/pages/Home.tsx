import React from 'react';
import { ArrowLeft } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Dados de exemplo para o gráfico de consumo diário
const dailyData = [
  { hour: '0', kWh: 0.2 },
  { hour: '4', kWh: 0.5 },
  { hour: '8', kWh: 0.8 },
  { hour: '12', kWh: 1.3 },
  { hour: '16', kWh: 1.6 },
  { hour: '20', kWh: 1.0 },
];

// Dados de exemplo para principais aparelhos
const mainAppliances = [
  { name: 'Ar-condicionado', power: 100 },
  { name: 'Geladeira', power: 75 },
  { name: 'Máquina de Lavar', power: 60 },
];

export default function Home() {
  const monthlyConsumption = 284; // Consumo mensal em kWh

  return (
    <div className="bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 dark:from-black dark:via-gray-900 dark:to-black min-h-screen px-2 sm:px-6 py-4">
      {/* Header */}
      <header className="flex items-center mb-6">
        <button className="text-yellow-400 p-2 rounded-full hover:bg-yellow-100 dark:hover:bg-gray-800 transition">
          <ArrowLeft size={28} />
        </button>
        <h1 className="flex-1 text-center text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
      </header>

      {/* Indicador Mensal */}
      <div className="flex justify-center mb-8">
        <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-yellow-400 shadow-lg flex flex-col items-center justify-center border-8 border-yellow-200 dark:border-gray-800">
          <span className="text-4xl sm:text-5xl font-bold text-black">{monthlyConsumption}</span>
          <span className="text-base text-black">kWh este mês</span>
        </div>
      </div>

      {/* Seções em grid */}
      <div className="space-y-8">
        {/* Consumo Diário */}
        <section>
          <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Consumo Diário</h2>
          <div className="w-full h-48 sm:h-60 bg-white dark:bg-gray-900 rounded-2xl p-3 shadow">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                <XAxis dataKey="hour" stroke="#555" />
                <YAxis stroke="#555" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#111', border: 'none' }}
                  labelStyle={{ color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="kWh" fill="#FACC15" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Principais Aparelhos */}
        <section>
          <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Principais Aparelhos</h2>
          <div className="grid grid-cols-1 gap-3">
            {mainAppliances.map((app) => (
              <div
                key={app.name}
                className="flex justify-between items-center bg-white dark:bg-gray-900 rounded-2xl px-4 py-3 shadow"
              >
                <span className="text-base text-gray-900 dark:text-white">{app.name}</span>
                <span className="text-base font-medium text-yellow-600 dark:text-yellow-400">{app.power} W/mês</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
