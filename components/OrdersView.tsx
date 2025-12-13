import React from 'react';
import { TrendingUp, Clock, CheckCircle, DollarSign, Printer, FileText, Calendar } from 'lucide-react';

export const OrdersView: React.FC = () => {
  const stats = [
    { label: 'Total de Pedidos', value: '0', icon: TrendingUp, color: 'text-blue-500' },
    { label: 'Pendentes', value: '0', icon: Clock, color: 'text-yellow-500' },
    { label: 'Faturados', value: '0', icon: CheckCircle, color: 'text-green-500' },
    { label: 'Valor Faturado', value: 'R$ 0,00', icon: DollarSign, color: 'text-green-600' },
  ];

  return (
    <div className="p-8 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">{stat.label}</p>
              <h3 className={`text-2xl font-bold ${stat.label === 'Valor Faturado' ? 'text-green-600' : 'text-blue-600'}`}>
                {stat.value}
              </h3>
            </div>
            <div className={`p-2 rounded-lg bg-opacity-10 ${stat.color.replace('text', 'bg')}`}>
              <stat.icon size={24} className={stat.color} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pedidos em Andamento */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-900">Pedidos em Andamento</h3>
            <span className="text-orange-500 font-bold">1</span>
          </div>
          <div className="p-6">
            <div className="bg-gray-50 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-gray-900">Samuel</h4>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                   06/12/2025, 13:02
                </p>
              </div>
              <div className="flex items-center gap-4">
                 <span className="font-bold text-yellow-600 text-lg">R$ 214,62</span>
                 <div className="flex gap-2">
                    <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors">
                        Faturar
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors">
                        <Printer size={16} />
                        Imprimir
                    </button>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pedidos Concluídos */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col h-full">
           <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <h3 className="font-bold text-gray-900">Pedidos Concluídos</h3>
                <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full text-xs">0</span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex gap-2 mb-6">
                <button className="px-3 py-1.5 rounded-md border border-blue-200 text-blue-600 bg-blue-50 text-sm font-medium flex items-center gap-2">
                    <Calendar size={14} />
                    Hoje
                </button>
                <button className="px-3 py-1.5 rounded-md border border-gray-200 text-gray-600 bg-white text-sm font-medium hover:bg-gray-50">
                    Todos
                </button>
            </div>
            <div className="flex flex-col items-center justify-center py-8 text-gray-400">
                <p>Nenhum pedido concluído para a seleção atual.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};