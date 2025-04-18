import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function MarketPlace() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleItems, setVisibleItems] = useState(8);

  // Load more items
  const loadMore = () => {
    setVisibleItems((prev) => prev + 8);
  };

  // Get condition badge color
  const getConditionColor = (condition = "") => {
    switch (condition.toLowerCase()) {
      case "new":
        return "bg-green-500";
      case "used":
        return "bg-amber-500";
      case "refurbished":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  // Get delivery icon

  const [property, setProperty] = useState([]);
  useEffect(() => {
    const getAllProperty = async () => {
      try {
        const res = await axios.get(
          `https://manu-backend-6i7q.onrender.com/marketItem/getAllMarkets`
        );
        setProperty(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProperty();
  }, []);

  const getDeliveryIcon = (option) => {
    if (option.includes("Delivery&Installation")) return "🔧";
    if (option.includes("Delivery")) return "🚚";
    return "🏠";
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <div className="bg-gradient-to-r from-white via-indigo-900 to-white text-purple-700">
        <div className="container mx-auto py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-xl md:text-xl font-bold mb-4 text-white">
              Manu Marketplace
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 text-white">
              Find sustainable building materials and give construction waste a
              second life.
            </p>
        
            <Link to="/community">
  <button className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
    Browse Community Projects
  </button>
</Link>


          </div>
        </div>

        {/* Statistics Bar */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-blue-50 text-[#1e3a8a] rounded-full text-sm font-medium mb-4">
                Our Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Making a Difference Together
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Together we're making a significant impact in reducing
                construction waste and environmental degradation.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm text-center transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-md group">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[#1e3a8a] transition-all group-hover:bg-[#1e3a8a] group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
                <span className="text-4xl font-bold text-[#1e3a8a] block mb-2">
                  3,500+
                </span>
                <p className="text-gray-600">Materials Repurposed</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm text-center transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-md group">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[#1e3a8a] transition-all group-hover:bg-[#1e3a8a] group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <span className="text-4xl font-bold text-[#1e3a8a] block mb-2">
                  450+
                </span>
                <p className="text-gray-600">Active Companies</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm text-center transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-md group">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[#1e3a8a] transition-all group-hover:bg-[#1e3a8a] group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <span className="text-4xl font-bold text-[#1e3a8a] block mb-2">
                  120T
                </span>
                <p className="text-gray-600">Waste Reduction</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm text-center transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-md group">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[#1e3a8a] transition-all group-hover:bg-[#1e3a8a] group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-4xl font-bold text-[#1e3a8a] block mb-2">
                  27%
                </span>
                <p className="text-gray-600">Cost Savings</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center my-8 gap-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="w-full md:w-1/3">
          <select
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
            style={{ borderColor: "#A99FFF" }}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {property.map((category) => (
              <option key={category._id} value={category._id}>
                {category.itemName}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-1/3">
          <div className="relative">
            <input
              type="text"
              className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              style={{ borderColor: "#A99FFF" }}
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-3 top-3 text-gray-500">🔍</span>
            {searchTerm && (
              <button
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-700"
                onClick={() => setSearchTerm("")}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/3 md:text-right">
          <select
            className="p-3 border rounded-lg"
            style={{ borderColor: "#E5E7EB" }}
          >
            <option>Sort: Newest First</option>
            <option>Sort: Price Low to High</option>
            <option>Sort: Price High to Low</option>
          </select>
        </div>
      </div>

      {/* Results count */}

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {property.map((item) => (
          <div
            key={item._id}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white transform hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={item.images}
                alt={item.itemName}
                className="w-full h-48 object-cover"
              />
              <div
                className={`absolute top-0 left-0 py-1 px-3 text-white font-semibold text-sm ${getConditionColor(
                  item?.itemCondition
                )}`}
                style={{ borderBottomRightRadius: "0.5rem" }}
              >
                {item?.itemCondition || "Unknown"}
              </div>
              <button className="absolute top-2 right-2 bg-black bg-opacity-25 text-white hover:bg-opacity-40 p-1.5 rounded-full transition-all">
                ♡
              </button>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2 h-14">
                {item.itemName}
              </h3>
              <p
                className="font-bold text-xl mb-3"
                style={{ color: "#A99FFF" }}
              >
                Rwf {item.itemPrice}
              </p>

              <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                <span className="flex items-center">
                  <span className="mr-1">📍</span> {item.location}
                </span>
                <span className="flex items-center">
                  <span className="mr-1">
                    {getDeliveryIcon(item.itemDeliveryStatus)}
                  </span>{" "}
                  {item.itemDeliveryStatus}
                </span>
              </div>

              <div className="pt-3 border-t border-gray-200 flex justify-between items-center">
                <div className="text-sm text-gray-600 flex items-center">
                  <span
                    className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-2 text-xs font-bold"
                    style={{ color: "#A99FFF" }}
                  >
                    {item.companyOwner.charAt(0)}
                  </span>
                  <span className="truncate max-w-32">{item.companyOwner}</span>
                </div>
                <button
                  className="text-white py-1.5 px-4 rounded-lg text-sm transition-all duration-300 hover:shadow-md"
                  style={{ backgroundColor: "#A99FFF" }}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketPlace;
