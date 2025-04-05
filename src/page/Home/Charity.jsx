import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";
import { Link } from "react-router-dom";
function Charity() {
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
        `http://localhost:5000/charity/createCharity`,
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
        `http://localhost:5000/charity/ApprovedCharity`
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
      {/* Hero Section - Improved design */}
      <section className="py-12 bg-gradient-to-r from-[#EEF1F8] to-[#F7F7FF] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#1E3A8A] mb-4">
            Community Charities
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join hands with us in making a difference. Support projects that provide help and create positive change in our communities.
          </p>
        </div>
      </section>

      {/* Tab Navigation - Improved clarity */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <div className="flex flex-wrap border-b border-gray-300">
          <button
            className={`py-3 px-8 font-medium text-lg transition-all duration-300 ${
              activeTab === "projects"
                ? "text-[#1E3A8A] border-b-2 border-[#1E3A8A] font-semibold"
                : "text-gray-500 hover:text-[#A99FFF]"
            }`}
            onClick={() => setActiveTab("projects")}
          >
            View Projects
          </button>
          <button
            className={`py-3 px-8 font-medium text-lg transition-all duration-300 ${
              activeTab === "post"
                ? "text-[#1E3A8A] border-b-2 border-[#1E3A8A] font-semibold"
                : "text-gray-500 hover:text-[#A99FFF]"
            }`}
            onClick={() => setActiveTab("post")}
          >
            Post New Charity
          </button>
        </div>
      </div>

      {/* Main Content Area - Conditional rendering based on active tab */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === "projects" ? (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-[#1E3A8A]">
                Active Community Charities
              </h2>
              <button 
                onClick={() => setActiveTab("post")}
                className="bg-[#1E3A8A] text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-[#152C66] transition-all duration-300 ease-in-out flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Post New Charity
              </button>
            </div>
            
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E3A8A]"></div>
              </div>
            ) : charti.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No projects available</h3>
                <p className="mt-1 text-gray-500">Be the first to post a community project!</p>
                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#1E3A8A] hover:bg-[#152C66]"
                    onClick={() => setActiveTab("post")}
                  >
                    Create Charity
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {charti.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative">
                      <img
                        src={item.images}
                        alt={item.title}
                        className="w-full h-52 object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
                        }}
                      />
                      <div className="absolute top-0 right-0 p-2 bg-[#1E3A8A] text-white text-xs font-medium rounded-bl-lg">
                        {item.itemCondition}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2 line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                        {item.description}
                      </p>

                      <div className="flex flex-col gap-2 mb-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <svg
                            className="w-4 h-4 text-[#1E3A8A] mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                          </svg>
                          <span>{item.location || "Location not specified"}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <svg
                            className="w-4 h-4 text-[#1E3A8A] mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            ></path>
                          </svg>
                          <span>{item.contact}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <svg
                            className="w-4 h-4 text-[#1E3A8A] mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                          <span>{item.posterName}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                     <Link to="/login"> <button className="flex-1 bg-[#A99FFF] text-white px-3 py-2 rounded-md font-medium text-sm hover:bg-[#8A7FFF] transition-all duration-300 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          Donate
                        </button>
                        </Link> 
                        <button className="bg-white border border-[#1E3A8A] text-[#1E3A8A] px-3 py-2 rounded-md font-medium text-sm hover:bg-gray-50 transition-all duration-300 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Post New Project Form - Better organized and styled */
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
        )}
      </div>

      {/* Call to Action - Improved design */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#1E3A8A] to-[#3B549F] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Community Effort
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Together, we can make a difference. Your contribution helps build a
            better future for those in need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/volunteer"
              className="bg-white text-[#1E3A8A] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 ease-in-out flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              Volunteer
            </a>
            <a
              href="/donate"
              className="bg-[#A99FFF] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#8A7FFF] transition-all duration-300 ease-in-out flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Make a Donation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Charity;