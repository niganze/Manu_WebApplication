import React, { useState, useEffect } from 'react';

function Interactions() {
  const [interactions, setInteractions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // Simulate fetching data from API
    setTimeout(() => {
      const mockInteractions = [
        {
          id: 1,
          type: 'message',
          itemName: 'Used Bricks (500 pieces)',
          user: 'John Doe',
          date: '2025-03-05T10:30:00',
          content: 'Is this still available? Can I pick it up tomorrow?',
          isRead: true,
          itemId: 101
        },
        {
          id: 2,
          type: 'offer',
          itemName: 'Ceramic Tiles (20 sq. meters)',
          user: 'Maria Garcia',
          date: '2025-03-08T14:15:00',
          content: 'I would like to offer $150 instead of $180.',
          isRead: false,
          itemId: 102
        },
        {
          id: 3,
          type: 'inquiry',
          itemName: 'Paint Supplies',
          user: 'Robert Chen',
          date: '2025-03-09T09:45:00',
          content: 'What colors of paint are included in this donation?',
          isRead: false,
          itemId: 103
        },
        {
          id: 4,
          type: 'message',
          itemName: 'Used Bricks (500 pieces)',
          user: 'John Doe',
          date: '2025-03-06T16:20:00',
          content: 'Thank you for the information. I will be there at 10 AM.',
          isRead: true,
          itemId: 101
        }
      ];
      
      setInteractions(mockInteractions);
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredInteractions = interactions.filter(interaction => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'unread') return !interaction.isRead;
    return interaction.type === activeFilter;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const markAsRead = (id) => {
    setInteractions(interactions.map(item => 
      item.id === id ? { ...item, isRead: true } : item
    ));
  };

  const getInteractionIcon = (type) => {
    switch(type) {
      case 'message':
        return '💬';
      case 'offer':
        return '💰';
      case 'inquiry':
        return '❓';
      default:
        return '📨';
    }
  };

  if (isLoading) {
    return <div className="p-6 text-center">Loading your interactions...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Interactions</h1>
      
      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button 
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-full text-sm ${activeFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
        >
          All
        </button>
        <button 
          onClick={() => setActiveFilter('unread')}
          className={`px-4 py-2 rounded-full text-sm ${activeFilter === 'unread' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
        >
          Unread
        </button>
        <button 
          onClick={() => setActiveFilter('message')}
          className={`px-4 py-2 rounded-full text-sm ${activeFilter === 'message' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
        >
          Messages
        </button>
        <button 
          onClick={() => setActiveFilter('offer')}
          className={`px-4 py-2 rounded-full text-sm ${activeFilter === 'offer' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
        >
          Offers
        </button>
        <button 
          onClick={() => setActiveFilter('inquiry')}
          className={`px-4 py-2 rounded-full text-sm ${activeFilter === 'inquiry' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
        >
          Inquiries
        </button>
      </div>
      
      {/* Interactions List */}
      <div className="space-y-4">
        {filteredInteractions.length > 0 ? (
          filteredInteractions.map(interaction => (
            <div 
              key={interaction.id} 
              className={`border rounded-lg p-4 ${!interaction.isRead ? 'bg-blue-50 border-blue-200' : 'bg-white'}`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{getInteractionIcon(interaction.type)}</span>
                  <h3 className="font-medium">{interaction.itemName}</h3>
                  {!interaction.isRead && (
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">New</span>
                  )}
                </div>
                <span className="text-sm text-gray-500">{formatDate(interaction.date)}</span>
              </div>
              
              <p className="text-sm mb-3">
                <span className="font-medium">{interaction.user}:</span> {interaction.content}
              </p>
              
              <div className="flex justify-between items-center">
                <div className="text-sm">
                  <span className="text-gray-500">Type: </span>
                  <span className="capitalize">{interaction.type}</span>
                </div>
                
                <div className="flex gap-2">
                  {!interaction.isRead && (
                    <button 
                      onClick={() => markAsRead(interaction.id)}
                      className="text-sm text-blue-500 hover:text-blue-700"
                    >
                      Mark as read
                    </button>
                  )}
                  <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                    Respond
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-8 border rounded-lg">
            <p className="text-gray-500">No interactions found matching your filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Interactions;