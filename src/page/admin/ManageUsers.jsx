import React from "react";
import { Users } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
function ManageUsers() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const [users, setUsers ]= useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/user/getAllUsers`);
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white ">
        <div>
          <button
            onClick={toggleDropdown}
            id="dropdownActionButton"
            className="inline-flex items-center  bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <span className="sr-only">Action button</span>
            Action
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {/* Dropdown menu */}
          {dropdownOpen && (
            <div
              id="dropdownAction"
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 absolute mt-2"
            >
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Reward
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Promote
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Activate account
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer"
                >
                  Delete User
                </a>
              </div>
            </div>
          )}
        </div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
          />
        </div>
      </div>
     
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
         
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Example User Rows */}
          {users.map(
            (item) => (
              <tr
                key={item._id}
                className="bg-white border-b  dark:border-gray-700 border-gray-200 hover:bg-gray-50  text-gray-400"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-search-${item._id + 1}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`checkbox-table-search-${item._item + 1}`}
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Users size={20} className="text-gray-600" />
                  <div className="ps-3">
                    <div className="text-base font-semibold  text-gray-500 ">{item.firstname} &nbsp; {item.lastname}</div>
                    <div className="font-normal text-gray-500">
                      {item.email}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  {item.role}
                </td>{" "}
                {/* Role is set here as 'Admin' or 'User' */}
              
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit user
                  </a>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-red-400 dark:text-blue-500 hover:underline"
                  >
                    Delete user
                  </a>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ManageUsers;
