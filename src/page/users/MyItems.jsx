import React, { useState, useEffect } from 'react';
// Import icons directly if you have lucide-react installed
import { Heart, ShoppingCart, Gift, Edit, Trash2, Eye, MessageSquare } from 'lucide-react';
import Bricks from '../../assets/bricks.jpeg';
import Ceramic from '../../assets/ciments.jpeg';
import Paint from '../../assets/Premium Wall Paint 5 Gallon.jpeg';

function MyItems() {
  // Sample data - in a real application, this would come from an API
  const [marketItems, setMarketItems] = useState([]);
  const [donationItems, setDonationItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('market');

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setMarketItems([
        {
          id: 1,
          title: 'Used Bricks (500 pieces)',
          description: 'Leftover bricks from a construction project. Good condition.',
          price: 250,
          category: 'bricks',
          condition: 'Used',
          location: 'Downtown Area',
          images: Bricks,
          views: 24,
          likes: 5,
          messages: 2,
          status: 'Active'
        },
        {
          id: 2,
          title: 'Ceramic Tiles (20 sq. meters)',
          description: 'Unused ceramic tiles. Perfect for bathroom or kitchen.',
          price: 180,
          category: 'tiles',
          condition: 'New',
          location: 'North District',
          images: Ceramic,
          views: 18,
          likes: 3,
          messages: 1,
          status: 'Sold'
        }
      ]);
      
      setDonationItems([
        {
          id: 1,
          title: 'Paint Supplies',
          description: 'Leftover paint and brushes from a renovation project.',
          category: 'supplies',
          condition: 'Used',
          location: 'East Side',
          beneficiary: 'Local School',
          images: Paint,
          views: 12,
          likes: 4,
          status: 'Pending Approval'
        }
      ]);
      
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleEdit = (id, type) => {
    console.log(`Edit ${type} item with id: ${id}`);
    // Implement edit functionality
  };

  const handleDelete = (id, type) => {
    console.log(`Delete ${type} item with id: ${id}`);
    // Implement delete functionality
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return '#10b981'; // green
      case 'Sold':
        return '#3b82f6'; // blue
      case 'Pending Approval':
        return '#f59e0b'; // yellow
      default:
        return '#6b7280'; // gray
    }
  };

  const renderItemCard = (item, type) => {
    return (
      <div key={item.id} className="border rounded-lg mb-4 shadow-sm overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description.substring(0, 100)}...</p>
            </div>
            <span 
              className="inline-block px-2 py-1 rounded-full text-xs font-semibold text-white"
              style={{ backgroundColor: getStatusColor(item.status) }}
            >
              {item.status}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <img 
              src={item.images} 
              alt={item.title} 
              className="rounded-md w-full md:w-1/3 h-48 object-cover"
            />
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm font-medium">Category</p>
                  <p className="text-sm">{item.category}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Condition</p>
                  <p className="text-sm">{item.condition}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm">{item.location}</p>
                </div>
                {type === 'market' ? (
                  <div>
                    <p className="text-sm font-medium">Price</p>
                    <p className="text-sm">${item.price}</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm font-medium">Beneficiary</p>
                    <p className="text-sm">{item.beneficiary}</p>
                  </div>
                )}
              </div>
              
              <div className="flex items-center mt-4 space-x-4">
                <div className="flex items-center">
                  {/* Replace with text if you don't have icons */}
                  {typeof Eye === 'function' ? <Eye size={16} className="mr-1" /> : <span className="mr-1">👁️</span>}
                  <span className="text-xs">{item.views}</span>
                </div>
                <div className="flex items-center">
                  {typeof Heart === 'function' ? <Heart size={16} className="mr-1" /> : <span className="mr-1">❤️</span>}
                  <span className="text-xs">{item.likes}</span>
                </div>
                {item.messages && (
                  <div className="flex items-center">
                    {typeof MessageSquare === 'function' ? <MessageSquare size={16} className="mr-1" /> : <span className="mr-1">💬</span>}
                    <span className="text-xs">{item.messages}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t bg-gray-50 flex justify-end space-x-2">
          <button 
            onClick={() => handleEdit(item.id, type)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm flex items-center"
          >
            {typeof Edit === 'function' ? <Edit size={16} className="mr-1" /> : <span className="mr-1">✏️</span>}
            Edit
          </button>
          <button 
            onClick={() => handleDelete(item.id, type)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm flex items-center text-red-500"
          >
            {typeof Trash2 === 'function' ? <Trash2 size={16} className="mr-1" /> : <span className="mr-1">🗑️</span>}
            Delete
          </button>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <div className="p-6 text-center">Loading your items...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Items</h1>
      
      <div className="mb-6 border-b">
        <div className="flex">
          <button
            className={`py-2 px-4 flex items-center ${activeTab === 'market' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
            onClick={() => setActiveTab('market')}
          >
            {typeof ShoppingCart === 'function' ? <ShoppingCart size={16} className="mr-2" /> : <span className="mr-2">🛒</span>}
            Marketplace Items ({marketItems.length})
          </button>
          <button
            className={`py-2 px-4 flex items-center ${activeTab === 'donations' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
            onClick={() => setActiveTab('donations')}
          >
            {typeof Gift === 'function' ? <Gift size={16} className="mr-2" /> : <span className="mr-2">🎁</span>}
            Donation Items ({donationItems.length})
          </button>
        </div>
      </div>
      
      <div className="mt-4">
        {activeTab === 'market' && (
          <>
            {marketItems.length > 0 ? (
              marketItems.map(item => renderItemCard(item, 'market'))
            ) : (
              <div className="text-center p-8 border rounded-lg">
                <p className="mb-4">You haven't posted any items for sale yet.</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Post an Item for Sale</button>
              </div>
            )}
          </>
        )}
        
        {activeTab === 'donations' && (
          <>
            {donationItems.length > 0 ? (
              donationItems.map(item => renderItemCard(item, 'donation'))
            ) : (
              <div className="text-center p-8 border rounded-lg">
                <p className="mb-4">You haven't posted any items for donation yet.</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Post an Item for Donation</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default MyItems;