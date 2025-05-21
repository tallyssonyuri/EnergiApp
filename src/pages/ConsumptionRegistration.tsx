// src/pages/ConsumptionRegistration.tsx
import React, { useState, useEffect } from 'react';

interface Appliance {
  id: string;
  name: string;
}

export default function ConsumptionRegistration() {
  const [appliances, setAppliances] = useState<Appliance[]>([]);
  const [selectedId, setSelectedId] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [amount, setAmount] = useState<number|''>('');

  useEffect(() => {
    // buscar lista de aparelhos da API
    setAppliances([
      { id: '1', name: 'Geladeira' },
      { id: '2', name: 'Ar-condicionado' },
    ]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ selectedId, date, amount });
  };

  return (
    <div className="flex items-center justify-center bg-black text-white min-h-screen px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900 rounded-2xl p-8 space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Registrar Consumo</h1>

        <div className="space-y-1">
          <label htmlFor="appliance" className="block text-sm">Aparelho</label>
          <select
            id="appliance"
            value={selectedId}
            onChange={e => setSelectedId(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:ring-2 focus:ring-yellow-400"
            required
          >
            <option value="">Selecione</option>
            {appliances.map(a => (
              <option key={a.id} value={a.id}>{a.name}</option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label htmlFor="date" className="block text-sm">Data</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="amount" className="block text-sm">
            Consumo (kWh)
          </label>
          <input
            id="amount"
            type="number"
            step="0.1"
            value={amount}
            onChange={e => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
        >
          Salvar Consumo
        </button>
      </form>
    </div>
  );
}
