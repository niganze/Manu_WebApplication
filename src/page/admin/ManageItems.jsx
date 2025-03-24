import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const ManageDonationItems = () => {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    const getAllProperty = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/project/getAllProjects`
        );
        setProperty(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProperty();
  }, []);
  const handleUpdateApproval = async (projectId, approvalStatus) => {
    try {
      const response = await fetch(
        "http://localhost:5000/project/updateApprovalStatus",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: projectId, approvalStatus }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update approval status");
      }

      const data = await response.json();
      alert(`Approval Status Updated: ${data.message}`);

      // Update local state
      setProperty((prev) =>
        prev.map((item) =>
          item._id === projectId ? { ...item, approvalStatus } : item
        )
      );
    } catch (error) {
      console.error("Error updating approval status:", error);
      alert("Error updating approval status");
    }
  };

  const handleReject = async (projectId) => {
    try {
      const response = await fetch(
        "http://localhost:5000/project/rejectProject",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: projectId}),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update approval status");
      }

      const data = await response.json();
      alert(`Approval Status Updated: ${data.message}`);

      // Update local state
      setProperty((prev) =>
        prev.map((item) =>
          item._id === projectId 
        )
      );
    } catch (error) {
      console.error("Error updating approval status:", error);
      alert("Error updating approval status");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Manage Donation Items
      </h1>
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search donations..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm"
          />
        </div>
        <select className="py-2 px-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm">
          <option value="">All Categories</option>

          <option>null</option>
        </select>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                <th className="px-2 py-2 text-left">
                  <input
                    type="checkbox"
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="px-2 py-2 text-left">Title</th>
                <th className="px-2 py-2 text-left">Category</th>
                <th className="px-2 py-2 text-left">PosterName</th>
                <th className="px-2 py-2 text-left">ContactInfo</th>
                <th className="px-2 py-2 text-left">Condition</th>
                <th className="px-2 py-2 text-left">Images</th>
                <th className="px-2 py-2 text-left">status</th>
                <th className="px-2 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {property.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-2 py-2">
                    <input
                      type="checkbox"
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-2 py-2  text-gray-600 text-sm">
                    {item.title}
                  </td>
                  <td className="px-2 py-2 text-gray-600 text-sm">
                    {item.category}
                  </td>
                  <td className="px-2 py-2 text-gray-600 text-sm">
                    {item.posterName}
                  </td>
                  <td className="px-2 py-2 text-gray-600 text-sm">
                    {item.contact}
                  </td>

                  <td className="px-2 py-2 text-sm">
                    <span
                      className="px-2 py-1 rounded-full  text-gray-600 text-sm"
                    >
                      {item.itemCondition}
                    </span>
                  </td>

                  <td className="px-2 py-2">
                    <img
                      src={item.images}
                      className="bg-gray-100 rounded-full overflow-hidden flex items-center "
                      style={{ width: "30px", height: "30px" }}
                    />
                  </td>
                  <td className="px-2 py-2 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${item.approvalStatus === "Approved" ? " text-green-800" :
                        item.approvalStatus === "Rejected" ? " text-red-800" :
                        " text-yellow-800"}
                      `}
                    >
                      {item.approvalStatus}
                    </span>
                  </td>
                  <td className="px-2 py-2 text-center text-sm">
                    <div className="flex justify-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-xs">
                        View
                      </button>
                      <button
                        className=" text-green-800 hover:text-blue-400 transition-colors duration-200 text-xs"
                        onClick={() =>
                          handleUpdateApproval(item._id, "Approved")
                        }
                      >
                        Approve
                      </button>
                      <button className="text-red-600 hover:text-red-800 transition-colors duration-200 text-xs"
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
      </div>
    </div>
  );
};

export default ManageDonationItems;
