import React, { useState, useEffect } from "react";
import { Edit, Trash2, Filter, Search, Plus } from "lucide-react";
import axios from "axios";

function UserMarketPlace() {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    const getAllItems = async () => {
      try {
        const res = await axios.get(
          `https://manu-backend-6i7q.onrender.com/marketItem/getAllMarkets`
        );
        setProperty(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getAllItems();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
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
          <span className="ml-3 text-gray-500 text-sm">
            products
          </span>
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
          <button className="bg-[#A99FFF]  hover:bg-gray-300 text-white py-2 px-4 rounded-md text-sm flex items-center">
            <Plus size={16} className="mr-1" />
            All Available At Market..
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
                ItemName
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Item Price
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                PosterContact
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                status 
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            

            {property.map((item,index) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="px-3 py-2 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    
                  />
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                  {index+1}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      src={item.images}
                      alt={item.itemName}
                      className="h-8 w-8 rounded-md object-cover mr-2"
                    />
                    
                  </div>
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                  {item.itemName}
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                 ${item.itemPrice}
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                  {item.contact}
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                  {item.itemCondition}
  
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                
                    {item.status}
                  </td>
               
                <td className="px-3 py-2 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <button
                    
                      className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-100 "
                    >
                      VIEW
                    </button>
                  </div>
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
