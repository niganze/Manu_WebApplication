import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageCharity = () => {
  const [property, setProperty] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalProjects, setTotalProjects] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState(null); // 👈 for modal

  useEffect(() => {
    const getAllProperty = async () => {
      try {
        const res = await axios.get(`https://manu-backend-6i7q.onrender.com/charity/getAllCharity`, {
          params: {
            page: page + 1,
            limit: rowsPerPage,
            search: searchTerm,
            category: category
          }
        });
        setProperty(res.data.projects || res.data);
        setTotalProjects(res.data.total || res.data.length);
      } catch (error) {
        console.error(error);
      }
    };
    getAllProperty();
  }, [page, rowsPerPage, searchTerm, category]);

  const handleUpdateApproval = async (projectId, approvalStatus) => {
    try {
      const response = await fetch(
        "https://manu-backend-6i7q.onrender.com/charity/updateApprovalStatus",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: projectId, approvalStatus }),
        }
      );

      if (!response.ok) throw new Error("Failed to update approval status");
      const data = await response.json();
      alert(`Approval Status Updated: ${data.message}`);
      window.location.reload(); // Refresh

    } catch (error) {
      console.error("Error updating approval status:", error);
      alert("Error updating approval status");
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Manage All Charities</h1>

      {/* Filters */}
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search donations..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full max-w-md pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
        <select
          value={category}
          onChange={handleCategoryChange}
          className="py-2 px-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        >
          <option value="">All Categories</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Furniture</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                <th className="px-2 py-2 text-left"><input type="checkbox" /></th>
                <th className="px-2 py-2 text-left">Title</th>
                <th className="px-2 py-2 text-left">Category</th>
                <th className="px-2 py-2 text-left">Poster Name</th>
                <th className="px-2 py-2 text-left">Contact Info</th>
                <th className="px-2 py-2 text-left">Condition</th>
                <th className="px-2 py-2 text-left">Image</th>
                <th className="px-2 py-2 text-left">Status</th>
                <th className="px-2 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {property.map((item) => (
                <tr key={item._id}>
                  <td className="px-2 py-2"><input type="checkbox" /></td>
                  <td className="px-2 py-2">{item.title}</td>
                  <td className="px-2 py-2">{item.category}</td>
                  <td className="px-2 py-2">{item.posterName}</td>
                  <td className="px-2 py-2">{item.contact}</td>
                  <td className="px-2 py-2">{item.itemCondition}</td>
                  <td className="px-2 py-2">
                    <img src={item.images} alt="Item" className="w-10 h-10 object-cover rounded-full" />
                  </td>
                  <td className="px-2 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      item.approvalStatus === "Approved" ? "text-green-800" :
                      item.approvalStatus === "Rejected" ? "text-red-800" : "text-yellow-800"
                    }`}>
                      {item.approvalStatus}
                    </span>
                  </td>
                  <td className="px-2 py-2 text-center text-sm">
                    <div className="flex justify-center space-x-2">
                      <button
                        className="text-blue-600 hover:underline text-xs"
                        onClick={() => setSelectedItem(item)}
                      >
                        View
                      </button>
                      <button
                        className="text-green-800 hover:underline text-xs"
                        onClick={() => handleUpdateApproval(item._id, "Approved")}
                      >
                        Approve
                      </button>
                      <button
                        className="text-red-600 hover:underline text-xs"
                        onClick={() => handleUpdateApproval(item._id, "Rejected")}
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center p-4">
          <button
            onClick={() => handleChangePage(null, page - 1)}
            disabled={page === 0}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2">Page {page + 1} of {Math.ceil(totalProjects / rowsPerPage)}</span>
          <button
            onClick={() => handleChangePage(null, page + 1)}
            disabled={page >= Math.floor(totalProjects / rowsPerPage)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Charity Details</h2>
            <img src={selectedItem.images} alt="Item" className="w-full h-40 object-cover rounded mb-4" />
            <p><strong>Title:</strong> {selectedItem.title}</p>
            <p><strong>Category:</strong> {selectedItem.category}</p>
            <p><strong>Condition:</strong> {selectedItem.itemCondition}</p>
            <p><strong>Poster Name:</strong> {selectedItem.posterName}</p>
            <p><strong>Contact Info:</strong> {selectedItem.contact}</p>
            <p><strong>Status:</strong> {selectedItem.approvalStatus}</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCharity;
