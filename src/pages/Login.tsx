import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex items-center justify-center bg-black text-white min-h-screen px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900 rounded-2xl p-8 space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Entrar</h1>

        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div className="space-y-1 relative">
          <label htmlFor="password" className="block text-sm">
            Senha
          </label>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute right-3 top-8 text-gray-400 hover:text-gray-200"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
