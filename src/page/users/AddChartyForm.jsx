import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";
import { Link } from "react-router-dom";
function AddChartyForm() {
  // Form handling with react-hook-form
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  
  const [isLoading, setIsLoading] = useState(false);
  const [charti, setCharti] = useState([]);
  const [activeTab, setActiveTab] = useState("projects"); // Changed to "projects" for clarity
  const [imagePreview, setImagePreview] = useState(null);
  
  // Watch the image field to create preview
  const watchImages = watch("images");
  
  // Update image preview when a file is selected
  useEffect(() => {
    if (watchImages && watchImages.length > 0) {
      const file = watchImages[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  }, [watchImages]);
  
  // Submit handler for posting new projects/charities
  const onsubmit = async (data) => {
    try {
      setIsLoading(true);
      const { title, description, images, posterName, itemCondition, location, contact } = data;
      
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("images", images[0]);
      formData.append("posterName", posterName);
      formData.append("itemCondition", itemCondition);
      formData.append("location", location);
      formData.append("contact", contact);

      const res = await axios.post(
        `https://manu-backend-6i7q.onrender.com/charity/createCharity`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      
      Notify.success("Project created successfully");
      reset();
      setImagePreview(null);
      // Refresh the projects list after adding a new one
      getAllProjects();
    } catch (error) {
      console.log(error);
      Notify.failure("Action Failed: " + (error.response?.data?.message || error.message));
    } finally {
      setIsLoading(false);
    }
  };

  // Function to fetch all approved projects
  const getAllProjects = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://manu-backend-6i7q.onrender.com/charity/ApprovedCharity`
      );
      setCharti(res.data.data);
    } catch (error) {
      console.log(error);
      Notify.failure("Failed to load projects");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen pt-16">
    
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-6">
                Post a New Charity
              </h2>
              <form onSubmit={handleSubmit(onsubmit)} className="space-y-5">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-gray-700 mb-1 font-medium"
                  >
                    Charity Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    className={`w-full px-3 py-2 border ${
                      errors.title ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]`}
                    placeholder="Enter project title"
                    {...register("title", { 
                      required: "Title is required" 
                    })}
                  />
                  {errors.title && (
                    <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-gray-700 mb-1 font-medium"
                  >
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    className={`w-full px-3 py-2 border ${
                      errors.description ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]`}
                    placeholder="Describe your project, its purpose, and how it helps the community"
                    {...register("description", { 
                      required: "Description is required",
                      minLength: {
                        value: 20,
                        message: "Description should be at least 20 characters"
                      }
                    })}
                  ></textarea>
                  {errors.description && (
                    <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="posterName"
                      className="block text-gray-700 mb-1 font-medium"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="posterName"
                      className={`w-full px-3 py-2 border ${
                        errors.posterName ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]`}
                      placeholder="Your full name"
                      {...register("posterName", { 
                        required: "Name is required" 
                      })}
                    />
                    {errors.posterName && (
                      <p className="text-red-500 text-xs mt-1">{errors.posterName.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-gray-700 mb-1 font-medium"
                    >
                      Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      className={`w-full px-3 py-2 border ${
                        errors.location ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]`}
                      placeholder="City, State"
                      {...register("location", { 
                        required: "Location is required" 
                      })}
                    />
                    {errors.location && (
                      <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="itemCondition"
                      className="block text-gray-700 mb-1 font-medium"
                    >
                      Project Status <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="itemCondition"
                      className={`w-full px-3 py-2 border ${
                        errors.itemCondition ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]`}
                      {...register("itemCondition", { 
                        required: "Status is required" 
                      })}
                    >
                      <option value="">Select status</option>
                      <option value="new">New</option>
                      <option value="ongoing">Ongoing</option>
                      <option value="urgent">Urgent Need</option>
                      <option value="completed">Completed</option>
                    </select>
                    {errors.itemCondition && (
                      <p className="text-red-500 text-xs mt-1">{errors.itemCondition.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact"
                      className="block text-gray-700 mb-1 font-medium"
                    >
                      Contact Information <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact"
                      className={`w-full px-3 py-2 border ${
                        errors.contact ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]`}
                      placeholder="Email or phone number"
                      {...register("contact", { 
                        required: "Contact information is required",
                        pattern: {
                          value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(\+?[0-9]{10,15})$/,
                          message: "Please enter a valid email or phone number"
                        }
                      })}
                    />
                    {errors.contact && (
                      <p className="text-red-500 text-xs mt-1">{errors.contact.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="images"
                    className="block text-gray-700 mb-1 font-medium"
                  >
                    Upload Image <span className="text-red-500">*</span>
                  </label>
                  <div className={`border-2 border-dashed ${
                    errors.images ? "border-red-500" : "border-gray-300"
                  } rounded-md p-4 text-center hover:bg-gray-50 transition-colors duration-300`}>
                    <input
                      type="file"
                      id="images"
                      className="hidden"
                      accept="image/*"
                      {...register("images", { 
                        required: "Project image is required" 
                      })}
                    />
                    <label htmlFor="images" className="cursor-pointer flex flex-col items-center">
                      {imagePreview ? (
                        <div className="relative w-full">
                          <img 
                            src={imagePreview} 
                            alt="Preview" 
                            className="mx-auto h-40 object-contain rounded-md" 
                          />
                          <p className="mt-2 text-sm text-green-600 font-medium">Image selected</p>
                        </div>
                      ) : (
                        <>
                          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          <span className="mt-2 text-sm text-gray-500">Click to upload image</span>
                          <span className="mt-1 text-xs text-gray-400">(Max size: 5MB)</span>
                        </>
                      )}
                    </label>
                  </div>
                  {errors.images && (
                    <p className="text-red-500 text-xs mt-1">{errors.images.message}</p>
                  )}
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      reset();
                      setImagePreview(null);
                      setActiveTab("projects");
                    }}
                    className="px-6 py-2 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`px-8 py-2 rounded-md font-medium text-white ${
                      isLoading 
                        ? "bg-gray-400 cursor-not-allowed" 
                        : "bg-[#1E3A8A] hover:bg-[#152C66]"
                    } transition-all duration-300 flex items-center`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit Project"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        
      </div>

      
    
  );
}

export default AddChartyForm;