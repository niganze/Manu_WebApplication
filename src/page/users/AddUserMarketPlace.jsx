import { Notify } from "notiflix";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddUserMarketPlace = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
    const [loading, setLoading] = useState(false); // Added loading state
  const [imagePreview, setImagePreview] = useState(null);
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const onsubmit = async (data) => {
    setLoading(true); // Start loading
    try {
      const {
        itemName,
        itemPrice,
        itemDeliveryStatus,
        companyOwner,
        description,
        posterName,
        location,
        contact,
        itemCondition,
        images
      } = data;
      
      const formData = new FormData();
      formData.append("itemName", itemName);
      formData.append("itemPrice", itemPrice);
      formData.append("itemDeliveryStatus", itemDeliveryStatus);
      formData.append("companyOwner", companyOwner);
      formData.append("description", description);
      formData.append("posterName", posterName);
      formData.append("location", location);
      formData.append("contact", contact);
      formData.append("itemCondition", itemCondition);
      formData.append("images", images[0]);
      
      // Add image files to formData
      if (data.images && data.images.length > 0) {
        for (let i = 0; i < data.images.length; i++) {
          formData.append("images", data.images[i]);
        }
      }

      const res = await axios.post(
        `https://manu-backend-6i7q.onrender.com/marketItem/createMarket`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Notify.success("Market item created successfully");
      setImagePreview(null);
      reset();
    } catch (error) {
      console.log(error);
      Notify.failure("Failed to create Market Place");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 sm:p-6 md:p-8 transition-all duration-300">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#A99FFF] mb-4 sm:mb-6 md:mb-8">
          Market Place Submission Form
        </h1>

        <form onSubmit={handleSubmit(onsubmit)} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {/* First column */}
            <div className="space-y-1 sm:space-y-2">
              <label
                htmlFor="itemName"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Item Name
              </label>
              <input
                type="text"
                name="itemName"
                className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A99FFF] focus:border-[#A99FFF] transition-all duration-200"
                {...register("itemName", { required: true })}
              />
              {errors.itemName && (
                <span className="text-red-500 text-xs">Item name is required</span>
              )}
            </div>

            <div className="space-y-1 sm:space-y-2">
              <label
                htmlFor="itemPrice"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Item Price
              </label>
              <input
                type="text"
                name="itemPrice"
                placeholder="Rwf 0.00"
                className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A99FFF] focus:border-[#A99FFF] transition-all duration-200"
                {...register("itemPrice", { required: true })}
              />
              {errors.itemPrice && (
                <span className="text-red-500 text-xs">Item price is required</span>
              )}
            </div>

            <div className="space-y-1 sm:space-y-2">
              <label
                htmlFor="itemDeliveryStatus"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Delivery Status
              </label>
              <select
                id="itemDeliveryStatus"
                className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A99FFF] focus:border-[#A99FFF] transition-all duration-200"
                {...register("itemDeliveryStatus", { required: true })}
              >
                <option value="" disabled>
                  Select delivery status
                </option>
                <option value="Delivery">Delivery</option>
                <option value="Pickup">Pickup</option>
              </select>
              {errors.itemDeliveryStatus && (
                <span className="text-red-500 text-xs">Delivery status is required</span>
              )}
            </div>

            <div className="space-y-1 sm:space-y-2">
              <label
                htmlFor="companyOwner"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Company Owner
              </label>
              <input
                type="text"
                id="companyOwner"
                name="companyOwner"
                className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A99FFF] focus:border-[#A99FFF] transition-all duration-200"
                {...register("companyOwner", { required: true })}
              />
              {errors.companyOwner && (
                <span className="text-red-500 text-xs">Company owner is required</span>
              )}
            </div>

            <div className="space-y-1 sm:space-y-2">
              <label
                htmlFor="posterName"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Poster Name
              </label>
              <input
                type="text"
                name="posterName"
                className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A99FFF] focus:border-[#A99FFF] transition-all duration-200"
                {...register("posterName", { required: true })}
              />
              {errors.posterName && (
                <span className="text-red-500 text-xs">Poster name is required</span>
              )}
            </div>

            <div className="space-y-1 sm:space-y-2">
              <label
                htmlFor="location"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A99FFF] focus:border-[#A99FFF] transition-all duration-200"
                {...register("location", { required: true })}
              />
              {errors.location && (
                <span className="text-red-500 text-xs">Location is required</span>
              )}
            </div>

            <div className="space-y-1 sm:space-y-2">
              <label
                htmlFor="contact"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Contact
              </label>
              <input
                type="text"
                name="contact"
                className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A99FFF] focus:border-[#A99FFF] transition-all duration-200"
                {...register("contact", { required: true })}
              />
              {errors.contact && (
                <span className="text-red-500 text-xs">Contact is required</span>
              )}
            </div>

            <div className="space-y-1 sm:space-y-2">
              <label
                htmlFor="itemCondition"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Item Condition
              </label>
              <select
                name="itemCondition"
                className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A99FFF] focus:border-[#A99FFF] transition-all duration-200"
                {...register("itemCondition", { required: true })}
              >
                <option value="" >
                  Select condition
                </option>
                <option value="new">new</option>
                <option value="used">used</option>
              </select>
              {errors.itemCondition && (
                <span className="text-red-500 text-xs">Item condition is required</span>
              )}
            </div>

            {/* Image upload field - spans 2 columns */}
            <div className="space-y-1 sm:space-y-2 sm:col-span-2">
              <label
                htmlFor="images"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Item Images
              </label>
              <div className="flex flex-col space-y-2">
                <input
                  type="file"
                  id="images"
                  name="images"
                  accept="image/*"
                  multiple
                  className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A99FFF] focus:border-[#A99FFF] transition-all duration-200"
                  {...register("images")}
                  onChange={handleImageChange}
                />
              
                {/* Image preview area */}
                {imagePreview && (
                  <div className="mt-2">
                    <p className="text-xs font-medium text-gray-700 mb-1">Preview:</p>
                    <div className="h-32 w-32 relative rounded-md overflow-hidden border border-gray-300">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Full width for description */}
            <div className="space-y-1 sm:space-y-2 sm:col-span-2">
              <label
                htmlFor="description"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                rows="4"
                className="w-full px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A99FFF] focus:border-[#A99FFF] transition-all duration-200"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <span className="text-red-500 text-xs">Description is required</span>
              )}
            </div>
          </div>

          <div className="mt-6 sm:mt-8 flex justify-center sm:justify-end">
          <button
              type="submit"
              className={`w-full bg-[#A99FFF] text-white py-3 rounded-lg font-medium transition duration-200 transform hover:scale-105 flex items-center justify-center ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#9380FF]"
              }`}
              disabled={loading}
            >
              {loading ? (
                <>
                  Submitting...
                </>
              ) : (
                "Submit Item"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserMarketPlace;