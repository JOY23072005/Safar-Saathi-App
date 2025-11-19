import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const PeakHoursChart = ({ trips }) => {
  const counts = Array.from({ length: 24 }, (_, i) => ({ hour: i, count: 0 }));
  trips.forEach(t => counts[new Date(t.start).getHours()].count++);

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={counts}>
          <XAxis dataKey="hour" tick={{ fill: '#64748b', fontSize: 11 }} />
          <YAxis tick={{ fill: '#64748b', fontSize: 11 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: 'none',
              borderRadius: '8px',
              color: '#fff'
            }}
            formatter={value => [`${value} trips`, 'Count']}
          />
          <Bar dataKey="count" fill="#6366f1" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PeakHoursChart;
