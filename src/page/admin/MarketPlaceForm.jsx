import React, { useState } from 'react';

const MarketPlaceForm = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    itemPrice: '',
    itemDeliveryStatus: '',
    companyOwner: '',
    description: '',
    posterName: '',
    location: '',
    contact: '',
    itemCondition: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 sm:p-6 md:p-8 transition-all duration-300">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#A99FFF] mb-4 sm:mb-6 md:mb-8">Market Place Submission Form</h1>
        
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {/* First column */}
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="itemName" className="block text-xs sm:text-sm font-medium text-gray-700">
                Item Name
              </label>
              <input
                type="text"
                id="itemName"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A99FFF] focus:border-[#A99FFF] transition-all duration-200"
                required
              />
            </div>
            
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="itemPrice" className="block text-xs sm:text-sm font-medium text-gray-700">
                Item Price
              </label>
              <input
                type="text"
                id="itemPrice"
                name="itemPrice"
                placeholder="$0.00"
                value={formData.itemPrice}
                onChange={handleChange}
                className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A99FFF] focus:border-[#A99FFF] transition-all duration-200"
                required
              />
            </div>
            
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="itemDeliveryStatus" className="block text-xs sm:text-sm font-medium text-gray-700">
                Delivery Status
              </label>
              <select
                id="itemDeliveryStatus"
                name="itemDeliveryStatus"
                value={formData.itemDeliveryStatus}
                onChange={handleChange}
                className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A99FFF] focus:border-[#A99FFF] transition-all duration-200"
                required
              >
                <option value="" disabled>Select delivery status</option>
                <option value="available">Delivery</option>
                <option value="pending">Delivery&Installation</option>
                
              </select>
            </div>
            
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="companyOwner" className="block text-xs sm:text-sm font-medium text-gray-700">
                Company Owner
              </label>
              <input
                type="text"
                id="companyOwner"
                name="companyOwner"
                value={formData.companyOwner}
                onChange={handleChange}
                className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A99FFF] focus:border-[#A99FFF] transition-all duration-200"
              />
            </div>
            
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="posterName" className="block text-xs sm:text-sm font-medium text-gray-700">
                Poster Name
              </label>
              <input
                type="text"
                id="posterName"
                name="posterName"
                value={formData.posterName}
                onChange={handleChange}
                className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A99FFF] focus:border-[#A99FFF] transition-all duration-200"
                required
              />
            </div>
            
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="location" className="block text-xs sm:text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A99FFF] focus:border-[#A99FFF] transition-all duration-200"
                required
              />
            </div>
            
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="contact" className="block text-xs sm:text-sm font-medium text-gray-700">
                Contact
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A99FFF] focus:border-[#A99FFF] transition-all duration-200"
                required
              />
            </div>
            
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="itemCondition" className="block text-xs sm:text-sm font-medium text-gray-700">
                Item Condition
              </label>
              <select
                id="itemCondition"
                name="itemCondition"
                value={formData.itemCondition}
                onChange={handleChange}
                className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A99FFF] focus:border-[#A99FFF] transition-all duration-200"
                required
              >
                <option value="" disabled>Select condition</option>
                <option value="new">new</option>
                <option value="used">used</option>
                
              </select>
            </div>
            
            {/* Full width for description */}
            <div className="space-y-1 sm:space-y-2 sm:col-span-2">
              <label htmlFor="description" className="block text-xs sm:text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A99FFF] focus:border-[#A99FFF] transition-all duration-200"
                required
              />
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 flex justify-center sm:justify-end">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#A99FFF] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A99FFF] transition-all duration-200 transform hover:scale-105"
            >
              Submit Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MarketPlaceForm;