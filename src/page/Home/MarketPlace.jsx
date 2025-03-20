import React, { useState, useEffect } from 'react';

import cameraImage from '../../assets/Professional Security Camera.jpeg';
import exitSignImage from '../../assets/Emergency Exit Sign LED.jpeg';
import floodlightImage from '../../assets/Industrial Outdoor Floodlight.jpeg';
import wallPanelImage from '../../assets/Acoustic Wall Panels (set of 6).jpeg';
import paintImage from '../../assets/Premium Wall Paint 5 Gallon.jpeg';
import acUnitImage from '../../assets/Ductless Mini-Split AC Unit.jpeg';
import poolFilterImage from '../../assets/Swimming Pool Filter System.jpeg';
import roofingPanelImage from '../../assets/Metal Roofing Panels (100 sq ft).jpeg';
import windowImage from '../../assets/Double-Pane Energy Efficient Window.jpeg';
import sinkImage from '../../assets/Premium Stainless Steel Sink.jpeg';
import elevatorImage from '../../assets/Commercial Passenger Elevator.jpeg';
import cabinetImage from '../../assets/Commercial Passenger Elevator.jpeg';

function MarketPlace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleItems, setVisibleItems] = useState(8);
  const [itemsData, setItemsData] = useState([]);
  
  // All building product categories
  const categories = [
    { id: 'all', name: "All Categories" },
    { id: 'comm', name: "Communications, safety, and security" },
    { id: 'sign', name: "Signage and signaling" },
    { id: 'elec', name: "Electrical, power, and lighting" },
    { id: 'wall', name: "Walls and barriers" },
    { id: 'coat', name: "Coverings, coatings, and finishes" },
    { id: 'vent', name: "Ventilation, air conditioning, and space heating" },
    { id: 'pool', name: "Ponds, swimming pools, bunds, and tanks" },
    { id: 'roof', name: "Roofs, ceilings, and soffits" },
    { id: 'door', name: "Doors, windows, and hatches" },
    { id: 'gen', name: "General building products" },
    { id: 'lift', name: "Lifts, elevators, and escalators" },
    { id: 'plumb', name: "Plumbing and waste disposal" },
    { id: 'furn', name: "Fittings, furnishings, and equipment" },
    { id: 'stair', name: "Stairs and ramps" },
    { id: 'struct', name: "Structure" },
    { id: 'fix', name: "Plumbing fixtures and accessories" }
  ];

  // Sample marketplace items
  useEffect(() => {
    const sampleItems = [
      {
        id: 1,
        name: "Professional Security Camera",
        category: "comm",
        image: cameraImage,
        condition: "New",
        price: "$349.99",
        location: "Chicago, IL",
        seller: "SecurityTech Inc.",
        deliveryOption: "Pickup & Delivery"
      },
      {
        id: 2,
        name: "Emergency Exit Sign LED",
        category: "sign",
        image: exitSignImage,
        condition: "New",
        price: "$89.99",
        location: "Boston, MA",
        seller: "SafetyFirst Company",
        deliveryOption: "Delivery Only"
      },
      {
        id: 3,
        name: "Industrial Outdoor Floodlight",
        category: "elec",
        image: floodlightImage,
        condition: "Used",
        price: "$125.00",
        location: "Phoenix, AZ",
        seller: "Desert Lighting Co.",
        deliveryOption: "Pickup Only"
      },
      {
        id: 4,
        name: "Acoustic Wall Panels",
        category: "wall",
        image: wallPanelImage,
        condition: "New",
        price: "$199.99",
        location: "Austin, TX",
        seller: "SoundProof Solutions",
        deliveryOption: "Pickup & Delivery"
      },
      {
        id: 5,
        name: "Premium Wall Paint",
        category: "coat",
        image: paintImage,
        condition: "New",
        price: "$189.50",
        location: "Seattle, WA",
        seller: "Northwest Paints",
        deliveryOption: "Pickup & Delivery"
      },
      {
        id: 6,
        name: "Ductless Mini-Split AC Unit",
        category: "vent",
        image: acUnitImage,
        condition: "New",
        price: "$1,299.00",
        location: "Miami, FL",
        seller: "Cool Living HVAC",
        deliveryOption: "Delivery & Installation"
      },
      {
        id: 7,
        name: "Swimming Pool Filter System",
        category: "pool",
        image: poolFilterImage,
        condition: "Used",
        price: "$450.00",
        location: "Las Vegas, NV",
        seller: "Desert Pools",
        deliveryOption: "Pickup Only"
      },
      {
        id: 8,
        name: "Metal Roofing Panels",
        category: "roof",
        image: roofingPanelImage,
        condition: "New",
        price: "$575.00",
        location: "Denver, CO",
        seller: "Mountain Roofing Supply",
        deliveryOption: "Delivery Only"
      },
      {
        id: 9,
        name: "Double-Pane Energy Efficient Window",
        category: "door",
        image: windowImage,
        condition: "New",
        price: "$349.99",
        location: "Minneapolis, MN",
        seller: "Northern Windows & Doors",
        deliveryOption: "Pickup & Delivery"
      },
      {
        id: 10,
        name: "Premium Stainless Steel Sink",
        category: "fix",
        image: sinkImage,
        condition: "New",
        price: "$249.99",
        location: "San Diego, CA",
        seller: "Coastal Fixtures",
        deliveryOption: "Pickup & Delivery"
      },
      {
        id: 11,
        name: "Commercial Passenger Elevator",
        category: "lift",
        image: elevatorImage,
        condition: "Refurbished",
        price: "$35,000.00",
        location: "Chicago, IL",
        seller: "Urban Lift Solutions",
        deliveryOption: "Delivery & Installation"
      },
      {
        id: 12,
        name: "Kitchen Cabinet Set",
        category: "furn",
        image: cabinetImage,
        condition: "New",
        price: "$2,499.00",
        location: "Portland, OR",
        seller: "Pacific Kitchen Design",
        deliveryOption: "Delivery & Installation"
      }
    ];
    
    setItemsData(sampleItems);
  }, []);
  

  // Filter items based on search and category
  const filteredItems = itemsData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Load more items
  const loadMore = () => {
    setVisibleItems(prev => prev + 8);
  };

  // Get condition badge color
  const getConditionColor = (condition) => {
    switch(condition.toLowerCase()) {
      case 'new':
        return 'bg-green-500';
      case 'used':
        return 'bg-amber-500';
      case 'refurbished':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Get delivery icon
  const getDeliveryIcon = (option) => {
    if (option.includes('Installation')) return '🔧';
    if (option.includes('Delivery')) return '🚚';
    return '🏠';
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-white via-indigo-900 to-white text-purple-700">
        <div className="container mx-auto py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-xl md:text-xl font-bold mb-4 text-white">Manu Marketplace</h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 text-white">
              Find sustainable building materials and give construction waste a second life.
            </p>
            <div className=" flex-col md:flex-row gap-4 justify-center">
      
              <button className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
                Browse Community Projects
              </button>
            </div>
          </div>
        </div>
        
        {/* Statistics Bar */}
        <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-50 text-[#1e3a8a] rounded-full text-sm font-medium mb-4">Our Impact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Making a Difference Together</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Together we're making a significant impact in reducing construction waste and environmental degradation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm text-center transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-md group">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[#1e3a8a] transition-all group-hover:bg-[#1e3a8a] group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <span className="text-4xl font-bold text-[#1e3a8a] block mb-2">3,500+</span>
              <p className="text-gray-600">Materials Repurposed</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm text-center transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-md group">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[#1e3a8a] transition-all group-hover:bg-[#1e3a8a] group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-4xl font-bold text-[#1e3a8a] block mb-2">450+</span>
              <p className="text-gray-600">Active Companies</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm text-center transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-md group">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[#1e3a8a] transition-all group-hover:bg-[#1e3a8a] group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <span className="text-4xl font-bold text-[#1e3a8a] block mb-2">120T</span>
              <p className="text-gray-600">Waste Reduction</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm text-center transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-md group">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[#1e3a8a] transition-all group-hover:bg-[#1e3a8a] group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-4xl font-bold text-[#1e3a8a] block mb-2">27%</span>
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
            style={{ borderColor: '#A99FFF' }}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="w-full md:w-1/3">
          <div className="relative">
            <input
              type="text"
              className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              style={{ borderColor: '#A99FFF' }}
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-3 top-3 text-gray-500">
              🔍
            </span>
            {searchTerm && (
              <button 
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-700"
                onClick={() => setSearchTerm('')}
              >
                ✕
              </button>
            )}
          </div>
        </div>
        
        <div className="w-full md:w-1/3 md:text-right">
          <select className="p-3 border rounded-lg" style={{ borderColor: '#E5E7EB' }}>
            <option>Sort: Newest First</option>
            <option>Sort: Price Low to High</option>
            <option>Sort: Price High to Low</option>
          </select>
        </div>
      </div>
      
      {/* Results count */}
      <div className="mb-6 text-gray-600">
        Showing {Math.min(filteredItems.length, visibleItems)} of {filteredItems.length} results
      </div>
      
      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.slice(0, visibleItems).map(item => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white transform hover:-translate-y-1">
            <div className="relative">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div 
                className={`absolute top-0 left-0 py-1 px-3 text-white font-semibold text-sm ${getConditionColor(item.condition)}`}
                style={{ borderBottomRightRadius: '0.5rem' }}
              >
                {item.condition}
              </div>
              <button className="absolute top-2 right-2 bg-black bg-opacity-25 text-white hover:bg-opacity-40 p-1.5 rounded-full transition-all">
                ♡
              </button>
            </div>
            
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2 h-14">{item.name}</h3>
              <p className="font-bold text-xl mb-3" style={{ color: '#A99FFF' }}>{item.price}</p>
              
              <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                <span className="flex items-center">
                  <span className="mr-1">📍</span> {item.location}
                </span>
                <span className="flex items-center">
                  <span className="mr-1">{getDeliveryIcon(item.deliveryOption)}</span> {item.deliveryOption}
                </span>
              </div>
              
              <div className="pt-3 border-t border-gray-200 flex justify-between items-center">
                <div className="text-sm text-gray-600 flex items-center">
                  <span className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-2 text-xs font-bold" style={{ color: '#A99FFF' }}>
                    {item.seller.charAt(0)}
                  </span>
                  <span className="truncate max-w-32">{item.seller}</span>
                </div>
                <button 
                  className="text-white py-1.5 px-4 rounded-lg text-sm transition-all duration-300 hover:shadow-md"
                  style={{ backgroundColor: '#A99FFF' }}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Show no results message */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm my-8">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-xl text-gray-600 mb-4">No products found matching your search</p>
          <button 
            className="bg-white border py-2 px-6 rounded-lg hover:bg-gray-50"
            style={{ borderColor: '#A99FFF', color: '#A99FFF' }}
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
          >
            Reset Filters
          </button>
        </div>
      )}
      
      {/* Load More Button */}
      {filteredItems.length > visibleItems && (
        <div className="text-center mt-8">
          <button 
            onClick={loadMore}
            className="bg-white border py-2 px-6 rounded-lg transition-all duration-300 flex items-center mx-auto hover:bg-gray-50 hover:shadow-md"
            style={{ borderColor: '#A99FFF', color: '#A99FFF' }}
          >
            See More <span className="ml-2">→</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default MarketPlace;