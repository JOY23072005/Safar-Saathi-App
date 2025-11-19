import React from 'react';
import StatCard from '../components/StatCard';
import ModeDistribution from '../components/ModeDistribution';
import PeakHoursChart from '../components/PeakHoursChart';
import TripsList from '../components/TripsList';
import MapPlaceholder from '../components/MapPlaceholder';
import { Map, Users, Clock } from 'lucide-react';

const Dashboard = ({ trips }) => {
  const totalTrips = trips.length;
  const activeUsers = new Set(trips.map(t => t.userId)).size;
  const avgDuration =
    trips.reduce((sum, t) => sum + (new Date(t.end) - new Date(t.start)), 0) /
    trips.length /
    60000;

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard icon={Map} label="Total Trips" value={totalTrips} trend="+12% this week" color="bg-gradient-to-br from-indigo-500 to-indigo-600" />
        <StatCard icon={Users} label="Active Users" value={activeUsers} trend="+5 new users" color="bg-gradient-to-br from-purple-500 to-purple-600" />
        <StatCard icon={Clock} label="Avg Duration" value={`${avgDuration.toFixed(0)}m`} trend="-8% vs last week" color="bg-gradient-to-br from-pink-500 to-pink-600" />
      </div>

      {/* Main Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Trip Heatmap</h3>
          <div className="h-96">
            <MapPlaceholder trips={trips} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Peak Hours</h3>
          <PeakHoursChart trips={trips} />
        </div>
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Mode Distribution</h3>
          <ModeDistribution trips={trips} />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Trips</h3>
          <TripsList trips={trips} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
