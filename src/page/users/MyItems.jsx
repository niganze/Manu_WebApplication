import React, { useState, useEffect } from "react";
import { Edit, Trash2, Filter, Search, Plus, X } from "lucide-react";
import axios from "axios";
import DonateForm from "./DonateForm";
import { useNavigate } from "react-router-dom";

function InventoryManagement() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [donModal, setDonModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleNavigation = () => {
    navigate("/user-dashboard/Usercharities/userCreateProject");
  };

  // safe getter
  const safeGet = (o, k, def = "N/A") =>
    k.split(".").reduce((a, b) => (a && a[b] != null ? a[b] : null), o) ?? def;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://manu-backend-6i7q.onrender.com/project/ApprovedProjects"
        );
        setProjects(res.data.data || []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const handleDonation = (projectId) => {
    setSelectedProjectId(projectId);
    setDonModal(true);
  };

  const handleView = (project) => {
    setSelectedProject(project);
    setViewModal(true);
  };

  const closeView = () => {
    setViewModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">

      {/* Donate Modal */}
      {donModal && (
        <DonateForm
          handleDonation={() => setDonModal(false)}
          ProjectId={selectedProjectId}
        />
      )}

      {/* View Modal */}
      {viewModal && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 relative">
            <button
              onClick={closeView}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-semibold text-[#A99FFF] mb-6">Project Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Image */}
              <div>
                {Array.isArray(selectedProject.images) ? (
                  <img
                    src={selectedProject.images[0]}
                    alt={safeGet(selectedProject, "title")}
                    className="w-full h-64 object-cover rounded-md"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://via.placeholder.com/400x300?text=No+Image";
                    }}
                  />
                ) : (
                  <img
                    src={selectedProject.images}
                    alt={safeGet(selectedProject, "title")}
                    className="w-full h-64 object-cover rounded-md"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://via.placeholder.com/400x300?text=No+Image";
                    }}
                  />
                )}
              </div>

              {/* Details */}
              <div className="space-y-4 text-sm text-gray-700">
                <p>
                  <span className="font-medium">Title:</span>{" "}
                  {safeGet(selectedProject, "title")}
                </p>
                <p>
                  <span className="font-medium">Poster Name:</span>{" "}
                  {safeGet(selectedProject, "posterName")}
                </p>
                <p>
                  <span className="font-medium">Contact:</span>{" "}
                  {safeGet(selectedProject, "contact")}
                </p>
                <p>
                  <span className="font-medium">Condition:</span>{" "}
                  {safeGet(selectedProject, "itemCondition")}
                </p>
                <p>
                  <span className="font-medium">Status:</span>{" "}
                  {safeGet(selectedProject, "approvalStatus")}
                </p>
                <div>
                  <span className="font-medium">Description:</span>
                  <p className="mt-1 text-gray-600">
                    {safeGet(selectedProject, "description", "No description provided.")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => handleDonation(selectedProject._id)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                Donate
              </button>
              <button
                onClick={closeView}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
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
              <option>All products</option>
              <option>Low in stock</option>
              <option>In requisition</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <Filter size={14} />
            </div>
          </div>
          <span className="ml-3 text-gray-500 text-sm">projects</span>
        </div>

        <div className="flex items-center w-full md:w-auto">
          <div className="relative mr-2 w-full md:w-auto">
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
            className="bg-[#A99FFF] hover:bg-gray-300 text-white py-2 px-4 rounded-md text-sm flex items-center"
          >
            <Plus size={16} className="mr-1" /> Create new Project
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
              {[
                "No.",
                "Image",
                "Title",
                "Poster Name",
                "Contact",
                "Condition",
                "Status",
                "Actions",
              ].map((hdr) => (
                <th
                  key={hdr}
                  className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {hdr}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((proj, idx) => (
              <tr key={proj._id} className="hover:bg-gray-50">
                <td className="px-3 py-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </td>
                <td className="px-3 py-2 text-sm text-gray-500">{idx + 1}</td>
                <td className="px-3 py-2">
                  <img
                    src={
                      Array.isArray(proj.images)
                        ? proj.images[0]
                        : proj.images
                    }
                    alt={proj.title}
                    className="h-8 w-8 rounded-md object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/40?text=No+Img";
                    }}
                  />
                </td>
                <td className="px-3 py-2 text-sm text-gray-500">
                  {proj.title}
                </td>
                <td className="px-3 py-2 text-sm text-gray-500">
                  {proj.posterName}
                </td>
                <td className="px-3 py-2 text-sm text-gray-500">
                  {proj.contact}
                </td>
                <td className="px-3 py-2 text-sm text-gray-500">
                  {proj.itemCondition}
                </td>
                <td className="px-3 py-2 text-sm text-gray-500">
                  {proj.approvalStatus}
                </td>
                <td className="px-3 py-2 space-x-2 flex">
                  <button
                    onClick={() => handleView(proj)}
                    className="text-blue-600 hover:underline"
                  >
                    VIEW
                  </button>
                  <button
                    onClick={() => handleDonation(proj._id)}
                    className="text-green-600 hover:underline"
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
