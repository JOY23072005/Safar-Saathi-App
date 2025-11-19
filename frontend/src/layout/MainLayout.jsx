import React, { useState, useEffect } from 'react';
import { Menu, Filter, Download, Activity, Map, Users } from 'lucide-react';
import { generateMockTrips } from '../utils/generateMockTrips';
import Dashboard from '../pages/Dashboard';
import Trips from '../pages/Trips';
import UsersPage from '../pages/Users';

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    setTrips(generateMockTrips());
  }, []);

  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'trips', label: 'Trips', icon: Map },
    { id: 'users', label: 'Users', icon: Users }
  ];

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-slate-900 to-slate-800 text-white transition-all duration-300 flex flex-col shadow-xl`}>
        <div className="p-6 flex items-center justify-between border-b border-slate-700">
          {sidebarOpen && <h1 className="text-xl font-bold">NATPAC</h1>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
            <Menu size={20} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navigation.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                currentPage === item.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/50'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        {sidebarOpen && (
          <div className="p-4 border-t border-slate-700">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <p className="text-xs text-slate-400 mb-2">System Status</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm">All Systems Operational</span>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {navigation.find(n => n.id === currentPage)?.label}
              </h2>
              <p className="text-sm text-slate-500 mt-1">Travel behavior analysis and visualization</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
                <Filter size={16} />
                <span className="text-sm font-medium">Filters</span>
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-lg shadow-indigo-500/30">
                <Download size={16} />
                <span className="text-sm font-medium">Export</span>
              </button>
            </div>
          </div>
        </header>

        {/* Dynamic content */}
        <main className="flex-1 overflow-auto p-8">
          {currentPage === 'dashboard' && <Dashboard trips={trips} />}
          {currentPage === 'trips' && <Trips trips={trips} />}
          {currentPage === 'users' && <UsersPage />}
        </main>
      </div>
    </div>
  );
}