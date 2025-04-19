import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SingleMarket() {
  const { id } = useParams();
  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`https://manu-backend-6i7q.onrender.com/MarketItem/getMarketById/${id}`);
        setItemData(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching item by ID:", err);
        setError('Failed to load item');
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  const handleImageClick = (index) => {
    setActiveImage(index);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-700">Loading item details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="bg-red-100 p-4 rounded-lg">
            <p className="text-red-500 text-xl">{error}</p>
            <button 
              className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!itemData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <p className="text-xl text-gray-700">No item found.</p>
        </div>
      </div>
    );
  }

  // Background image for the first section
  const backgroundStyle = {
    backgroundImage: itemData.images && itemData.images.length > 0 
      ? `linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.85)), url(${itemData.images[0]})`
      : `linear-gradient(rgba(30, 58, 138, 1), rgba(30, 58, 138, 0.8))`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-12">
      {/* Hero section with background image */}
      <div 
        style={backgroundStyle} 
        className="pt-24 pb-12 px-4 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{itemData.itemName}</h1>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="bg-white text-blue-900 px-4 py-1 rounded-full font-bold text-lg">
              ${itemData.itemPrice}
            </span>
            <span className="bg-purple-100 text-blue-900 px-4 py-1 rounded-full">
              {itemData.itemCondition}
            </span>
            <span className="bg-purple-100 text-blue-900 px-4 py-1 rounded-full">
              {itemData.itemDeliveryStatus}
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 -mt-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            {/* Image gallery - Left side */}
            <div className="md:w-1/2 p-6">
              {itemData.images && itemData.images.length > 0 && (
                <>
                  <div className="mb-4 rounded-lg overflow-hidden border border-gray-200">
                    <img
                      src={itemData.images[activeImage]}
                      alt={`${itemData.itemName}`}
                      className="w-full h-80 object-contain bg-gray-50"
                    />
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {itemData.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                          activeImage === index ? 'border-blue-900' : 'border-transparent'
                        }`}
                        onClick={() => handleImageClick(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Details - Right side */}
            <div className="md:w-1/2 p-6 bg-gray-50">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-2">Item Details</h2>
                <div className="h-1 w-20 bg-purple-300 mb-4"></div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-1/3 text-gray-600 font-medium">Company:</span>
                  <span className="w-2/3 font-semibold">{itemData.companyOwner}</span>
                </div>
                <div className="flex items-start">
                  <span className="w-1/3 text-gray-600 font-medium">Posted By:</span>
                  <span className="w-2/3">{itemData.posterName || 'N/A'}</span>
                </div>
                <div className="flex items-start">
                  <span className="w-1/3 text-gray-600 font-medium">Location:</span>
                  <span className="w-2/3">{itemData.location}</span>
                </div>
                <div className="flex items-start">
                  <span className="w-1/3 text-gray-600 font-medium">Contact:</span>
                  <span className="w-2/3">{itemData.contact}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">{itemData.description}</p>
              </div>

              <div className="mt-8">
                <button className="w-full py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition">
                  Contact Seller
                </button>
                
              </div>
            </div>
          </div>
        </div>

        {/* Additional information */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Item Specifications</h2>
          <div className="h-1 w-20 bg-purple-300 mb-6"></div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Condition Details</h3>
              <p className="text-gray-700">{itemData.itemCondition}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Delivery Information</h3>
              <p className="text-gray-700">{itemData.itemDeliveryStatus}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleMarket;