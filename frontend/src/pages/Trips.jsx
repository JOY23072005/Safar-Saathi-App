import React from 'react';

const Trips = ({ trips }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200">
    <div className="p-6 border-b border-slate-200">
      <h3 className="text-lg font-semibold text-slate-900">All Trips</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">User</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Mode</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Start</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">End</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Points</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {trips.map(trip => (
            <tr key={trip._id} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 text-sm font-mono text-slate-600">{trip._id.slice(-8)}</td>
              <td className="px-6 py-4 text-sm text-slate-900">{trip.userId}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  trip.mode === 'car' ? 'bg-blue-100 text-blue-700' :
                  trip.mode === 'bus' ? 'bg-purple-100 text-purple-700' :
                  trip.mode === 'metro' ? 'bg-pink-100 text-pink-700' :
                  trip.mode === 'bike' ? 'bg-amber-100 text-amber-700' :
                  'bg-emerald-100 text-emerald-700'
                }`}>
                  {trip.mode}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">{new Date(trip.start).toLocaleString()}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{new Date(trip.end).toLocaleString()}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{trip.points.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Trips;
