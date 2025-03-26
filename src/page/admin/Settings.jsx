import React, { useState } from 'react';
import BB from "../../assets/beneficiary.jpeg";
import { 
  User, 
  Lock, 
  Bell, 
  Palette, 
  Settings as SettingsIcon, 
  Download, 
  Trash2, 
  Camera, 
  Edit, 
  Check, 
  X 
} from 'lucide-react';

const Settings = () => {
  // State management for various settings
  const [profile, setProfile] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    phone: '+250 788 123456',
    profilePicture: '/api/placeholder/100/100'
  });

  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    loginActivities: [
      { device: 'Chrome - Windows', location: 'Kigali, Rwanda', time: '2 hours ago' },
      { device: 'Mobile - Android', location: 'Nairobi, Kenya', time: '1 day ago' }
    ]
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false
  });

  const [uiPreferences, setUiPreferences] = useState({
    darkMode: false,
    compactLayout: false
  });

  const [systemConfig, setSystemConfig] = useState({
    defaultApproval: 'manual',
    roles: [
      { name: 'Admin', permissions: 'Full Access' },
      { name: 'Moderator', permissions: 'Limited Access' }
    ]
  });

  // Handlers for different settings
  const handleProfileUpdate = () => {
    // Implement profile update logic
    console.log('Profile Updated');
  };

  const handlePasswordChange = () => {
    // Implement password change logic
    console.log('Password Changed');
  };

  const handleToggle2FA = () => {
    setSecurity(prev => ({
      ...prev,
      twoFactorAuth: !prev.twoFactorAuth
    }));
  };

  const handleDataExport = () => {
    // Implement data export logic
    console.log('Data Exported');
  };

  const handleClearCache = () => {
    // Implement cache clearing logic
    console.log('Cache Cleared');
  };

  let userToken = JSON.parse(localStorage.getItem("userToken"))
const userRole=userToken?.user?.role;
const userName= userToken?.user?.lastname;
const userNames= userToken?.user?.firstname;
const userEmail= userToken?.user?.email;

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
          <SettingsIcon className="mr-4 text-[#ABA1FF]" /> Admin Settings
        </h1>
        {/* Profile Settings */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <User className="mr-3 text-[#ABA1FF]" />
              <h2 className="text-xl font-semibold text-gray-800">Profile Settings</h2>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <img 
                src={BB} 
                alt="Profile" 
                className="w-24 h-24 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-[#ABA1FF] text-white p-2 rounded-full">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-grow space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Names</label>
                <div className="flex items-center">
                  <input 
                    type="text" 
                    value={userName}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ABA1FF] focus:ring focus:ring-[#ABA1FF]/50"
                  />
                  <button className="ml-2 text-[#ABA1FF] hover:text-purple-700">
                    <Edit className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center">
                  <input 
                    type="text" 
                    value={userNames}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ABA1FF] focus:ring focus:ring-[#ABA1FF]/50"
                  />
                  <button className="ml-2 text-[#ABA1FF] hover:text-purple-700">
                    <Edit className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="flex items-center">
                  <input 
                    type="email" 
                    value={userEmail}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ABA1FF] focus:ring focus:ring-[#ABA1FF]/50"
                  />
                  <button className="ml-2 text-[#ABA1FF] hover:text-purple-700">
                    <Edit className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Authentication */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Lock className="mr-3 text-[#ABA1FF]" />
              <h2 className="text-xl font-semibold text-gray-800">Security & Authentication</h2>
            </div>
          </div>

          <div className="space-y-4">
           

            <div className="border-t pt-4">
              <h3 className="font-medium text-gray-700 mb-2">Change Password</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input 
                  type="password" 
                  placeholder="Current Password"
                  className="col-span-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ABA1FF] focus:ring focus:ring-[#ABA1FF]/50"
                />
                <input 
                  type="password" 
                  placeholder="New Password"
                  className="col-span-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ABA1FF] focus:ring focus:ring-[#ABA1FF]/50"
                />
                <button 
                  onClick={handlePasswordChange}
                  className="col-span-1 bg-[#ABA1FF] text-white py-2 rounded-md hover:bg-purple-600 transition-colors"
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
      

        {/* Data Management */}
        
      </div>
    </div>
  );
};

export default Settings;