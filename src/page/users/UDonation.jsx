import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ChevronDown, PlusCircle, Eye, X, Heart } from "lucide-react";
import BB from "../../assets/beneficiary.jpeg";
import DonateForm from "./DonateForm";
import { useParams } from "react-router-dom";
import axios from "axios";

const Donation = () => {
  const donationStats = [
    { name: "Construction", value: 40 },
    { name: "Education", value: 30 },
    { name: "Healthcare", value: 20 },
    { name: "Other", value: 10 },
  ];

  const [openDonationForm, setOpenDonationForm] = useState(false);
  const [newDonation, setNewDonation] = useState({
    itemName: "",
    category: "",
    condition: "",
    description: "",
    location: "",
  });

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const handleOpenDonationForm = () => setOpenDonationForm(true);
  const handleCloseDonationForm = () => setOpenDonationForm(false);

  const handleNewDonationChange = (e) => {
    const { name, value } = e.target;
    setNewDonation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [openDon, setOpenDon] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const handleDonation = () => {
    setOpenDon(!openDon);
  };

  const [property, setProperty] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(property.length / itemsPerPage);
  const currentDonations = property.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const userToken = JSON.parse(localStorage.getItem("userToken"));
        const userId = userToken?.user?._id;
        if (!userId) return;

        const res = await axios.get(
          `https://manu-backend-6i7q.onrender.com/donation/donations/${userId}`
        );
        setProperty(res.data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchDonations();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-extrabold text-gray-500">
            Donation Management
          </h1>
          <button
            onClick={handleDonation}
            className="bg-[#ABA1FF] text-white px-4 py-2 rounded-lg hover:bg-purple-500 flex items-center transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <Heart /> &nbsp;&nbsp; {property.length}
          </button>
        </div>

        {/* Table */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  {[
                    "No.",
                    "Doner Email",
                    "Phone Num",
                    "Amount",
                    "Status",
                    "Comment",
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
                {currentDonations.map((donation, index) => (
                  <tr
                    key={donation._id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-4 py-4 text-sm text-gray-900">
                      {(currentPage - 1) * itemsPerPage + index + 1}
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
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
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

            {/* Pagination Controls */}
            <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 rounded-lg text-sm disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 rounded-lg text-sm disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Donation Form Modal (unchanged) */}
        {openDonationForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl w-full max-w-md mx-auto shadow-2xl relative">
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

                <div className="flex space-x-3 pt-2">
                  <button
                    onClick={() => console.log("Submit Donation")}
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
