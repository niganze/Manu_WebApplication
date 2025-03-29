import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ChevronDown, PlusCircle, Heart } from "lucide-react";
import BB from "../../assets/beneficiary.jpeg";
import { useEffect } from "react";
import axios from "axios";
const Donation = () => {

  // Colors for pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Handlers
  const handleOpenDonationForm = () => setOpenDonationForm(true);
 
 const[donation,setDonation]=useState([]);
  useEffect(() => {
    const getAllItems = async () => {
      try {
        const res = await axios.get(
          `https://manu-backend-6i7q.onrender.com/donation/getAllDonation`
        );
        setDonation(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getAllItems();
  }, []);

   

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
            <Heart className="w-5 h-5 mr-2" /> {donation.length}
          </button>
        </div>
        {/* Donations Table */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  {[
                    "No",
                    "ProjectTitle",
                    "Donor Name",
                    "Donor Email",
                    "Amount",
                    "Status",
                    "Actions",
                  ].map((header) => (
                    <th
                      key={header}
                      className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
  {donation.map((item,index) => (
    <tr key={item._id} className="hover:bg-gray-50 transition-colors duration-200">
        <td className="px-4 py-4 text-sm text-gray-900">{index+1}</td>
      <td className="px-4 py-4 text-sm text-gray-900">{item?.ProjectId?.title}</td>
      <td className="px-4 py-4 text-sm text-gray-500">
        {item.userId?.firstname} {item.userId?.lastname}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500">{item.donorEmail}</td>
      <td className="px-4 py-4 text-sm text-gray-500">{item.AmountDonated}</td>
      {/* <td className="px-4 py-4 text-sm text-gray-500">{item.Comment}</td> */}
      {/* <td className="px-4 py-4 text-sm text-gray-500">{item.status}</td> */}
      <td className="px-4 py-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            item.status === "Pending"
              ? "bg-yellow-100 text-yellow-800"
              : item.status === "Approved"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {item.status}
        </span>
      </td>
      <td className="px-4 py-4 flex flex-row space-x-3">
        <button className="text-[#ABA1FF] hover:text-purple-700 transition-colors duration-200">
          View
        </button>
        <button className="text-green-400 hover:text-green-700 transition-colors duration-200">
          Confirm Payment
        </button>
      </td>
    </tr>
  ))}
</tbody>

            </table>
          </div>
        </div>

        
       

       
      </div>
    </div>
  );
};

export default Donation;
