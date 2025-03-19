import React, { useState } from "react";
import { useEffect} from "react";
import axios from "axios";
import IM from "../../assets/bricks.jpeg"; // Ensure this path is correct
const ImageGrid = () => {
  const [property, setProperty ]= useState([]);

  useEffect(() => {
    const getAllProperty = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/project/getAllProjects`);
        setProperty(res.data);
        console.log(res.data);
        
      } catch (error) {
        console.log(error);
      }
    };
    getAllProperty();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-1 w-20 h-14">
      {property.map((item) => (
        <div 
          key={item._id} 
          className="bg-gray-100 rounded-full overflow-hidden flex items-center justify-center"
          style={{ width: '30px', height: '30px' }}
        >
          <img 
            src={item.images} // Replace this with actual image if you have paths
            alt={`Item image ${item._id + 1}`} 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      ))}
    </div>
  );
};

const ManageDonationItems = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  // Sample initial data
  const [donationItems, setDonationItems] = useState([
    {
      id: 1,
      title: "Wood Planks for School Renovation",
      description: "Unused wood planks suitable for school construction project",
      category: "Materials",
      userName: "John Doe",
      postedBy: "Community Builders Inc.",
      beneficiary: "Local Elementary School",
      condition: "Used",
      images: [1, 2, 3],
      deliveryType: "Pickup Required",
      datePosted: "2024-03-04"
    },
    {
      id: 2,
      title: "Construction Tools Set",
      description: "Complete set of construction hand tools",
      category: "Tools",
      userName: "Sarah Smith",
      postedBy: "DIY Helpers Foundation",
      beneficiary: "Community Housing Project",
      condition: "New",
      images: [1, 2],
      deliveryType: "Can be Delivered",
      datePosted: "2024-02-28"
    },
    {
      id: 2,
      title: "Construction Tools Set",
      description: "Complete set of construction hand tools",
      category: "Tools",
      userName: "Sarah Smith",
      postedBy: "DIY Helpers Foundation",
      beneficiary: "Community Housing Project",
      condition: "New",
      images: [1, 2],
      deliveryType: "Can be Delivered",
      datePosted: "2024-02-28"
    },
    {
      id: 2,
      title: "Construction Tools Set",
      description: "Complete set of construction hand tools",
      category: "Tools",
      userName: "Sarah Smith",
      postedBy: "DIY Helpers Foundation",
      beneficiary: "Community Housing Project",
      condition: "New",
      images: [1, 2],
      deliveryType: "Can be Delivered",
      datePosted: "2024-02-28"
    },
  ]);

  // Unique categories for filter dropdown
  const categories = [...new Set(donationItems.map(item => item.category))];

  // Advanced filtering function
  const filteredItems = donationItems.filter(item => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.postedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.beneficiary.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = 
      filterCategory === "" || item.category === filterCategory;

    return matchesSearch && matchesCategory;
  });

  // Toggle item selection
  const toggleItemSelection = (itemId) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  // Toggle all items selection
  const toggleAllItemsSelection = () => {
    setSelectedItems(
      selectedItems.length === filteredItems.length 
        ? [] 
        : filteredItems.map(item => item.id)
    );
  };

  // Action handlers
  const handleViewItem = (item) => {
    console.log("Viewing item:", item);
  };

  const handleRemoveItem = (itemId) => {
    setDonationItems(prev => prev.filter(item => item.id !== itemId));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Manage Donation Items</h1>
      
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search donations..." 
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select 
          className="py-2 px-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
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
                    checked={selectedItems.length === filteredItems.length}
                    onChange={toggleAllItemsSelection}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="px-2 py-2 text-left">Title</th>
                <th className="px-2 py-2 text-left">Category</th>
                <th className="px-2 py-2 text-left">User</th>
                <th className="px-2 py-2 text-left">Posted By</th>
                <th className="px-2 py-2 text-left">Beneficiary</th>
                <th className="px-2 py-2 text-left">Condition</th>
                <th className="px-2 py-2 text-left">Delivery</th>
                <th className="px-2 py-2 text-left">Images</th>
                <th className="px-2 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-2 py-2">
                    <input 
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => toggleItemSelection(item.id)}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-2 py-2 font-medium text-gray-900 text-sm">{item.title}</td>
                  <td className="px-2 py-2 text-gray-600 text-sm">{item.category}</td>
                  <td className="px-2 py-2 text-gray-600 text-sm">{item.userName}</td>
                  <td className="px-2 py-2 text-gray-600 text-sm">{item.postedBy}</td>
                  <td className="px-2 py-2 text-gray-600 text-sm">{item.beneficiary}</td>
                  <td className="px-2 py-2 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${item.condition === 'New' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                      }`}>
                      {item.condition}
                    </span>
                  </td>
                  <td className="px-2 py-2 text-sm">{item.deliveryType}</td>
                  <td className="px-2 py-2">
                    <ImageGrid images={item.images} />
                  </td>
                  <td className="px-2 py-2 text-center text-sm">
                    <div className="flex justify-center space-x-2">
                      <button 
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-xs"
                        onClick={() => handleViewItem(item)}
                      >
                        View
                      </button>
                      <button 
                        className="text-red-600 hover:text-red-800 transition-colors duration-200 text-xs"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-6 text-gray-500">
          <p className="text-lg">No items found matching your search</p>
          <p className="text-sm text-gray-400 mt-2">Try adjusting your search or filter</p>
        </div>
      )}
    </div>
  );
};

export default ManageDonationItems;
