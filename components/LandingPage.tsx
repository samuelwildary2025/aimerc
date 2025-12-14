import React, { useState } from 'react';
import {
  ShoppingCart,
  Users,
  BarChart3,
  Check,
  ArrowRight,
  Menu,
  X,
  Play,
  TrendingUp,
  Building2,
  Zap,
  ShieldCheck,
  Smartphone,
  Clock,
  CheckCircle,
  DollarSign,
  Search,
  Phone,
  MapPin,
  MoreHorizontal,
  Filter,
  Calendar,
  ShoppingBag,
  Bell,
  Moon,
  Bot,
  Cpu,
  Server,
  Settings,
  HelpCircle
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';

export const LandingPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'orders' | 'customers' | 'analytics'>('analytics'); // Default to analytics to show the change

  const supermarkets = [
    "Supermercado Queiroz",
    "Empório Brasil",
    "Atacadão do Centro",
    "Rede Mais Você",

    "Hipermercado Estrela"
  ];

  // Data for Customers View Simulation
  const customersData = [
    { name: "Ana Paula Souza", phone: "(11) 99988-7766", address: "R. das Acácias, 45 - Vila Mariana, SP", orders: 42 },
    { name: "Carlos Eduardo Silva", phone: "(11) 98877-6655", address: "Av. do Cursino, 1200 - Saúde, SP", orders: 35 },
    { name: "Mariana Oliveira", phone: "(11) 97766-5544", address: "R. Domingos de Morais, 850 - V. Gumercindo", orders: 28 },
    { name: "Roberto Santos", phone: "(11) 96655-4433", address: "Av. Lins de Vasconcelos, 432 - Cambuci, SP", orders: 19 },
    { name: "Fernanda Lima", phone: "(11) 95544-3322", address: "R. Vergueiro, 2300 - Vila Mariana, SP", orders: 12 },
    { name: "Ricardo Almeida", phone: "(11) 94433-2211", address: "R. Pedro de Toledo, 500 - V. Clementino, SP", orders: 8 },
    { name: "Juliana Costa", phone: "(11) 93322-1100", address: "Av. Bosque da Saúde, 150 - Saúde, SP", orders: 5 },
    { name: "Pedro Rocha", phone: "(11) 92211-0099", address: "R. Santa Cruz, 80 - Vila Mariana, SP", orders: 3 },
  ];

  // Data for Analytics View (Updated for ~100k sales volume)
  const salesData = [
    { name: 'dez. de 2025', sales: 48500 },
    { name: 'nov. de 2025', sales: 51561 },
  ];

  const pieData = [
    { name: 'Concluído', value: 92 },
    { name: 'Cancelado', value: 8 },
  ];
  const COLORS = ['#22c55e', '#f59e0b']; // Green and Orange/Yellow

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
    <div className="font-sans text-slate-900 bg-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-1 cursor-pointer">
              <img src="/logo.png" alt="Aimerc" style={{ height: '60px', width: 'auto' }} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">Funcionalidades</a>
              <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">Como Funciona</a>
              <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">Planos</a>
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-emerald-600 transition-colors">Login</a>
              <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5">
                Falar com Consultor
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-gray-900">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4 shadow-xl">
            <a href="#features" className="block text-sm font-medium text-gray-600 hover:text-emerald-600">Funcionalidades</a>
            <a href="#pricing" className="block text-sm font-medium text-gray-600 hover:text-emerald-600">Planos</a>
            <a href="#" className="block text-sm font-medium text-gray-900">Login</a>
            <button className="w-full bg-emerald-500 text-white px-5 py-3 rounded-lg text-sm font-medium">
              Falar com Consultor
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden relative">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-emerald-100/40 rounded-full blur-3xl mix-blend-multiply"></div>
          <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-3xl mix-blend-multiply"></div>
          <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl mix-blend-multiply"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center gap-16">

            {/* Hero Content (Centered) */}
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-emerald-100 rounded-full px-4 py-1.5 shadow-sm mx-auto">
                <span className="flex w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">Plataforma V 2.0</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                Gestão Inteligente de Vendas <br />
                para <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Supermercados</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Nossa IA conecta ao seu WhatsApp e assume as vendas automaticamente. Tenha controle total no dashboard com relatórios completos: acompanhe pedidos, ranking de LTV de clientes e analytics detalhados em tempo real.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-emerald-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  Agendar Consultoria
                  <ArrowRight size={20} />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                  <Play size={20} className="fill-slate-700" />
                  Ver demo
                </button>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-500 pt-4">
                <div className="flex items-center gap-2">
                  <Bot size={18} className="text-emerald-500" />
                  <span>IA Generativa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={18} className="text-emerald-500" />
                  <span>Setup Incluso</span>
                </div>
              </div>
            </div>

            {/* Hero Visual (Interactive Dashboard) */}
            <div className="w-full max-w-5xl mx-auto perspective-1000">
              <div className="relative bg-black rounded-[2.5rem] shadow-2xl shadow-emerald-500/20 border-[6px] border-gray-900 p-3 transition-all duration-700 ease-out">
                {/* iPad Camera / Sensor Area (Optional, implies top of device) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-32 bg-black rounded-b-xl z-20 hidden md:block"></div>

                {/* Dashboard Interface */}
                <div className="bg-[#0f172a] rounded-[2rem] h-[600px] overflow-hidden flex font-sans select-none relative transition-all duration-500 ring-1 ring-slate-700/50">

                  {/* SIDEBAR (Visible on Tablet and PC) */}
                  <div className="hidden md:flex w-52 bg-[#1e293b] border-r border-slate-700 flex-col p-4 gap-2 z-20 flex-shrink-0">
                    <div className="flex items-center gap-1 px-2 mb-8">
                      <img src="/logo2.png" alt="Aimerc" style={{ height: '40px', width: 'auto' }} />
                    </div>

                    <div className="space-y-1">
                      <button
                        onClick={() => setActiveTab('orders')}
                        className={`px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium w-full text-left transition-all ${activeTab === 'orders' ? 'bg-[#2d3748] text-emerald-500 border-r-2 border-emerald-500' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
                      >
                        <ShoppingCart size={18} />
                        Pedidos
                      </button>
                      <button
                        onClick={() => setActiveTab('customers')}
                        className={`px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium w-full text-left transition-all ${activeTab === 'customers' ? 'bg-[#2d3748] text-emerald-500 border-r-2 border-emerald-500' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
                      >
                        <Users size={18} />
                        Clientes
                      </button>
                      <button
                        onClick={() => setActiveTab('analytics')}
                        className={`px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium w-full text-left transition-all ${activeTab === 'analytics' ? 'bg-[#2d3748] text-emerald-500 border-r-2 border-emerald-500' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
                      >
                        <BarChart3 size={18} />
                        Analytics
                      </button>
                    </div>

                    <div className="mt-auto space-y-1">
                      <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Supermercado Teste SP</div>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 flex flex-col min-w-0 bg-[#0f172a] h-full overflow-hidden relative">

                    {/* VIEW: ORDERS */}
                    {activeTab === 'orders' && (
                      <div className="flex flex-col h-full animate-fadeIn">
                        {/* Header */}
                        <div className="h-16 border-b border-slate-700 flex items-center justify-between px-6 flex-shrink-0 bg-[#0f172a]/50 backdrop-blur-sm">
                          <div>
                            <h2 className="text-white font-bold text-sm sm:text-base">Painel de Pedidos</h2>
                            <p className="text-slate-500 text-[10px] sm:text-xs">Gerencie todos os pedidos</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="bg-slate-800 rounded-full px-4 py-2 flex items-center gap-2 border border-slate-700 focus-within:border-emerald-500/50 transition-colors w-32 sm:w-auto">
                              <Search size={14} className="text-slate-500" />
                              <input type="text" placeholder="Buscar..." className="bg-transparent border-none text-xs text-white focus:outline-none w-full" />
                            </div>
                            <button className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors relative">
                              <Bell size={14} />
                              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0f172a]"></div>
                            </button>
                          </div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="p-4 sm:p-8 overflow-y-auto custom-scrollbar flex-1 pb-20 md:pb-8">
                          {/* Stats Row */}
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                            {/* Card 1 */}
                            <div className="bg-[#1e293b] p-4 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors group">
                              <div className="flex justify-between items-start mb-3">
                                <span className="text-slate-400 text-xs font-medium">Total</span>
                                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                  <TrendingUp size={14} />
                                </div>
                              </div>
                              <div className="text-2xl font-bold text-white">248</div>
                              <div className="text-[10px] text-emerald-500 mt-1 flex items-center gap-1">
                                <TrendingUp size={10} /> +12% hoje
                              </div>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-[#1e293b] p-4 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors group">
                              <div className="flex justify-between items-start mb-3">
                                <span className="text-slate-400 text-xs font-medium">Pendentes</span>
                                <div className="p-1.5 rounded-lg bg-yellow-500/10 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                                  <Clock size={14} />
                                </div>
                              </div>
                              <div className="text-2xl font-bold text-white">12</div>
                              <div className="text-[10px] text-yellow-500 mt-1">Aguardando ação</div>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-[#1e293b] p-4 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors group">
                              <div className="flex justify-between items-start mb-3">
                                <span className="text-slate-400 text-xs font-medium">Faturados</span>
                                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                  <CheckCircle size={14} />
                                </div>
                              </div>
                              <div className="text-2xl font-bold text-white">236</div>
                              <div className="text-[10px] text-emerald-500 mt-1">98% taxa de sucesso</div>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-[#1e293b] p-4 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors group">
                              <div className="flex justify-between items-start mb-3">
                                <span className="text-slate-400 text-xs font-medium">Receita</span>
                                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                  <DollarSign size={14} />
                                </div>
                              </div>
                              <div className="text-2xl font-bold text-emerald-400">R$ 48k</div>
                              <div className="text-[10px] text-emerald-500 mt-1">+R$ 2.4k vs ontem</div>
                            </div>
                          </div>

                          {/* Main Grid */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Andamento */}
                            <div className="bg-[#1e293b] rounded-xl border border-slate-700 p-5 flex flex-col h-full">
                              <div className="flex justify-between items-center mb-5">
                                <h3 className="text-white text-sm font-bold flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
                                  Em Andamento
                                </h3>
                                <span className="bg-orange-500/10 text-orange-500 px-2 py-0.5 rounded text-xs font-bold border border-orange-500/20">3 pedidos</span>
                              </div>

                              <div className="space-y-3 flex-1">
                                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-slate-600 hover:bg-slate-800 transition-all cursor-pointer group relative overflow-hidden">
                                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500"></div>
                                  <div className="flex justify-between items-start mb-3">
                                    <div>
                                      <div className="text-white text-sm font-bold group-hover:text-emerald-400 transition-colors">Samuel</div>
                                      <div className="text-slate-500 text-xs flex items-center gap-1 mt-0.5">
                                        <Clock size={10} /> Há 2 min
                                      </div>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-white text-sm font-bold">R$ 214,62</div>
                                      <div className="text-slate-500 text-[10px]">8 itens</div>
                                    </div>
                                  </div>
                                  <div className="flex gap-2">
                                    <button className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium py-1.5 rounded-md transition-colors shadow-lg shadow-emerald-900/20">
                                      Faturar
                                    </button>
                                    <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-xs font-medium py-1.5 rounded-md transition-colors">
                                      Imprimir
                                    </button>
                                  </div>
                                </div>

                                <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50 opacity-75 hover:opacity-100 transition-all cursor-pointer">
                                  <div className="flex justify-between items-start mb-1">
                                    <div>
                                      <div className="text-slate-300 text-sm font-bold">Mariana</div>
                                      <div className="text-slate-600 text-xs flex items-center gap-1">
                                        <Clock size={10} /> Há 5 min
                                      </div>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-slate-300 text-sm font-bold">R$ 89,90</div>
                                      <div className="text-slate-600 text-[10px]">3 itens</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Concluídos */}
                            <div className="bg-[#1e293b] rounded-xl border border-slate-700 p-5 hidden lg:block h-full">
                              <div className="flex justify-between items-center mb-5">
                                <h3 className="text-white text-sm font-bold flex items-center gap-2">
                                  <CheckCircle size={14} className="text-emerald-500" />
                                  Concluídos Recentes
                                </h3>
                                <button className="text-slate-400 hover:text-white text-xs flex items-center gap-1 transition-colors">
                                  Ver todos <ArrowRight size={10} />
                                </button>
                              </div>
                              <div className="space-y-2">
                                {[1, 2, 3, 4].map((_, i) => (
                                  <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer border border-transparent hover:border-slate-700">
                                    <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs text-slate-300 font-bold">
                                        C{i + 1}
                                      </div>
                                      <div>
                                        <div className="text-slate-200 text-xs font-medium">Pedido #{2430 + i}</div>
                                        <div className="text-slate-500 text-[10px]">Entregue às 14:3{i}</div>
                                      </div>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-emerald-500 text-xs font-bold">R$ {100 + i * 50},00</div>
                                      <div className="text-slate-600 text-[10px]">Pix</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* VIEW: CUSTOMERS */}
                    {activeTab === 'customers' && (
                      <div className="flex flex-col h-full animate-fadeIn">
                        {/* Header */}
                        <div className="h-16 border-b border-slate-700 flex items-center justify-between px-6 flex-shrink-0 bg-[#0f172a]/50 backdrop-blur-sm">
                          <div>
                            <h2 className="text-white font-bold text-sm sm:text-base">Clientes</h2>
                            <p className="text-slate-500 text-[10px] sm:text-xs">Base de contatos</p>
                          </div>
                          <div className="bg-slate-800 rounded-full px-4 py-2 flex items-center gap-2 border border-slate-700 focus-within:border-emerald-500/50 transition-colors w-32 sm:w-64">
                            <Search size={14} className="text-slate-500" />
                            <input type="text" placeholder="Buscar cliente por nome ou telefone..." className="bg-transparent border-none text-xs text-white focus:outline-none w-full" />
                          </div>
                        </div>

                        <div className="p-4 sm:p-8 overflow-y-auto custom-scrollbar flex-1 pb-20 md:pb-8">
                          <div className="bg-[#1e293b] rounded-xl border border-slate-700 overflow-hidden shadow-lg">
                            <table className="w-full text-left">
                              <thead>
                                <tr className="border-b border-slate-700 bg-slate-800/50">
                                  <th className="px-6 py-4 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Cliente</th>
                                  <th className="px-6 py-4 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Contato</th>
                                  <th className="px-6 py-4 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider hidden lg:table-cell">Endereço</th>
                                  <th className="px-6 py-4 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider text-right">LTV</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-700/50">
                                {customersData.map((customer, i) => (
                                  <tr key={i} className="hover:bg-slate-800/50 transition-colors group cursor-pointer">
                                    <td className="px-6 py-4">
                                      <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-white font-bold">
                                          {customer.name.substring(0, 2).toUpperCase()}
                                        </div>
                                        <div className="text-white text-sm font-medium">{customer.name}</div>
                                      </div>
                                    </td>
                                    <td className="px-6 py-4">
                                      <div className="flex items-center gap-2 text-slate-400 text-xs">
                                        <Phone size={12} />
                                        {customer.phone}
                                      </div>
                                    </td>
                                    <td className="px-6 py-4 hidden lg:table-cell">
                                      <div className="flex items-center gap-2 text-slate-400 text-xs">
                                        <MapPin size={12} />
                                        <span className="truncate max-w-[150px]">{customer.address}</span>
                                      </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                      <div className="flex flex-col items-end">
                                        <span className="text-emerald-400 font-bold text-sm">{customer.orders} pedidos</span>
                                        <span className="text-slate-500 text-[10px]">Último: Hoje</span>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* VIEW: ANALYTICS */}
                    {activeTab === 'analytics' && (
                      <div className="flex flex-col h-full animate-fadeIn bg-[#0f172a]">
                        {/* Header */}
                        <div className="h-16 border-b border-slate-700 flex items-center justify-between px-6 flex-shrink-0 bg-[#0f172a]/50 backdrop-blur-sm">
                          <div>
                            <h2 className="text-white font-bold text-base sm:text-lg">Analytics</h2>
                            <p className="text-slate-400 text-[10px] sm:text-xs">Análise detalhada das vendas e performance</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="relative hidden sm:block">
                              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                <Search size={14} />
                              </div>
                              <input type="text" placeholder="Buscar..." className="pl-9 pr-4 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300 w-48 focus:outline-none" />
                            </div>
                            <button className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800"><Moon size={18} /></button>
                            <button className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 relative">
                              <Bell size={18} />
                              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0f172a]"></span>
                            </button>
                          </div>
                        </div>

                        <div className="p-4 sm:p-8 overflow-y-auto custom-scrollbar flex-1 pb-20 md:pb-8">
                          {/* Date Filter */}
                          <div className="flex items-center gap-2 mb-6">
                            <div className="relative">
                              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                <Calendar size={14} />
                              </div>
                              <select className="pl-9 pr-8 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300 font-medium focus:outline-none appearance-none cursor-pointer hover:bg-slate-700 transition-colors">
                                <option>Últimos 30 dias</option>
                              </select>
                            </div>
                          </div>

                          {/* KPI Cards */}
                          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
                            <div className="bg-[#1e293b] p-5 rounded-xl border border-slate-700 relative overflow-hidden">
                              <div className="flex justify-between items-start mb-2">
                                <span className="text-slate-400 text-xs font-medium">Total de Vendas</span>
                                <DollarSign size={16} className="text-emerald-500" />
                              </div>
                              <h3 className="text-xl font-bold text-emerald-500">R$ 100.061</h3>
                            </div>
                            <div className="bg-[#1e293b] p-5 rounded-xl border border-slate-700 relative overflow-hidden">
                              <div className="flex justify-between items-start mb-2">
                                <span className="text-slate-400 text-xs font-medium">Total de Pedidos</span>
                                <ShoppingBag size={16} className="text-blue-500" />
                              </div>
                              <h3 className="text-xl font-bold text-blue-500">1.150</h3>
                            </div>
                            <div className="bg-[#1e293b] p-5 rounded-xl border border-slate-700 relative overflow-hidden">
                              <div className="flex justify-between items-start mb-2">
                                <span className="text-slate-400 text-xs font-medium">Ticket Médio</span>
                                <TrendingUp size={16} className="text-purple-500" />
                              </div>
                              <h3 className="text-xl font-bold text-purple-500">R$ 87</h3>
                            </div>
                            <div className="bg-[#1e293b] p-5 rounded-xl border border-slate-700 relative overflow-hidden">
                              <div className="flex justify-between items-start mb-2">
                                <span className="text-slate-400 text-xs font-medium">Crescimento</span>
                                <TrendingUp size={16} className="text-emerald-500" />
                              </div>
                              <div className="flex items-baseline gap-1">
                                <h3 className="text-xl font-bold text-emerald-500">+42.4</h3>
                                <span className="text-slate-400 text-sm">%</span>
                              </div>
                            </div>
                          </div>

                          {/* Charts Row 1 */}
                          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 mb-6">
                            {/* Bar Chart */}
                            <div className="bg-[#1e293b] p-5 rounded-xl border border-slate-700 shadow-lg flex flex-col h-80">
                              <h3 className="font-bold text-white text-sm mb-4">Vendas por Período</h3>
                              <div className="flex-1 w-full" style={{ minHeight: '200px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                  <BarChart data={salesData} barSize={100}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                                    <XAxis
                                      dataKey="name"
                                      axisLine={false}
                                      tickLine={false}
                                      tick={{ fill: '#94a3b8', fontSize: 10 }}
                                      dy={10}
                                    />
                                    <YAxis
                                      axisLine={false}
                                      tickLine={false}
                                      tick={{ fill: '#94a3b8', fontSize: 10 }}
                                      tickFormatter={(value) => `${value / 1000}k`}
                                    />
                                    <RechartsTooltip
                                      cursor={{ fill: '#334155', opacity: 0.2 }}
                                      contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: '1px solid #334155', color: '#fff' }}
                                      itemStyle={{ color: '#22c55e' }}
                                    />
                                    <Bar dataKey="sales" fill="#22c55e" radius={[2, 2, 0, 0]} />
                                  </BarChart>
                                </ResponsiveContainer>
                              </div>
                            </div>

                            {/* Pie Chart */}
                            <div className="bg-[#1e293b] p-5 rounded-xl border border-slate-700 shadow-lg flex flex-col h-80">
                              <h3 className="font-bold text-white text-sm mb-4">Status dos Pedidos</h3>
                              <div className="flex-1 w-full relative" style={{ minHeight: '200px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                  <PieChart>
                                    <Pie
                                      data={pieData}
                                      cx="50%"
                                      cy="50%"
                                      innerRadius={0}
                                      outerRadius={90}
                                      fill="#8884d8"
                                      paddingAngle={2}
                                      dataKey="value"
                                      startAngle={90}
                                      endAngle={-270}
                                      stroke="none"
                                    >
                                      {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                      ))}
                                    </Pie>
                                    <RechartsTooltip contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: '1px solid #334155', color: '#fff' }} />
                                  </PieChart>
                                </ResponsiveContainer>
                              </div>
                            </div>
                          </div>

                          {/* Charts Row 2 */}
                          <div className="bg-[#1e293b] p-5 rounded-xl border border-slate-700 shadow-lg h-80 flex flex-col">
                            <h3 className="font-bold text-white text-sm mb-4">Vendas dos Últimos 7 Dias</h3>
                            <div className="flex-1 w-full" style={{ minHeight: '150px' }}>
                              <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={trendData}>
                                  <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                  </defs>
                                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                                  <XAxis hide />
                                  <YAxis hide />
                                  <RechartsTooltip contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: '1px solid #334155', color: '#fff' }} />
                                  <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                                </AreaChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Mobile Navigation (Bottom Bar) */}
                    <div className="md:hidden absolute bottom-0 left-0 right-0 bg-[#1e293b] border-t border-slate-700 px-6 py-2 flex justify-between items-center z-30">
                      <button
                        onClick={() => setActiveTab('orders')}
                        className={`flex flex-col items-center gap-1 ${activeTab === 'orders' ? 'text-emerald-500' : 'text-slate-400'}`}
                      >
                        <ShoppingCart size={20} />
                        <span className="text-[10px] font-medium">Pedidos</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('customers')}
                        className={`flex flex-col items-center gap-1 ${activeTab === 'customers' ? 'text-emerald-500' : 'text-slate-400'}`}
                      >
                        <Users size={20} />
                        <span className="text-[10px] font-medium">Clientes</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('analytics')}
                        className={`flex flex-col items-center gap-1 ${activeTab === 'analytics' ? 'text-emerald-500' : 'text-slate-400'}`}
                      >
                        <BarChart3 size={20} />
                        <span className="text-[10px] font-medium">Analytics</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Carousel (Marquee Left to Right) */}
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="w-full overflow-hidden">
          <div className="text-center mb-8">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              Parceiro Oficial de Grandes Mercados
            </p>
          </div>

          <div className="relative flex overflow-x-hidden group">
            <div className="flex animate-marquee-right whitespace-nowrap gap-16 py-4">
              {/* Duplicate list 4 times to ensure seamless loop on large screens */}
              {[...supermarkets, ...supermarkets, ...supermarkets, ...supermarkets].map((name, i) => (
                <div key={i} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-default grayscale hover:grayscale-0">
                  <Building2 className="text-emerald-600" size={24} />
                  <span className="text-xl font-bold text-gray-700">{name}</span>
                </div>
              ))}
            </div>

            {/* Fade Edges */}
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-gray-50/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-600 font-bold tracking-wide uppercase text-sm">Consultoria Tech</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Tecnologia de ponta e infraestrutura</h2>
            <p className="text-xl text-gray-600">Não vendemos apenas software. Fornecemos inteligência computacional para sua operação.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Bot size={100} className="text-emerald-500" />
              </div>
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <Bot size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Agentes IA Dedicados</h3>
              <p className="text-gray-600 leading-relaxed">
                Substitua call-centers por agentes de inteligência artificial que atendem, vendem e resolvem problemas 24/7.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cpu size={100} className="text-cyan-500" />
              </div>
              <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600 mb-6">
                <Cpu size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Processamento em Nuvem</h3>
              <p className="text-gray-600 leading-relaxed">
                Utilizamos GPUs de alta performance para analisar o comportamento do seu cliente em tempo real.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Server size={100} className="text-indigo-500" />
              </div>
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                <Server size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Infraestrutura Escalonável</h3>
              <p className="text-gray-600 leading-relaxed">
                Sua operação não para. Garantimos 99.9% de uptime com servidores distribuídos e backup automático.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Planos de Consultoria</h2>
            <p className="text-xl text-gray-600">Pacotes estruturados para garantir o ROI da sua operação com Inteligência Artificial.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm hover:bg-white hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900">Smart</h3>
              <div className="mt-4 mb-6">
                <span className="text-2xl font-bold text-gray-900">Sob Medida</span>
              </div>
              <div className="text-xs font-bold text-emerald-600 bg-emerald-50 inline-block px-2 py-1 rounded mb-4">
                Ideal para operações compactas
              </div>
              <ul className="space-y-4 mb-8">
                {['Até 50 pedidos/dia', 'IA de Atendimento Standard', '1 PDV Incluso', 'Integração WhatsApp Oficial', 'Setup Assistido'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <Check size={18} className="text-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-4 border border-emerald-500 text-emerald-600 rounded-lg font-bold hover:bg-emerald-50 transition-colors">
                Solicitar Proposta
              </button>
            </div>

            {/* Pro - Featured */}
            <div className="bg-white rounded-2xl p-8 border-2 border-emerald-500 shadow-2xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                Alta Performance
              </div>
              <h3 className="text-lg font-bold text-gray-900">Growth AI</h3>
              <div className="mt-4 mb-6">
                <span className="text-2xl font-bold text-gray-900">Personalizado</span>
              </div>
              <div className="text-xs font-bold text-blue-600 bg-blue-50 inline-block px-2 py-1 rounded mb-4">
                Foco em Escala e Retenção
              </div>
              <ul className="space-y-4 mb-8">
                {['Até 100 pedidos/dia', 'Agentes de IA Treináveis', 'CRM Preditivo', 'App do Entregador', 'Gerente de Conta Dedicado'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="bg-emerald-100 rounded-full p-0.5">
                      <Check size={14} className="text-emerald-600 flex-shrink-0" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-emerald-500/30 transition-all">
                Agendar Diagnóstico
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm hover:bg-white hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900">Enterprise</h3>
              <div className="mt-4 mb-6">
                <span className="text-2xl font-bold text-gray-900">Sob Consulta</span>
              </div>
              <div className="text-xs font-bold text-purple-600 bg-purple-50 inline-block px-2 py-1 rounded mb-4">
                Para Redes e Franquias
              </div>
              <ul className="space-y-4 mb-8">
                {['Volume ilimitado', 'Infraestrutura Dedicada', 'API Personalizada', 'Treinamento In-loco', 'SLA Garantido'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <Check size={18} className="text-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-4 border border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold">O futuro do seu supermercado começa hoje</h2>
          <p className="text-xl text-slate-300">Entre para o time de varejistas que mais crescem no Brasil com a tecnologia Aimerc.</p>
          <div className="flex justify-center pt-4">
            <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-colors shadow-xl flex items-center gap-2">
              Agendar Demonstração
              <ArrowRight size={20} className="text-emerald-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      {/* Footer Links */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Aimerc" style={{ height: '40px', width: 'auto' }} />
            <span className="text-sm text-gray-500">Tecnologia para supermercados</span>
          </div>

          <div className="flex items-center gap-8 text-sm text-gray-500">
            <span>&copy; 2025 Aimerc</span>
            <a href="#" className="hover:text-emerald-600 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
};