import React from 'react';
import { Users, Package, Gift, Folder, Activity, BarChart2, Calendar, AlertCircle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useEffect,useState } from 'react';
import axios from 'axios';
const DashboardHome = () => {
  // Sample data - would be fetched from API in real application
  const [user,setUser]=useState([]);
  useEffect(()=>
  {
    
    const getUsers=async()=>{
      try{
        const response=await axios.get(`https://manu-backend-6i7q.onrender.com/user/getAllUsers`)
        setUser(response.data);
      }
      catch(error)
      {
        console.log(error);
      }
    };
    getUsers();
  }
  ,[])


  const [property, setProperty] = useState([]);
  useEffect(() => {
    const getAllProperty = async () => {
      try {
        const res = await axios.get(
          `https://manu-backend-6i7q.onrender.com/project/getAllProjects`
        );
        setProperty(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProperty();
  }, []);
  const [stats, setStats] = useState({
    users: 2458,
    items: 1204,
    donations: 583,
    projects: 47,
  });

  const [market, setMarket] = useState([]);
   useEffect(() => {
      const getAllProperty = async () => {
        try {
          const res = await axios.get(`https://manu-backend-6i7q.onrender.com/marketItem/getAllMarkets`);
          setMarket(res.data);
          console.log(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      getAllProperty();
    }, []);

    const[blog,setBlog]=useState(false) 
  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const res = await axios.get(`https://manu-backend-6i7q.onrender.com/blog/getAllBlogs`);
        setBlog(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllBlogs();
  }, []);

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, type: 'New User', name: 'John Doe', time: '10 minutes ago' },
    { id: 2, type: 'New Item', name: 'Construction Bricks (500 pcs)', time: '25 minutes ago' },
    { id: 3, type: 'New Donation', name: 'Cement Bags (20 bags)', time: '1 hour ago' },
    { id: 4, type: 'New Project', name: 'Community Garden Shed', time: '3 hours ago' },
  ]);

  // Monthly user growth data for line chart
  const userGrowthData = [
    { name: 'Jan', users: 1200 },
    { name: 'Feb', users: 1500 },
    { name: 'Mar', users: 1700 },
    { name: 'Apr', users: 1900 },
    { name: 'May', users: 2100 },
    { name: 'Jun', users: 2300 },
    { name: 'Jul', users: 2458 },
  ];

  // Category distribution data for bar chart
  const itemCategoryData = [
    { name: 'Bricks', count: 340 },
    { name: 'Cement', count: 270 },
    { name: 'Wood', count: 190 },
    { name: 'Metal', count: 220 },
    { name: 'Tools', count: 150 },
    { name: 'Other', count: 240 },
  ];

  // Data for donation impact pie chart
  const donationImpactData = [
    { name: 'Schools', value: 35 },
    { name: 'Housing', value: 25 },
    { name: 'Community', value: 20 },
    { name: 'Infrastructure', value: 15 },
    { name: 'Other', value: 5 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE'];

  return (
    <div className="p-6 bg-gray-100">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with Manu Project.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Users Card */}
        <div className="bg-white rounded-lg shadow p-2 flex items-center">
          <div className="bg-purple-100 p-3 rounded-full">
            <Users className="text-purple-600" size={24} />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">Total Users</p>
            <h2 className="text-1xl font-bold text-gray-800">{user.length}</h2>
          </div>
        </div>

        {/* Items Card */}
        <div className="bg-white rounded-lg shadow p-6 flex items-center">
          <div className="bg-blue-100 p-3 rounded-full">
            <Package className="text-blue-600" size={24} />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">Listed Items</p>
            <h2 className="text-1xl font-bold text-gray-800">{property.length}</h2>
          </div>
        </div>

        {/* Donations Card */}
        <div className="bg-white rounded-lg shadow p-6 flex items-center">
          <div className="bg-green-100 p-3 rounded-full">
            <Gift className="text-green-600" size={24} />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">Total Market Place</p>
            <h2 className="text-1xl font-bold text-gray-800">{market.length}</h2>
          </div>
        </div>

        {/* Projects Card */}
        <div className="bg-white rounded-lg shadow p-6 flex items-center">
          <div className="bg-amber-100 p-3 rounded-full">
            <Folder className="text-amber-600" size={24} />
          </div>
          <div className="ml-4">
            <p className="text-gray-600">All Blogs </p>
            <h2 className="text-1xl font-bold text-gray-800">{blog.length}</h2>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* User Growth Line Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-gray-800 mb-4">User Growth</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={userGrowthData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Item Categories Bar Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Item Categories</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={itemCategoryData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Third Chart Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Donation Impact Pie Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Donation Impact</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donationImpactData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {donationImpactData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

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
      </div>

      {/* Quick Access */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Quick Access</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
  );
};

export default DashboardHome;