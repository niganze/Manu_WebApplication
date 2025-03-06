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

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center mb-8" style={{ color: '#A99FFF' }}>Welcome to the Marketplace</h1>
      
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="w-full md:w-1/3">
          <select 
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:border-transparent"
            style={{ borderColor: '#A99FFF', boxShadow: '0 0 0 1px #A99FFF' }}
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
              className="w-full p-3 pr-10 border rounded-lg shadow-sm focus:ring-2 focus:border-transparent"
              style={{ borderColor: '#A99FFF', boxShadow: '0 0 0 1px #A99FFF' }}
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              onClick={() => setSearchTerm('')}
            >
              {searchTerm ? "✕" : "🔍"}
            </button>
          </div>
        </div>
      </div>
      
      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.slice(0, visibleItems).map(item => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <div className="relative">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div 
                className={`absolute top-0 left-0 py-1 px-3 text-white font-semibold text-sm ${getConditionColor(item.condition)}`}
                style={{ borderBottomRightRadius: '0.5rem' }}
              >
                {item.condition}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h3>
              <p className="font-bold text-xl mb-2" style={{ color: '#A99FFF' }}>{item.price}</p>
              
              <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                <span className="flex items-center">
                  <span className="mr-1">📍</span> {item.location}
                </span>
                <span>{item.deliveryOption}</span>
              </div>
              
              <div className="pt-3 border-t border-gray-200 flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  Posted by: {item.seller}
                </div>
                <button 
                  className="text-white py-1 px-3 rounded-lg text-sm transition-colors duration-300"
                  style={{ backgroundColor: '#A99FFF', boxShadow: '0 2px 4px rgba(169, 159, 255, 0.3)' }}
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
        <div className="text-center py-10">
          <p className="text-xl text-gray-600">No products found matching your search</p>
          <button 
            className="mt-4 text-white py-2 px-4 rounded transition-colors duration-300"
            style={{ backgroundColor: '#A99FFF' }}
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
            className="bg-white border py-2 px-6 rounded-lg transition-colors duration-300 flex items-center mx-auto hover:bg-gray-50"
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