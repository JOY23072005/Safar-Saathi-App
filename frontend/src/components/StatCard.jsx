import React from 'react';
import { TrendingUp } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, trend, color }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <p className="text-sm font-medium text-slate-600 mb-1">{label}</p>
        <p className="text-3xl font-bold text-slate-900">{value}</p>
        {trend && (
          <p className="text-sm text-emerald-600 mt-2 flex items-center gap-1">
            <TrendingUp size={14} />
            {trend}
          </p>
        )}
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
    </div>
  </div>
);

export default StatCard;
