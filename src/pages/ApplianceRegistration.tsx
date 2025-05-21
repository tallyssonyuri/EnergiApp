import React, { useState } from 'react';

export default function ApplianceRegistration() {
  const [name, setName] = useState('');
  const [power, setPower] = useState<number|''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // lógica de cadastro aqui
    console.log({ name, power });
  };

  return (
    <div className="flex items-center justify-center bg-black text-white min-h-screen px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-900 rounded-2xl p-8 space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Novo Eletrodoméstico</h1>

        <div className="space-y-1">
          <label htmlFor="name" className="block text-sm">Nome do Aparelho</label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="power" className="block text-sm">
            Consumo Médio (W/mês)
          </label>
          <input
            id="power"
            type="number"
            required
            value={power}
            onChange={e => setPower(e.target.value === '' ? '' : Number(e.target.value))}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
        >
          Cadastrar Aparelho
        </button>
      </form>
    </div>
  );
}
