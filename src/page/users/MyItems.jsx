import React, { useState, useEffect } from "react";
import { Edit, Trash2, Filter, Search, Plus } from "lucide-react";
import axios from "axios";
import DonateForm from "./DonateForm";
import { useNavigate } from "react-router-dom";

function InventoryManagement() {
  const navigate = useNavigate();
  const [property, setProperty] = useState([]);
  const [donModal, setDonModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null); // For view

  const handleNavigation = () => {
    navigate("/user-dashboard/Usercharities/userCreateProject");
  };

  useEffect(() => {
    const getAllItems = async () => {
      try {
        const res = await axios.get(
          `https://manu-backend-6i7q.onrender.com/project/ApprovedProjects`
        );
        setProperty(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllItems();
  }, []);

  const handleDonation = (ProjectId) => {
    setSelectedProjectId(ProjectId);
    setDonModal(true);
  };

  const handleView = (project) => {
    setSelectedProject(project);
    setViewModal(true);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      {donModal && (
        <DonateForm
          handleDonation={() => setDonModal(false)}
          ProjectId={selectedProjectId}
        />
      )}

      {viewModal && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-xl relative">
            <button
              onClick={() => setViewModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4 text-[#A99FFF]">
              Project Details
            </h2>
            <img
              src={selectedProject.images}
              alt={selectedProject.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <p><strong>Title:</strong> {selectedProject.title}</p>
            <p><strong>Poster Name:</strong> {selectedProject.posterName}</p>
            <p><strong>Contact:</strong> {selectedProject.contact}</p>
            <p><strong>Status:</strong> {selectedProject.itemCondition}</p>
            <p><strong>Description:</strong> {selectedProject.description}</p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="All products">All products</option>
              <option value="Low in stock">Low in stock</option>
              <option value="In requisition">In requisition</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <Filter size={14} />
            </div>
          </div>
          <span className="ml-3 text-gray-500 text-sm">products</span>
        </div>

        <div className="flex items-center w-full md:w-auto">
          <div className="relative mr-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-3 py-2 border border-gray-300 rounded-md w-full md:w-64 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
          </div>
          <button
            onClick={handleNavigation}
            className="bg-[#A99FFF] hover:bg-gray-300 text-white py-2 px-4 rounded-md text-sm flex items-center"
          >
            <Plus size={16} className="mr-1" />
            Create new Project..
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-10 px-3 py-3 text-left">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No.
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ItemImage
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                PosterName
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                PosterContact
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {property.map((product, index) => (
              <tr key={product._id} className="hover:bg-gray-50">
                <td className="px-3 py-2 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                  {index + 1}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <img
                    src={product.images}
                    alt={product.title}
                    className="h-8 w-8 rounded-md object-cover mr-2"
                  />
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                  {product.title}
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                  {product.posterName}
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                  {product.contact}
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                  {product.itemCondition}
                </td>
                <td className="flex flex-row items-center gap-2 px-3 py-2">
                  <button
                    onClick={() => handleView(product)}
                    className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                  >
                    VIEW
                  </button>
                  <button
                    onClick={() => handleDonation(product._id)}
                    className="p-1 text-green-400 hover:text-green-800 hover:bg-blue-100"
                  >
                    DONATE
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

export default InventoryManagement;
