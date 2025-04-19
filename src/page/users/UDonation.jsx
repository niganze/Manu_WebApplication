import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";
import {
  ChevronDown,
  PlusCircle,
  Eye,
  X,
  Heart
} from "lucide-react";
import BB from "../../assets/beneficiary.jpeg";
import DonateForm from "./DonateForm";
import { useParams } from "react-router-dom";
import axios from "axios";

const Donation = () => {
  // stats for the pie (unchanged)
  const donationStats = [
    { name: "Construction", value: 40 },
    { name: "Education", value: 30 },
    { name: "Healthcare", value: 20 },
    { name: "Other", value: 10 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // state for list + pagination (unchanged)
  const [property, setProperty] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(property.length / itemsPerPage);
  const currentDonations = property.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // fetch list on mount
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const userToken = JSON.parse(localStorage.getItem("userToken"));
        const userId = userToken?.user?._id;
        if (!userId) return;
        const res = await axios.get(
          `https://manu-backend-6i7q.onrender.com/donation/donations/${userId}`
        );
        setProperty(Array.isArray(res.data) ? res.data : res.data.data || []);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };
    fetchDonations();
  }, []);

  // pagination handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // state for the “Post a Donation” form (unchanged)
  const [openDonationForm, setOpenDonationForm] = useState(false);
  const handleDonation = () => setOpenDonationForm(true);
  const handleCloseDonationForm = () => setOpenDonationForm(false);

  // —————— NEW: state for viewing one donation ——————
  const [viewingDonation, setViewingDonation] = useState(null);
  const [loadingView, setLoadingView] = useState(false);
  const [viewError, setViewError] = useState(null);

  // fetch one donation by ID
  const handleViewDonation = async (donationId) => {
    setViewError(null);
    setLoadingView(true);
    try {
      console.log("Fetching donation ID:", donationId);
      const res = await axios.get(
        `https://manu-backend-6i7q.onrender.com/donation/getDonationById/${donationId}`
      );
      console.log("Detail response:", res.status, res.data);
      // support both res.data.data or direct res.data
      const payload = res.data.data ? res.data.data : res.data;
      if (payload && payload._id) {
        setViewingDonation(payload);
      } else {
        throw new Error("Unexpected response structure");
      }
    } catch (err) {
      console.error("Error loading donation detail:", err);
      setViewError("Could not load donation details. Please try again.");
    } finally {
      setLoadingView(false);
    }
  };

  const handleCloseView = () => {
    setViewingDonation(null);
    setViewError(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto">
        {/* — Loading Overlay for view — */}
        {loadingView && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
            <div className="bg-white p-4 rounded shadow flex items-center">
              <div className="w-6 h-6 border-4 border-t-blue-500 border-b-blue-500 border-l-transparent border-r-transparent rounded-full animate-spin mr-3"/>
              <span>Loading details…</span>
            </div>
          </div>
        )}

        {/* — Error Overlay for view — */}
        {viewError && !viewingDonation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
            <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-red-600">Error</h3>
                <button onClick={() => setViewError(null)} className="text-gray-400 hover:text-gray-600">
                  <X size={20} />
                </button>
              </div>
              <p className="mb-4">{viewError}</p>
              <div className="flex justify-end">
                <button
                  onClick={() => setViewError(null)}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* — Detail Modal for viewing one donation — */}
        {viewingDonation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 relative">
              <button
                onClick={handleCloseView}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-4">Donation Details</h2>
              <div className="space-y-2 text-gray-700">
                <p><strong>Donor Email:</strong> {viewingDonation.donorEmail}</p>
                <p><strong>Phone:</strong> {viewingDonation.PhoneNum}</p>
                <p><strong>Money:</strong> {viewingDonation.AmountDonated || "N/A"}</p>
                <p><strong>Materials:</strong> {viewingDonation.Comment || "N/A"}</p>
                <p>
                  <strong>approvalStatus:</strong>{" "}
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      viewingDonation.approvalStatus === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : viewingDonation.approvalStatus === "Approved"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {viewingDonation.approvalStatus}
                  </span>
                </p>
                
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleCloseView}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-extrabold text-gray-500">
            Donation Management
          </h1>
          <button
            onClick={handleDonation}
            className="bg-[#ABA1FF] text-white px-4 py-2 rounded-lg hover:bg-purple-500 flex items-center transition shadow-md"
          >
            <Heart className="mr-2"/> {property.length}
          </button>
        </div>

        {/* Table */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  {[
                    "No.",
                    "Donor Email",
                    "Phone",
                    "Amount",
                    "approvalStatus",
                    "Kind",
                    "Actions",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentDonations.map((donation, idx) => (
                  <tr
                    key={donation._id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-4 text-sm text-gray-900">
                      {(currentPage - 1) * itemsPerPage + idx + 1}
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
                          donation.approvalStatus === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : donation.approvalStatus === "Approved"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {donation.approvalStatus}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500">
                      {donation.DonationKind}
                    </td>
                    {/* <td className="px-4 py-4 text-sm text-gray-500">
                      {donation.Comment}
                    </td> */}
                    <td className="px-4 py-4">
                      <button
                        onClick={() => handleViewDonation(donation._id)}
                        className="text-[#ABA1FF] hover:text-purple-700 flex items-center"
                        disabled={loadingView}
                      >
                        <Eye className="w-4 h-4 mr-1" /> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
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

        {/* Donation Form Modal */}
        {openDonationForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl w-full max-w-md mx-auto shadow-2xl relative">
              <div className="bg-gradient-to-r from-[#ABA1FF] to-purple-500 p-3 rounded-t-xl flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">
                  Post a New Donation
                </h2>
                <button
                  onClick={handleCloseDonationForm}
                  className="text-white hover:bg-white/20 rounded-full p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <DonateForm onClose={handleCloseDonationForm} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donation;
