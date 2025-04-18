import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageDonationItems = () => {
  const [property, setProperty] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const getAllProperty = async () => {
    try {
      const res = await axios.get(`https://manu-backend-6i7q.onrender.com/project/getAllProjects`);
      setProperty(res.data.projects || res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllProperty();
  }, []);

  const handleUpdateApproval = async (projectId, approvalStatus) => {
    try {
      const response = await fetch(
        "https://manu-backend-6i7q.onrender.com/project/updateApprovalStatus",
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
      getAllProperty(); // Refresh list after update
    } catch (error) {
      console.error("Error updating approval status:", error);
      alert("Error updating approval status");
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setCurrentPage(1);
  };

  // Filter items
  const filteredItems = property.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === "" || item.category === category)
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Manage Items</h1>

      {/* Search & Category Filters */}
      <div className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 px-3 py-2 rounded w-1/2"
        />
        <select
          value={category}
          onChange={handleCategoryChange}
          className="border border-gray-300 px-3 py-2 rounded"
        >
          <option value="">All Categories</option>
          <option value="Clothes">Clothes</option>
          <option value="Shoes">Shoes</option>
          <option value="Books">Books</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                <th className="px-2 py-2 text-left"></th>
                <th className="px-2 py-2 text-left">Title</th>
                <th className="px-2 py-2 text-left">Category</th>
                <th className="px-2 py-2 text-left">Poster</th>
                <th className="px-2 py-2 text-left">Contact</th>
                <th className="px-2 py-2 text-left">Condition</th>
                <th className="px-2 py-2 text-left">Image</th>
                <th className="px-2 py-2 text-left">Status</th>
                <th className="px-2 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedItems.map((item) => (
                <tr key={item._id}>
                  <td className="px-2 py-2">
                    <input type="checkbox" />
                  </td>
                  <td className="px-2 py-2 text-sm">{item.title}</td>
                  <td className="px-2 py-2 text-sm">{item.category}</td>
                  <td className="px-2 py-2 text-sm">{item.posterName}</td>
                  <td className="px-2 py-2 text-sm">{item.contact}</td>
                  <td className="px-2 py-2 text-sm">{item.itemCondition}</td>
                  <td className="px-2 py-2">
                    <img
                      src={item.images}
                      alt="Item"
                      className="rounded-full w-8 h-8 object-cover"
                    />
                  </td>
                  <td className="px-2 py-2 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        item.approvalStatus === "Approved"
                          ? "text-green-800"
                          : item.approvalStatus === "Rejected"
                          ? "text-red-800"
                          : "text-yellow-800"
                      }`}
                    >
                      {item.approvalStatus}
                    </span>
                  </td>
                  <td className="px-2 py-2 text-center text-sm">
                    <div className="flex justify-center space-x-2">
                      <button
                        className="text-blue-600 hover:text-blue-800 text-xs"
                        onClick={() => openModal(item)}
                      >
                        View
                      </button>
                      <button
                        className="text-green-800 hover:text-green-600 text-xs"
                        onClick={() =>
                          handleUpdateApproval(item._id, "Approved")
                        }
                      >
                        Approve
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800 text-xs"
                        onClick={() =>
                          handleUpdateApproval(item._id, "Rejected")
                        }
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

        {/* Pagination Controls */}
        <div className="flex justify-between items-center px-4 py-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 text-sm"
          >
            Previous
          </button>
          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 text-sm"
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <h2 className="text-lg font-semibold mb-2">Donation Item Details</h2>
            <p><strong>Title:</strong> {selectedItem.title}</p>
            <p><strong>Category:</strong> {selectedItem.category}</p>
            <p><strong>Poster:</strong> {selectedItem.posterName}</p>
            <p><strong>Contact:</strong> {selectedItem.contact}</p>
            <p><strong>Condition:</strong> {selectedItem.itemCondition}</p>
            <img
              src={selectedItem.images}
              alt="Item"
              className="mt-2 rounded-md w-32 h-32 object-cover"
            />
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageDonationItems;
