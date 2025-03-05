import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  LineChart, 
  Line 
} from 'recharts';
import { 
  Download, 
  Flag, 
  Users, 
  Box, 
  TrendingUp, 
  MapPin 
} from 'lucide-react';

const Reports = () => {
  // Marketplace Statistics
  const marketplaceStats = [
    { category: 'Bricks', listed: 500, sold: 250, available: 250 },
    { category: 'Cement', listed: 300, sold: 150, available: 150 },
    { category: 'Timber', listed: 200, sold: 100, available: 100 },
    { category: 'Other', listed: 150, sold: 75, available: 75 }
  ];

  // Donation Analytics
  const donationAnalytics = [
    { name: 'Construction', value: 40, color: '#ABA1FF' },
    { name: 'Education', value: 30, color: '#4ECDC4' },
    { name: 'Healthcare', value: 20, color: '#FF6B6B' },
    { name: 'Other', value: 10, color: '#A8DADC' }
  ];

  // User Engagement
  const userEngagement = [
    { month: 'Jan', buyers: 120, sellers: 80 },
    { month: 'Feb', buyers: 150, sellers: 100 },
    { month: 'Mar', buyers: 180, sellers: 120 },
    { month: 'Apr', buyers: 200, sellers: 140 },
    { month: 'May', buyers: 220, sellers: 160 },
    { month: 'Jun', buyers: 250, sellers: 180 },
    { month: 'Jul', buyers: 270, sellers: 200 },
    { month: 'Aug', buyers: 300, sellers: 220 },
    { month: 'Sep', buyers: 320, sellers: 240 },
    { month: 'Oct', buyers: 340, sellers: 260 },
    { month: 'Nov', buyers: 360, sellers: 280 },
    { month: 'Dec', buyers: 400, sellers: 300 }
  ];
  

  // Top Donors & Beneficiaries
  const topDonors = [
    { name: 'Corporate Donor A', donations: 50 },
    { name: 'Individual Donor B', donations: 30 },
    { name: 'Community Group C', donations: 20 }
  ];

  // Export Report Handler
  const handleExportReport = (type) => {
    console.log(`Exporting ${type} report`);
    // Implement actual export logic
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-500 flex ">
            <TrendingUp className="mr-4 text-[#ABA1FF]" /> 
            Admin Reports Dashboard
          </h1>
          <div className="flex gap-4">
            <button 
              onClick={() => handleExportReport('PDF')}
              className="bg-[#ABA1FF] text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors flex items-center"
            >
              <Download className="mr-2 w-4 h-4" /> Export PDF
            </button>
            <button 
              onClick={() => handleExportReport('CSV')}
              className="bg-green-200 text-white py-2 px-4 rounded-lg hover:bg-green-300 transition-colors flex items-center"
            >
              <Download className="mr-2 w-4 h-4" /> Export CSV
            </button>
          </div>
        </div>

        {/* Marketplace Statistics */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
          <div className="flex items-center mb-4">
            <Box className="mr-3 text-[#ABA1FF]" />
            <h2 className="text-xl font-semibold text-gray-800">
              Marketplace Statistics
            </h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={marketplaceStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="listed" fill="#ABA1FF" name="Listed Items" />
              <Bar dataKey="sold" fill="#4ECDC4" name="Sold Items" />
              <Bar dataKey="available" fill="#FF6B6B" name="Available Items" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Donation Analytics */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Donation Categories */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Users className="mr-3 text-[#ABA1FF]" />
              <h2 className="text-xl font-semibold text-gray-800">
                Donation Categories
              </h2>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={donationAnalytics}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {donationAnalytics.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Top Donors */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Flag className="mr-3 text-[#ABA1FF]" />
              <h2 className="text-xl font-semibold text-gray-800">
                Top Donors
              </h2>
            </div>
            <div className="space-y-4">
              {topDonors.map((donor, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
                >
                  <span className="font-medium text-gray-700">{donor.name}</span>
                  <span className="text-[#ABA1FF] font-bold">
                    {donor.donations} Donations
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User Engagement */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <div className="flex items-center mb-4">
            <MapPin className="mr-3 text-[#ABA1FF]" />
            <h2 className="text-xl font-semibold text-gray-800">
              User Engagement Trends
            </h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userEngagement}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="buyers" 
                stroke="#ABA1FF" 
                name="Buyers"
              />
              <Line 
                type="monotone" 
                dataKey="sellers" 
                stroke="#4ECDC4" 
                name="Sellers"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Reports;