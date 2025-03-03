import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import AdminDashboard from './page/admin/AdminDashboard';
import DashboardHome from './page/admin/DashboardHome';
import ManageItems from './page/admin/ManageItems';
import ManageUsers from './page/admin/ManageUsers'; 
import Reports from './page/admin/Reports';
import Settings from './page/admin/Settings';
import Donations from './page/admin/Donation';
import Marketplace from './page/admin/Marketplace';
import DashboardHomeUser from './page/users/DashboardHomeUser';
import UserDashboard from './page/users/UserDashboard';
import MyItems from './page/users/MyItems';
import Analytics from './page/users/Analytics';
import Interactions from './page/users/Interactions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/admindashboard" element={<AdminDashboard />}> 
          <Route index element={<DashboardHome />} />
          <Route path="items" element={<ManageItems />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path='donations' element={<Donations />} />
          <Route path='marketplace' element={<Marketplace />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        
        <Route path='/user-dashbaord'element={<UserDashboard />}>
          <Route index element={<DashboardHomeUser />} />
          <Route path="my-items" element={<MyItems />} />
          <Route path="donations" element={<Donations />} />
          <Route path="interactions" element={<Interactions />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
