import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";
import AdminDashboard from "./page/admin/AdminDashboard";
import DashboardHome from "./page/admin/DashboardHome";
import ManageItems from "./page/admin/ManageItems";
import ManageUsers from "./page/admin/ManageUsers";
import Reports from "./page/admin/Reports";
import Settings from "./page/admin/Settings";
import Donations from "./page/admin/Donation";
import Marketplace from "./page/admin/Marketplace";
import DashboardHomeUser from "./page/users/DashboardHomeUser";
import UserDashboard from "./page/users/UserDashboard";
import MyItems from "./page/users/MyItems";
import Analytics from "./page/users/Analytics";
import Interactions from "./page/users/Interactions";
import AdminProfile from "./page/admin/AdminProfile";
import Home from "./page/Home/Home";
import About from "./page/Home/About";
import Community from "./page/Home/Community";
import Impact from "./page/Home/Impact";
import MarketPlace from "./page/Home/MarketPlace";
import Service from "./page/Home/Service";
import HomeLayout from "./page/Home/HomeLayout";
import BlogsD from "./page/admin/BlogsD";
import Blogs from "./page/Home/Blogs";
import MarketPlaceForm from "./page/admin/MarketPlaceForm";
import Subscription from "./page/admin/Subscription";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/landing" element={<Home/>}/>
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="community" element={<Community />} />
          <Route path="impact" element={<Impact />} />
          <Route path="marketplace" element={<MarketPlace />} />
          <Route path="blogs" element={<Blogs/>}/>
          <Route path="/community" element={<Community />} />
          
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/admindashboard" element={<AdminDashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="items" element={<ManageItems />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="donations" element={<Donations />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="blogsD" element={<BlogsD />} />
         
          <Route path="/admindashboard/marketplace/marketForm" element={<MarketPlaceForm/>}/>
          <Route path="subscription" element={<Subscription />} />
        </Route>
        <Route path="/user-dashbaord" element={<UserDashboard />}>
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
