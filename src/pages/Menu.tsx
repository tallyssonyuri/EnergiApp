import React from 'react';
import { Home, CreditCard, Zap, List, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const items = [
  { to: '/', icon: <Home />, label: 'Home' },
  { to: '/register-consumption', icon: <Zap />, label: 'Registrar Consumo' },
  { to: '/appliance', icon: <CreditCard />, label: 'Cadastrar Eltrodomésticos.' },
  { to: '/dashboards', icon: <List />, label: 'Dashboards' },
  { to: '/alerts', icon: <AlertCircle />, label: 'Alertas' },
];

export default function Menu() {
  return (
    <nav className="fixed bottom-0 w-full bg-gray-900 border-t border-gray-700 flex justify-around py-2 text-gray-400">
      {items.map(i => (
        <Link
          key={i.to}
          to={i.to}
          className="flex flex-col items-center text-sm hover:text-yellow-400"
        >
          {React.cloneElement(i.icon, { size: 24 })}
          <span>{i.label}</span>
        </Link>
      ))}
    </nav>
  );
}
