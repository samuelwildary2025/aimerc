import React from 'react';
import { User, Phone, MapPin, RefreshCw, Search } from 'lucide-react';
import { Customer } from '../types';

export const CustomersView: React.FC = () => {
  const customers: Customer[] = [
    { id: '1', name: 'Agente IA', phone: '85999999999', address: 'Rua Principal, 123 - Centro', ordersCount: 28 },
    { id: '2', name: 'Cliente', phone: '5511999998888', address: 'Rua São João, Bairro Cabatan, 112, Caucaia-CE', ordersCount: 10 },
    { id: '3', name: 'Mariana Costa', phone: '85988887777', address: 'Av. Central, 456 - Parque Soledade, Caucaia/CE', ordersCount: 1 },
    { id: '4', name: 'Samuel', phone: 'cliente_atual', address: 'Rua São João, Bairro Cabatan, nº 112', ordersCount: 8 },
    { id: '5', name: 'Antônio Samuel', phone: '112', address: 'Rua São João, nº 112, Bairro Cabatã, Caucaia/CE', ordersCount: 1 },
    { id: '6', name: 'Wildary', phone: '558587520060', address: 'Rua São João, 112 — Bairro Cabatan, Caucaia/CE', ordersCount: 2 },
    { id: '7', name: 'Samuel Wildary Menezes', phone: '558597855663', address: 'Rua São João, 112 — Bairro Cabatan', ordersCount: 1 },
    { id: '8', name: 'Samuel wildary', phone: '558587848470', address: 'Rua sao joao, 112 — Bairro Cabatan', ordersCount: 2 },
    { id: '9', name: 'Samuel Wildary', phone: '5585999999999', address: 'Rua São João, Bairro Cabatan, 112, Caucaia-CE', ordersCount: 5 },
    { id: '10', name: 'Samuel Wildering', phone: '5585987654321', address: 'Não informado', ordersCount: 1 },
    { id: '11', name: 'Samuel Wildary', phone: '5585987520060', address: 'Rua São João, Bairro Cabatan, Nº 112, Caucaia-CE', ordersCount: 2 },
  ];

  return (
    <div className="p-8 space-y-6">
      {/* Header Stats */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
         <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                <User size={24} />
            </div>
            <div>
                <p className="text-gray-500 font-medium">Clientes únicos</p>
                <h2 className="text-3xl font-bold text-gray-900">11</h2>
            </div>
         </div>
         <div className="flex gap-3">
             <div className="relative">
                 <input 
                    type="text" 
                    placeholder="Buscar por nome, telefone ou endereço"
                    className="pl-4 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm"
                 />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                 <RefreshCw size={16} />
                 Atualizar
             </button>
         </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 bg-white">
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Telefone</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Endereço</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Pedidos Realizados</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{customer.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                        <Phone size={14} className="text-gray-400"/>
                        {customer.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                     <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-gray-400 flex-shrink-0"/>
                        <span className="truncate max-w-xs">{customer.address}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900 text-right">{customer.ordersCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};