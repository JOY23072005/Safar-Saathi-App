import React from 'react';

const TripsList = ({ trips, limit = 5 }) => {
  const modeColors = {
    car: 'bg-blue-100 text-blue-700',
    bus: 'bg-purple-100 text-purple-700',
    metro: 'bg-pink-100 text-pink-700',
    bike: 'bg-amber-100 text-amber-700',
    walk: 'bg-emerald-100 text-emerald-700'
  };

  return (
    <div className="space-y-3">
      {trips.slice(0, limit).map(trip => (
        <div
          key={trip._id}
          className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <div className="flex items-center gap-4 flex-1">
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${modeColors[trip.mode]}`}>
              {trip.mode.toUpperCase()}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-900">{trip.userId}</p>
              <p className="text-xs text-slate-500 mt-0.5">
                {new Date(trip.start).toLocaleDateString()} •{' '}
                {new Date(trip.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500">{trip.points.length} points</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TripsList;
