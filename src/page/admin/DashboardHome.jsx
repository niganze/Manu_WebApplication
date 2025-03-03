import React, { useState } from 'react';
import { Users, Package, Gift, Folder, Activity, BarChart2, Calendar, AlertCircle } from 'lucide-react';

const DashboardHome = () => {
  // Sample data - would be fetched from API in real application
  const [stats, setStats] = useState({
    users: 2458,
    items: 1204,
    donations: 583,
    projects: 47,
  });

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, type: 'New User', name: 'John Doe', time: '10 minutes ago' },
    { id: 2, type: 'New Item', name: 'Construction Bricks (500 pcs)', time: '25 minutes ago' },
    { id: 3, type: 'New Donation', name: 'Cement Bags (20 bags)', time: '1 hour ago' },
    { id: 4, type: 'New Project', name: 'Community Garden Shed', time: '3 hours ago' },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with Manu Project.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Users Card */}
        <div className="bg-white rounded-lg shadow p-6 flex items-center">
          <div className="bg-purple-100 p-3 rounded-full">
            <Users className="text-purple-600" size={24} />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">Total Users</p>
            <h2 className="text-3xl font-bold text-gray-800">{stats.users.toLocaleString()}</h2>
          </div>
        </div>

        {/* Items Card */}
        <div className="bg-white rounded-lg shadow p-6 flex items-center">
          <div className="bg-blue-100 p-3 rounded-full">
            <Package className="text-blue-600" size={24} />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">Listed Items</p>
            <h2 className="text-3xl font-bold text-gray-800">{stats.items.toLocaleString()}</h2>
          </div>
        </div>

        {/* Donations Card */}
        <div className="bg-white rounded-lg shadow p-6 flex items-center">
          <div className="bg-green-100 p-3 rounded-full">
            <Gift className="text-green-600" size={24} />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">Total Donations</p>
            <h2 className="text-3xl font-bold text-gray-800">{stats.donations.toLocaleString()}</h2>
          </div>
        </div>

        {/* Projects Card */}
        <div className="bg-white rounded-lg shadow p-6 flex items-center">
          <div className="bg-amber-100 p-3 rounded-full">
            <Folder className="text-amber-600" size={24} />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">Active Projects</p>
            <h2 className="text-3xl font-bold text-gray-800">{stats.projects.toLocaleString()}</h2>
          </div>
        </div>
      </div>

      {/* Secondary Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Recent Activity</h3>
            <button className="text-sm text-purple-600 hover:text-purple-800">View All</button>
          </div>
          <div className="space-y-4">
            {recentActivity.map(activity => (
              <div key={activity.id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                <div className="p-2 rounded-full bg-gray-100">
                  {activity.type === 'New User' && <Users size={16} className="text-purple-600" />}
                  {activity.type === 'New Item' && <Package size={16} className="text-blue-600" />}
                  {activity.type === 'New Donation' && <Gift size={16} className="text-green-600" />}
                  {activity.type === 'New Project' && <Folder size={16} className="text-amber-600" />}
                </div>
                <div className="ml-3">
                  <p className="text-gray-800 font-medium">{activity.name}</p>
                  <p className="text-gray-500 text-sm">{activity.type} · {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Access */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Quick Access</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
              <Activity size={20} className="text-purple-600 mb-2" />
              <span className="text-sm text-gray-700">Analytics</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
              <BarChart2 size={20} className="text-blue-600 mb-2" />
              <span className="text-sm text-gray-700">Reports</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
              <Calendar size={20} className="text-green-600 mb-2" />
              <span className="text-sm text-gray-700">Events</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
              <AlertCircle size={20} className="text-red-600 mb-2" />
              <span className="text-sm text-gray-700">Flagged</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;



