import React from 'react';
import { ShoppingCart, Users, BarChart3, LogOut, ChevronLeft, Building2, TrendingUp } from 'lucide-react';
import { View } from '../types';

interface SidebarProps {
  activeView: View;
  onChangeView: (view: View) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, onChangeView }) => {
  const menuItems = [
    { id: 'orders', label: 'Pedidos', icon: ShoppingCart },
    { id: 'customers', label: 'Clientes', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0 z-10 hidden md:flex">
      {/* Header */}
      <div style={{ height: '140px' }} className="flex items-center justify-between px-6 border-b border-gray-100">
        <div className="flex items-center gap-1">
          <img src="/logo.png" alt="Aimerc" style={{ height: '90px', width: '90px' }} />
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* Context Context */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="p-1.5 bg-gray-100 rounded-md">
            <Building2 size={16} className="text-gray-500" />
          </div>
          <span className="text-sm font-medium text-gray-700">Supermercado Teste SP</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = activeView === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id as View)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                ? 'bg-emerald-50 text-emerald-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
            >
              <Icon size={20} />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-red-600 transition-colors">
          <LogOut size={20} />
          Sair
        </button>
      </div>
    </aside>
  );
};