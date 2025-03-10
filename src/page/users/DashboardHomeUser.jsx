import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

function DashboardHomeUser() {
  // Sample data - in a real app, this would come from your API
  const [userData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    joinedDate: "Jan 2024",
    totalListings: 18,
    activeSales: 7,
    completedSales: 9,
    donations: 4,
    savedItems: 12,
    totalViews: 540,
    totalInquiries: 32,
    impactStats: {
      wasteReduced: 230, // kg
      carbonSaved: 180, // kg
      waterSaved: 4500, // liters
    }
  });

  // Activity data for the line chart
  const activityData = [
    { month: 'Sep', listings: 2, views: 45, inquiries: 3 },
    { month: 'Oct', listings: 4, views: 78, inquiries: 5 },
    { month: 'Nov', listings: 3, views: 92, inquiries: 7 },
    { month: 'Dec', listings: 2, views: 85, inquiries: 6 },
    { month: 'Jan', listings: 5, views: 120, inquiries: 8 },
    { month: 'Feb', listings: 2, views: 120, inquiries: 3 },
  ];

  // Listing status data for the pie chart
  const listingStatusData = [
    { name: 'Active Sales', value: userData.activeSales },
    { name: 'Completed Sales', value: userData.completedSales },
    { name: 'Donations', value: userData.donations },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  // Mock recent listings data
  const recentListings = [
    { id: 1, title: "Surplus Bricks (500 units)", type: "For Sale", price: "$120", status: "Active", views: 48, date: "Feb 22, 2025" },
    { id: 2, title: "Used Scaffolding", type: "For Sale", price: "$350", status: "Active", views: 32, date: "Feb 18, 2025" },
    { id: 3, title: "Wooden Pallets", type: "Donation", price: "Free", status: "Active", views: 27, date: "Feb 15, 2025" },
    { id: 4, title: "Ceramic Tiles (20 sq meters)", type: "For Sale", price: "$85", status: "Completed", views: 64, date: "Feb 10, 2025" },
  ];

  // Mock recent inquiries
  const recentInquiries = [
    { id: 1, item: "Surplus Bricks", from: "Sarah Johnson", message: "Are these still available? I'm interested in...", date: "Mar 8, 2025", status: "Unread" },
    { id: 2, item: "Used Scaffolding", from: "Mike Chen", message: "Is delivery possible to the downtown area?", date: "Mar 5, 2025", status: "Read" },
    { id: 3, item: "Wooden Pallets", from: "Community Center", message: "We would love to use these for our garden project.", date: "Mar 2, 2025", status: "Replied" },
  ];

  return (
    <div className="px-4 py-6 bg-gray-50 min-h-screen">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Welcome back, {userData.name}!</h1>
        <p className="text-gray-600">Here's what's happening with your Manu Project activities</p>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-sm text-gray-500 mb-1">Total Listings</p>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">{userData.totalListings}</span>
            <svg className="w-4 h-4 ml-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-sm text-gray-500 mb-1">Active Sales</p>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">{userData.activeSales}</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-sm text-gray-500 mb-1">Total Views</p>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">{userData.totalViews}</span>
            <svg className="w-4 h-4 ml-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-sm text-gray-500 mb-1">Inquiries</p>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">{userData.totalInquiries}</span>
            <span className="ml-2 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">3 new</span>
          </div>
        </div>
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Activity Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Activity Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="views" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line yAxisId="left" type="monotone" dataKey="inquiries" stroke="#82ca9d" />
              <Line yAxisId="right" type="monotone" dataKey="listings" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        {/* Listing Status Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Listing Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={listingStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {listingStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Environmental Impact */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Environmental Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">{userData.impactStats.wasteReduced} kg</div>
            <p className="text-sm text-gray-600">Waste Reduced</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">{userData.impactStats.carbonSaved} kg</div>
            <p className="text-sm text-gray-600">Carbon Emissions Saved</p>
          </div>
          <div className="text-center p-4 bg-cyan-50 rounded-lg">
            <div className="text-3xl font-bold text-cyan-600 mb-2">{userData.impactStats.waterSaved.toLocaleString()} L</div>
            <p className="text-sm text-gray-600">Water Conserved</p>
          </div>
        </div>
      </div>
      
      {/* Recent Listings and Inquiries */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Listings */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Recent Listings</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentListings.map((listing) => (
                  <tr key={listing.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{listing.title}</div>
                      <div className="text-sm text-gray-500">{listing.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{listing.type}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{listing.price}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        listing.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {listing.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {listing.views}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 text-right">
            <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
              View All Listings
            </button>
          </div>
        </div>
        
        {/* Recent Inquiries */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Recent Inquiries</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {recentInquiries.map((inquiry) => (
              <div key={inquiry.id} className="px-6 py-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {inquiry.from} <span className="text-gray-500">about {inquiry.item}</span>
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 truncate">{inquiry.message}</p>
                    <p className="mt-1 text-xs text-gray-500">{inquiry.date}</p>
                  </div>
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    inquiry.status === 'Unread' ? 'bg-red-100 text-red-800' : 
                    inquiry.status === 'Replied' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {inquiry.status}
                  </span>
                </div>
                <div className="mt-2 flex space-x-2 justify-end">
                  <button className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                    View
                  </button>
                  <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-white bg-blue-600 hover:bg-blue-700">
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 text-right">
            <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
              View All Inquiries
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHomeUser;