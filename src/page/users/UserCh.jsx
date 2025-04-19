import React, { useState, useEffect } from "react";
import { Edit, Trash2, Filter, Search, Plus, X } from "lucide-react";
import axios from "axios";
import DonateForm from "./DonateForm";
import { useNavigate } from "react-router-dom";

function UserCh() {
  const navigate = useNavigate();
  const [property, setProperty] = useState([]);
  const [donModal, setDonModal] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [viewingCharity, setViewingCharity] = useState(null); // For viewing charity in modal

  useEffect(() => {
    const getAllItems = async () => {
      try {
        const res = await axios.get(
          `https://manu-backend-6i7q.onrender.com/charity/ApprovedCharity`
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

  const handleNavigation = () => {
    navigate("/user-dashboard/Usercharities/userCreateCharity");
  };

  // Fetch and set the viewing charity for modal view
  const handleViewCharity = async (id) => {
    try {
      const res = await axios.get(
        `https://manu-backend-6i7q.onrender.com/charity/getCharityById/${id}`
      );
      setViewingCharity(res.data.data); // Display selected charity in modal
    } catch (error) {
      console.error("Error fetching charity details:", error);
    }
  };

  // Close the modal
  const handleCloseModal = () => {
    setViewingCharity(null);
  };

  // const[modal,setModal]=useState();
  // const handleModal=()=>
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm relative">
      {/* Donation Modal */}
      {donModal && (
        <DonateForm
          handleDonation={() => setDonModal(false)}
          ProjectId={selectedProjectId}
        />
      )}

      {/* View Charity Modal */}
      {viewingCharity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-lg overflow-y-auto max-h-[90vh] relative">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              <X size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4">Charity Details</h2>
            
            {/* Check if images is an array and display the first image */}
            <img
              src={Array.isArray(viewingCharity.images) ? viewingCharity.images[0] : viewingCharity.images}
              alt={viewingCharity.title}
              className="w-40 h-40 object-cover rounded-md mb-4"
            />
            <p><strong>Title:</strong> {viewingCharity.title}</p>
            <p><strong>Poster Name:</strong> {viewingCharity.posterName}</p>
            <p><strong>Contact:</strong> {viewingCharity.contact}</p>
            <p><strong>Condition:</strong> {viewingCharity.itemCondition}</p>
            <p><strong>Status:</strong> {viewingCharity.approvalStatus}</p>
            <p><strong>Description:</strong> {viewingCharity.description}</p>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Header area */}
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
            className="bg-[#A99FFF] hover:bg-gray-300 text-white py-2 px-4 rounded-md text-sm flex items-center"
            onClick={handleNavigation}
          >
            <Plus size={16} className="mr-1" />
            Create new Chart..
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
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ItemImage</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PosterName</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PosterContact</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
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
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <img
                    src={product.images}
                    alt={product.title}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{product.title}</td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{product.posterName}</td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{product.contact}</td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{product.itemCondition}</td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{product.approvalStatus}</td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => handleViewCharity(product._id)}
                    className="text-blue-500 hover:text-blue-700"
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

export default UserCh;
