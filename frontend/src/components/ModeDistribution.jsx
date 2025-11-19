import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ModeDistribution = ({ trips }) => {
  const modeCount = trips.reduce((acc, trip) => {
    acc[trip.mode] = (acc[trip.mode] || 0) + 1;
    return acc;
  }, {});

  const data = Object.entries(modeCount).map(([mode, count]) => ({
    mode: mode.charAt(0).toUpperCase() + mode.slice(1),
    count
  }));

  const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="mode" tick={{ fill: '#64748b', fontSize: 12 }} />
          <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: 'none',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
          <Bar dataKey="count" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ModeDistribution;
