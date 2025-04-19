import React, { useState, useEffect } from "react";
import { Filter, Search, Plus, X } from "lucide-react";
import axios from "axios";
import DonateForm from "./DonateForm";
import { useNavigate } from "react-router-dom";

const UserCharity = () => {
  const navigate = useNavigate();
  const [property, setProperty] = useState([]);
  const [donModal, setDonModal] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [viewingCharity, setViewingCharity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllItems = async () => {
      try {
        const res = await axios.get(
          "https://manu-backend-6i7q.onrender.com/charity/ApprovedCharity"
        );
        if (res.status === 200 && Array.isArray(res.data.data)) {
          setProperty(res.data.data);
        } else {
          console.error("Unexpected list response:", res.data);
          setProperty([]);
        }
      } catch (err) {
        console.error("Error fetching charity list:", err);
        setProperty([]);
      }
    };
    getAllItems();
  }, []);

  const handleDonation = (ProjectId) => {
    setSelectedProjectId(ProjectId);
    setDonModal(true);
  };

  const handleNavigation = () => {
    navigate("/user-dashboard/Usercharities/userCreateCharity");
  };

  const handleViewCharity = async (id) => {
    setError(null);
    setLoading(true);
    try {
      console.log("Fetching charity with ID:", id);
      const res = await axios.get(
        `https://manu-backend-6i7q.onrender.com/charity/getCharityById/${id}`
      );
      console.log("Response:", res.status, res.data);

      // accommodate both shapes
      const payload = (res.data && res.data.data) ? res.data.data : res.data;

      if (payload && payload._id) {
        setViewingCharity(payload);
      } else {
        console.error("Invalid detail response:", res.data);
        setError("Could not load charity details. Please try again.");
        setViewingCharity(null);
      }
    } catch (err) {
      console.error("Error fetching charity details:", err);
      setError(`Error loading charity: ${err.message}`);
      setViewingCharity(null);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setViewingCharity(null);
    setError(null);
  };

  const safeGet = (obj, path, fallback = "N/A") =>
    path
      .split(".")
      .reduce((o, key) => (o && o[key] != null ? o[key] : null), obj)
      ?? fallback;

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm relative">

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white p-4 rounded shadow flex items-center">
            <div className="w-6 h-6 border-4 border-t-blue-500 border-b-blue-500 border-l-transparent border-r-transparent rounded-full animate-spin mr-3"/>
            <span>Loading...</span>
          </div>
        </div>
      )}

      {error && !viewingCharity && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4 z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-red-600">Error</h3>
              <button onClick={() => setError(null)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            <p className="mb-4">{error}</p>
            <div className="flex justify-end">
              <button
                onClick={() => setError(null)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {viewingCharity && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Charity Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {safeGet(viewingCharity, "images") !== "N/A" ? (
                <img
                  src={
                    Array.isArray(viewingCharity.images)
                      ? viewingCharity.images[0]
                      : viewingCharity.images
                  }
                  alt={safeGet(viewingCharity, "title", "Charity image")}
                  className="w-full h-64 object-cover rounded-md"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://via.placeholder.com/150?text=No+Image";
                  }}
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Title:</strong> {safeGet(viewingCharity, "title")}</p>
                <p><strong>Poster Name:</strong> {safeGet(viewingCharity, "posterName")}</p>
                <p><strong>Contact:</strong> {safeGet(viewingCharity, "contact")}</p>
                <p><strong>Condition:</strong> {safeGet(viewingCharity, "itemCondition")}</p>
                <p><strong>Status:</strong> {safeGet(viewingCharity, "approvalStatus")}</p>
                <p><strong>Description:</strong> {safeGet(viewingCharity, "description", "No description")}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              {/* <button
                onClick={() => handleDonation(viewingCharity._id)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
              >
                Donate
              </button> */}
              <button
                onClick={handleCloseModal}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {donModal && (
        <DonateForm
          handleDonation={() => setDonModal(false)}
          ProjectId={selectedProjectId}
        />
      )}

      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <p className="text-sm text-gray-700">Total Approved Charities: {property.length}</p>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
          </div>
          <button
            onClick={handleNavigation}
            className="flex items-center bg-[#A99FFF] px-4 py-2 text-white rounded-md hover:bg-purple-600"
          >
            <Plus size={16} className="mr-1" /> Create new Charity
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">#</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Poster</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Condition</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {property.length === 0 && (
              <tr>
                <td colSpan="8" className="px-3 py-4 text-center text-sm text-gray-500">
                  No charity items found.
                </td>
              </tr>
            )}
            {property.map((item, idx) => (
              <tr key={item._id}>
                <td className="px-3 py-2 text-sm text-gray-500">{idx + 1}</td>
                <td className="px-3 py-2">
                  <img
                    src={item.images || "https://via.placeholder.com/40?text=No+Img"}
                    alt={item.title || "No title"}
                    className="w-10 h-10 rounded-md object-cover"
                    onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/40?text=No+Img"; }}
                  />
                </td>
                <td className="px-3 py-2 text-sm text-gray-500">{item.title || "N/A"}</td>
                <td className="px-3 py-2 text-sm text-gray-500">{item.posterName || "N/A"}</td>
                <td className="px-3 py-2 text-sm text-gray-500">{item.contact || "N/A"}</td>
                <td className="px-3 py-2 text-sm text-gray-500">{item.itemCondition || "N/A"}</td>
                <td className="px-3 py-2 text-sm">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      item.approvalStatus === "Approved"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {item.approvalStatus || "N/A"}
                  </span>
                </td>
                <td className="px-3 py-2 text-sm">
                  <button
                    onClick={() => handleViewCharity(item._id)}
                    className="text-blue-500 hover:underline"
                    disabled={loading}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserCharity;
