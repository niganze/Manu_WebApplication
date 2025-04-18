import React, { useEffect, useState } from "react";
import { Users } from "lucide-react";
import axios from "axios";
import { Notify } from "notiflix";

function ManageUsers() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const usersPerPage = 5;

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const getAllUsers = async () => {
    try {
      const res = await axios.get(`https://manu-backend-6i7q.onrender.com/user/getAllUsers`);
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://manu-backend-6i7q.onrender.com/charity/createCharity/user/deleteUser/${id}`);
      setUsers((prev) => prev.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
    Notify.success("User Deleted SuccessFull")
  };

  const handleView = async (id) => {
    try {
      const res = await axios.get(`https://manu-backend-6i7q.onrender.com/charity/createCharity/user/getUserById/${id}`);
      setSelectedUser(res.data);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
      <div className="flex items-center justify-between flex-wrap pb-4 bg-white">
       

        <div className="relative mt-2 md:mt-0">
          <div
            type="text"
            id="table-search-users"
            className=" text-xl font-bold
             p-2 ps-10  text-gray-900  border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
            placeholder="Search for users"
          >
            User Management 
          </div>
        </div>
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
          <tr>
            <th className="p-4"><input type="checkbox" /></th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((item) => (
            <tr key={item._id} className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50">
              <td className="p-4"><input type="checkbox" /></td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Users size={20} className="text-gray-600 mr-2" />
                  <div>
                    <div className="text-base font-semibold text-gray-700 dark:text-gray-200">
                      {item.firstname} {item.lastname}
                    </div>
                    <div className="text-sm text-gray-500">{item.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">{item.role}</td>
              <td className="px-6 py-4 space-x-3">
                <button
                  onClick={() => handleView(item._id)}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-md text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-3 py-1 rounded-md text-sm ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-md text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Modal for View */}
      {showModal && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">User Details</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300"><strong>Name:</strong> {selectedUser.firstname} {selectedUser.lastname}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300"><strong>Email:</strong> {selectedUser.email}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300"><strong>Role:</strong> {selectedUser.role}</p>

            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageUsers;
