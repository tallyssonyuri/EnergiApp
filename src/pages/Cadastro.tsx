import React, { useState } from 'react';

export default function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // lógica de cadastro aqui
    console.log({ name, email, password });
  };

  return (
    <div className="flex items-center justify-center bg-black text-white min-h-screen px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900 rounded-2xl p-8 space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Cadastro</h1>

        <div className="space-y-1">
          <label htmlFor="name" className="block text-sm">Nome</label>
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
          <label htmlFor="email" className="block text-sm">E-mail</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="password" className="block text-sm">Senha</label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
        >
          Criar Conta
        </button>
      </form>
    </div>
  );
}
