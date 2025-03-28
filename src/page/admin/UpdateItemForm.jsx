import axios from "axios";
import React from "react";
import { useState } from "react";

const UpdateItemForm = ({ handleEditMarket,item}) => {
  const [itemname, setItemName] = useState(item?.itemName);
  const [itemprice, setItemPrice] = useState(item?.itemPrice);
  const [itemdeliverystatus, setItemDeliveryStatus] = useState(item?.itemDeliveryStatus);
  const [companyowner, setCompanyOwner] = useState(item?.companyOwner);
  const [description, setDescription] = useState(item?.description);
  const [postername, setPosterName] = useState(item?.posterName);
  const [location, setLocation] = useState(item?.location);
  const [contact, setContact] = useState(item?.contact);
  const [itemcondition, setItemCondition] = useState(item?.itemCondition);
  const [images, setImages] = useState(item?.images?.[0]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = {
      itemname,
      companyowner,
      itemprice,
      itemdeliverystatus,
      description,
      location,
      postername,
      contact,
      itemcondition,
      images,
    };
    try {
      await axios.put(`https://manu-backend-6i7q.onrender.com/marketItem/updateMarket/${item_id}`, formData,
        {
          headers: { "Content-Type": "multipart/form-data" }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl p-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Update Item Details</h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4" onSubmit={handleUpdate}>
          {/* Row 1 */}
          <div>
            <label className="block text-gray-700 mb-1">Item Name</label>
            <input
              type="text"
              value={itemname}
              onChange={(e) => setItemName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Price</label>
            <input
              type="number"
              value={itemprice}
              onChange={(e) => setItemPrice(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Delivery Status</label>
            <select
              value={itemdeliverystatus}
              onChange={(e) => setItemDeliveryStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select Status</option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          {/* Row 2 */}
          <div>
            <label className="block text-gray-700 mb-1">Company Owner</label>
            <input
              type="text"
              value={companyowner}
              onChange={(e) => setCompanyOwner(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Poster Name</label>
            <input
              type="text"
              value={postername}
              onChange={(e) => setPosterName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Row 3 */}
          <div>
            <label className="block text-gray-700 mb-1">Contact</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Condition</label>
            <select
              value={itemcondition}
              onChange={(e) => setItemCondition(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select Condition</option>
              <option value="new">New</option>
              <option value="used">Used</option>
              <option value="refurbished">Refurbished</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImages(e.target.files[0])}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Row 4 - Full Width */}
          <div className="col-span-1 md:col-span-3">
            <label className="block text-gray-700 mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="3"
            />
          </div>

          {/* Row 5 - Full Width */}
          <div className="col-span-1 md:col-span-3 flex justify-end space-x-4">
            <button type="button" className="px-4 py-2 bg-gray-400 text-white rounded-lg"
            onClick={handleEditMarket}
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItemForm;
