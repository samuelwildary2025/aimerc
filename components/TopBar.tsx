import React from 'react';
import { Search, Bell, Moon } from 'lucide-react';
import { View } from '../types';

interface TopBarProps {
  activeView: View;
}

export const TopBar: React.FC<TopBarProps> = ({ activeView }) => {
  const getTitle = () => {
    switch (activeView) {
      case 'orders': return { title: 'Painel de Pedidos', subtitle: 'Gerencie todos os pedidos do seu supermercado' };
      case 'customers': return { title: 'Clientes', subtitle: 'Acompanhe os contatos que chegam pelos pedidos' };
      case 'analytics': return { title: 'Analytics', subtitle: 'Análise detalhada das vendas e performance' };
      default: return { title: '', subtitle: '' };
    }
  };

  const { title, subtitle } = getTitle();

  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
      <div>
        <h1 className="text-xl font-bold text-gray-900">{title}</h1>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar..."
            className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-700"
          />
        </div>

        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors">
          <Moon size={20} />
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-gray-500 hover:text-gray-700 relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
      </div>
    </header>
  );
};