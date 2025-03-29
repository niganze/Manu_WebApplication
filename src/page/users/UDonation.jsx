import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ChevronDown, PlusCircle, Eye, X } from "lucide-react";
import BB from "../../assets/beneficiary.jpeg";
import DonateForm from "./DonateForm";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Donation = () => {
  // State for donations
  

  // State for donation statistics
  const donationStats = [
    { name: "Construction", value: 40 },
    { name: "Education", value: 30 },
    { name: "Healthcare", value: 20 },
    { name: "Other", value: 10 },
  ];

  // State for new donation form
  const [openDonationForm, setOpenDonationForm] = useState(false);
  const [newDonation, setNewDonation] = useState({
    itemName: "",
    category: "",
    condition: "",
    description: "",
    location: "",
  });

  // Colors for pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Handlers
  const handleOpenDonationForm = () => setOpenDonationForm(true);
  const handleCloseDonationForm = () => setOpenDonationForm(false);

  const handleNewDonationChange = (e) => {
    const { name, value } = e.target;
    setNewDonation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 
  const [property, setProperty] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        // Retrieve user token from localStorage
        const userToken = JSON.parse(localStorage.getItem("userToken"));
        const userId = userToken?.user?._id; // Extract userId

        if (!userId) return; // Ensure userId exists

        // Fetch donation data for the user
        const res = await axios.get(`http://localhost:5000/donation/donations/${userId}`);
        setProperty(res.data); // Update state with response data
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchDonations();
  }, []); // Run once on component mount

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-extrabold text-gray-500">
            Donation Management
          </h1>
          <button
            onClick={handleOpenDonationForm}
            className="bg-[#ABA1FF] text-white px-4 py-2 rounded-lg hover:bg-purple-500 flex items-center transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <PlusCircle className="w-5 h-5 mr-2" /> Post New Donation
          </button>
        </div>
        {/* Donations Table */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  {["No.", "Doner Email", "Phone Num", "Amount", "Status","Comment"].map(
                    (header) => (
                      <th
                        key={header}
                        className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {property.map((donation,index) => (
                  <tr
                    key={donation._id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-4 py-4 text-sm text-gray-900">
                      {index+1}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900">
                      {donation.donorEmail}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500">
                      {donation.PhoneNum}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500">
                      {donation.AmountDonated}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`
                        px-3 py-1 rounded-full text-xs font-medium
                        ${
                          donation.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : donation.status === "Approved"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {donation.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500">
                      {donation.Comment}
                    </td>
                   
                    <td className="px-4 py-4">
                      <button className="text-[#ABA1FF] hover:text-purple-700 flex items-center transition-colors duration-200">
                        <Eye className="w-4 h-4 mr-1" /> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Donation Statistics */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-1 bg-gradient-to-r from-[#ABA1FF]">
              <h2 className="text-1xl font-bold text-white">
                Donation Categories
              </h2>
            </div>
            <div className="p-4">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={donationStats}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {donationStats.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Beneficiaries */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-1 bg-gradient-to-r from-[#ABA1FF] to-purple-500">
              <h2 className="text-1xl font-bold text-white">
                Recent Beneficiaries
              </h2>
            </div>
            <div className="p-4 space-y-4">
              {[
                {
                  name: "Hope School",
                  description: "Received construction materials",
                  image: "/api/placeholder/50/50",
                },
                {
                  name: "Rural Community Library",
                  description: "Received educational books",
                  image: "/api/placeholder/50/50",
                },
              ].map((beneficiary, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-100 p-3 rounded-lg"
                >
                  <img
                    src={BB}
                    alt="Beneficiary"
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {beneficiary.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {beneficiary.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* New Donation Modal */}
        {openDonationForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl w-full max-w-md mx-auto shadow-2xl relative">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#ABA1FF] to-purple-500 p-3 rounded-t-xl flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">
                  Post a New Donation
                </h2>
                <button
                  onClick={handleCloseDonationForm}
                  className="text-white hover:bg-white/20 rounded-full p-1 transition-colors duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Content */}
              <div className="p-4 space-y-3">
                {[
                  {
                    label: "Item Name",
                    type: "text",
                    name: "itemName",
                    placeholder: "Enter item name",
                  },
                  {
                    label: "Category",
                    type: "select",
                    name: "category",
                    options: [
                      "Construction",
                      "Education",
                      "Healthcare",
                      "Other",
                    ],
                  },
                  {
                    label: "Condition",
                    type: "select",
                    name: "condition",
                    options: ["New", "Used"],
                  },
                  {
                    label: "Description",
                    type: "textarea",
                    name: "description",
                    placeholder: "Describe the donation",
                  },
                  {
                    label: "Location",
                    type: "text",
                    name: "location",
                    placeholder: "Enter location",
                  },
                ].map((field) => (
                  <div key={field.name} className="mb-2">
                    <label className="block text-gray-700 mb-1 text-sm font-medium">
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <div className="relative">
                        <select
                          name={field.name}
                          value={newDonation[field.name]}
                          onChange={handleNewDonationChange}
                          className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-[#ABA1FF]/50 focus:border-[#ABA1FF]"
                        >
                          <option value="">Select {field.label}</option>
                          {field.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      </div>
                    ) : field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        value={newDonation[field.name]}
                        onChange={handleNewDonationChange}
                        placeholder={field.placeholder}
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-lg h-16 focus:ring-2 focus:ring-[#ABA1FF]/50 focus:border-[#ABA1FF]"
                      ></textarea>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={newDonation[field.name]}
                        onChange={handleNewDonationChange}
                        placeholder={field.placeholder}
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ABA1FF]/50 focus:border-[#ABA1FF]"
                      />
                    )}
                  </div>
                ))}

                {/* Button Container */}
                <div className="flex space-x-3 pt-2">
                  <button
                    onClick={handleSubmitDonation}
                    className="w-full bg-[#ABA1FF] text-white py-2 rounded-lg text-sm hover:bg-purple-600 transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    Submit Donation
                  </button>
                  <button
                    onClick={handleCloseDonationForm}
                    className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg text-sm hover:bg-gray-300 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donation;
