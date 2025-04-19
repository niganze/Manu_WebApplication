import React, { useState, useEffect } from "react";
import { Filter, Search, Plus, X } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserMarketPlace() {
  const navigate = useNavigate();

  // List of all items
  const [items, setItems] = useState([]);
  // Single-item view state
  const [viewingItem, setViewingItem] = useState(null);
  const [loadingView, setLoadingView] = useState(false);
  const [viewError, setViewError] = useState(null);

  // Fetch all marketplace items
  useEffect(() => {
    const getAllItems = async () => {
      try {
        const res = await axios.get(
          "https://manu-backend-6i7q.onrender.com/marketItem/getAllMarkets"
        );
        // assume res.data is an array
        setItems(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching market items:", err);
        setItems([]);
      }
    };
    getAllItems();
  }, []);

  // Safe getter for nested props
  const safeGet = (obj, path, fallback = "N/A") =>
    path
      .split(".")
      .reduce((o, key) => (o && o[key] != null ? o[key] : null), obj)
      ?? fallback;

  // Open the “Add” screen
  const handleNavigation = () => {
    navigate("/user-dashboard/Usercharities/AddUserMarketPlace");
  };

  // Fetch and show one item in the modal
  const handleViewItem = async (id) => {
    setViewError(null);
    setLoadingView(true);
    try {
      console.log("Fetching market item with ID:", id);
      const res = await axios.get(
        `https://manu-backend-6i7q.onrender.com/marketItem/getMarketById/${id}`
      );
      console.log("Response:", res.status, res.data);

      // Support both res.data.data or res.data
      const payload = res.data && res.data.data ? res.data.data : res.data;
      if (payload && payload._id) {
        setViewingItem(payload);
      } else {
        throw new Error("Unexpected response structure");
      }
    } catch (err) {
      console.error("Error loading item details:", err);
      setViewError("Could not load item details. Please try again.");
      setViewingItem(null);
    } finally {
      setLoadingView(false);
    }
  };

  // Close the modal
  const handleCloseModal = () => {
    setViewingItem(null);
    setViewError(null);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm relative">

      {/* Loading overlay for single-item fetch */}
      {loadingView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white p-4 rounded shadow flex items-center">
            <div className="w-6 h-6 border-4 border-t-blue-500 border-b-blue-500 border-l-transparent border-r-transparent rounded-full animate-spin mr-3"/>
            <span>Loading item…</span>
          </div>
        </div>
      )}

      {/* Error overlay for single-item fetch */}
      {viewError && !viewingItem && (
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

      {/* Detail Modal */}
      {viewingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Item Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Image */}
              {safeGet(viewingItem, "images") !== "N/A" ? (
                <img
                  src={
                    Array.isArray(viewingItem.images)
                      ? viewingItem.images[0]
                      : viewingItem.images
                  }
                  alt={safeGet(viewingItem, "itemName", "Item image")}
                  className="w-full h-64 object-cover rounded-md"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://via.placeholder.com/150?text=No+Image";
                  }}
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}

              {/* Details */}
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Name:</strong> {safeGet(viewingItem, "itemName")}</p>
                <p><strong>Price:</strong> ${safeGet(viewingItem, "itemPrice")}</p>
                <p><strong>Contact:</strong> {safeGet(viewingItem, "contact")}</p>
                <p><strong>Condition:</strong> {safeGet(viewingItem, "itemCondition")}</p>
                {/* <p><strong>Status:</strong> {safeGet(viewingItem, "status")}</p> */}
                <p><strong>Description:</strong> {safeGet(viewingItem, "description", "No description")}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
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

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm focus:ring-1 focus:ring-blue-500">
              <option value="All">All products</option>
              <option value="LowStock">Low in stock</option>
              <option value="InReq">In requisition</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <Filter size={14} />
            </div>
          </div>
          <span className="ml-3 text-gray-500 text-sm">products</span>
        </div>
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
            <Plus size={16} className="mr-1" /> Add Market Item
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-10 px-3 py-2 text-left">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">#</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Condition</th>
              {/* <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th> */}
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items.length === 0 && (
              <tr>
                <td colSpan="9" className="px-3 py-4 text-center text-sm text-gray-500">
                  No items found.
                </td>
              </tr>
            )}
            {items.map((item, idx) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="px-3 py-2 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{idx + 1}</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <img
                    src={item.images || "https://via.placeholder.com/40?text=No+Img"}
                    alt={item.itemName || "No name"}
                    className="h-8 w-8 rounded-md object-cover"
                    onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/40?text=No+Img"; }}
                  />
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{item.itemName || "N/A"}</td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">${item.itemPrice ?? "N/A"}</td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{item.contact || "N/A"}</td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{item.itemCondition || "N/A"}</td>
                {/* <td className="px-3 py-2 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      item.status === "Available"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {item.status || "N/A"}
                  </span>
                </td> */}
                <td className="px-3 py-2 whitespace-nowrap text-sm">
                  <button
                    onClick={() => handleViewItem(item._id)}
                    className="text-blue-500 hover:underline"
                    disabled={loadingView}
                  >
                    VIEW
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserMarketPlace;
