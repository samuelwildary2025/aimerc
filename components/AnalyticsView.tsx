import React from 'react';
import { 
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell,
    AreaChart, Area
} from 'recharts';
import { Calendar, ShoppingBag, DollarSign, TrendingUp } from 'lucide-react';

export const AnalyticsView: React.FC = () => {
  // Mock Data
  const salesData = [
    { name: 'dez. de 2025', sales: 420 },
    { name: 'nov. de 2025', sales: 480 },
  ];

  const pieData = [
    { name: 'Concluído', value: 95 },
    { name: 'Cancelado', value: 5 },
  ];
  const COLORS = ['#22c55e', '#eab308'];

  const trendData = [
    { day: '1', value: 100 },
    { day: '2', value: 120 },
    { day: '3', value: 180 },
    { day: '4', value: 200 },
    { day: '5', value: 240 },
    { day: '6', value: 210 },
    { day: '7', value: 240 },
  ];

  return (
    <div className="p-8 space-y-6">
      
      {/* Date Filter */}
      <div className="flex items-center gap-2">
         <div className="relative">
             <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
             <select className="pl-10 pr-8 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 appearance-none cursor-pointer">
                 <option>Últimos 30 dias</option>
                 <option>Últimos 7 dias</option>
                 <option>Este Mês</option>
             </select>
         </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-2">
                <span className="text-gray-500 text-sm font-medium">Total de Vendas</span>
                <DollarSign className="text-green-500" size={20} />
            </div>
            <h3 className="text-2xl font-bold text-green-600">R$ 888,17</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-2">
                <span className="text-gray-500 text-sm font-medium">Total de Pedidos</span>
                <ShoppingBag className="text-blue-500" size={20} />
            </div>
            <h3 className="text-2xl font-bold text-blue-600">24</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-2">
                <span className="text-gray-500 text-sm font-medium">Ticket Médio</span>
                <TrendingUp className="text-purple-500" size={20} />
            </div>
            <h3 className="text-2xl font-bold text-purple-600">R$ 37,01</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-2">
                <span className="text-gray-500 text-sm font-medium">Crescimento</span>
                <TrendingUp className="text-red-500" size={20} />
            </div>
            <div className="flex items-baseline gap-1">
                <h3 className="text-2xl font-bold text-red-500">-42.4</h3>
                <span className="text-gray-400 text-sm">%</span>
            </div>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm lg:col-span-2">
            <h3 className="font-bold text-gray-900 mb-6">Vendas por Período</h3>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesData} barSize={100}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{fill: '#64748b', fontSize: 12}}
                            dy={10}
                        />
                        <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{fill: '#64748b', fontSize: 12}}
                        />
                        <Tooltip 
                             cursor={{fill: '#f8fafc'}}
                             contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                        />
                        <Bar dataKey="sales" fill="#22c55e" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-6">Status dos Pedidos</h3>
             <div className="h-64 relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={0}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={2}
                            dataKey="value"
                            startAngle={90}
                            endAngle={-270}
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="white" strokeWidth={2} />
                            ))}
                        </Pie>
                         <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
             </div>
        </div>
      </div>

      {/* Charts Row 2 */}
       <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">Vendas dos Últimos 7 Dias</h3>
            <div className="h-48">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                         <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                         <XAxis hide />
                         <YAxis hide />
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                 </ResponsiveContainer>
            </div>
       </div>

    </div>
  );
};