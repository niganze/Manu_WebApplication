import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";

function Community() {
  // Handle file upload for clarity posts
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const onsubmit = async (data) => {
    try {
      const { title, description, images, posterName, itemCondition, contact } =
        data;
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("images", images[0]);
      formData.append("posterName", posterName);
      formData.append("itemCondition", itemCondition);
      formData.append("location", location);
      formData.append("contact", contact);

      const res = await axios.post(
        `https://manu-backend-6i7q.onrender.com/project/createProject`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Notify.success("Charity create successfully");
      reset();
    } catch (error) {
      console.log(error);
      Notify.failure("Action Failed", error);
    }
  };

  const [charti, setCharti] = useState([]);

  useEffect(() => {
    const getAllcard = async () => {
      try {
        const res = await axios.get(
          `https://manu-backend-6i7q.onrender.com/project/ApprovedProjects`
        );
        setCharti(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllcard();
  }, []);

  // Tab state to control which content is displayed
  const [activeTab, setActiveTab] = useState("charti"); // "shelter" or "clarity"
  return (
    <div className="bg-white text-gray-900 min-h-screen mt-12">
      {/* Hero Section */}
      <section className="py-16 text-center transition-all duration-700 ease-in-out">
        <h1 className="text-3xl font-semibold text-[#1E3A8A] hover:text-[#A99FFF] transition-colors duration-300">
          Community Projects and Charities
        </h1>
        <p className="mt-4  max-w-3xl mx-auto opacity-75 hover:opacity-100 transition-opacity duration-300">
          Join hands with us in making a difference. By supporting shelters and
          clarity initiatives, we aim to provide safe spaces and transparent
          operations that help communities thrive.
        </p>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="flex border-b border-gray-300">
          <button
            className={`py-3 px-6 font-medium text-lg transition-all duration-300 ${
              activeTab === "charti"
                ? "text-[#1E3A8A] border-b-2 border-[#1E3A8A]"
                : "text-gray-500 hover:text-[#A99FFF]"
            }`}
            onClick={() => setActiveTab("charti")}
          >
            Community Projects
          </button>
          <button
            className={`py-3 px-6 font-medium text-lg transition-all duration-300 ${
              activeTab === "clarity"
                ? "text-[#1E3A8A] border-b-2 border-[#1E3A8A]"
                : "text-gray-500 hover:text-[#A99FFF]"
            }`}
            onClick={() => setActiveTab("clarity")}
          >
            Charities
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Always shows Community Shelter */}
          <div className="bg-[#F7F7F7] rounded-xl p-6">
            <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">
              Community Projects
            </h2>
            <p className="text-gray-600 mb-8">
              These Projects are currently providing assistance to those in
              need. Contact them directly or donate to support their mission.
            </p>

            <div className="space-y-8">
              {charti.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:shadow-xl duration-300 ease-in-out"
                >
                  <img
                    src={item.images}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700 mb-3">
                      {item.description}
                    </p>

                    <div className="flex flex-col gap-1 mb-3 text-sm">
                      <div className="flex items-start">
                        <svg
                          className="w-4 h-4 mt-1 text-[#1E3A8A] mr-2"
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
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-start">
                        <svg
                          className="w-4 h-4 mt-1 text-[#1E3A8A] mr-2"
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
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-[#1E3A8A] mb-1 text-sm">
                        Current Needs:
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm"></ul>
                    </div>

                    <button className="w-full bg-[#A99FFF] text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-[#8A7FFF] transition-all duration-300 ease-in-out flex items-center justify-center">
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Shows either more shelters or clarity section based on active tab */}
          <div className="bg-[#F7F7F7] rounded-xl p-6">
            {activeTab === "charti" ? (
              <div></div>
            ) : (
              /* Clarity Section - Free Items */
              <div>
                <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">
                  Post Your Charities
                </h2>
                <p className="text-gray-600 mb-8">
                  Have something you no longer need? Post it here for someone
                  who might find it useful.
                </p>

                {/* Form to post new items */}
                <div className="bg-white p-6 rounded-xl shadow mb-8">
                  <h3 className="text-xl font-semibold text-[#1E3A8A] mb-4">
                    Post an Item
                  </h3>
                  <form onSubmit={handleSubmit(onsubmit)}>
                    <div className="mb-4">
                      <label
                        htmlFor="title"
                        className="block text-gray-700 mb-1 text-sm"
                      >
                        Item Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]"
                        {...register("title", { required: true })}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="block text-gray-700 mb-1 text-sm"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows="3"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]"
                        {...register("description", { required: true })}
                      ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label
                          htmlFor="posterName"
                          className="block text-gray-700 mb-1 text-sm"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="posterName"
                          name="posterName"
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]"
                          {...register("posterName", { required: true })}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="location"
                          className="block text-gray-700 mb-1 text-sm"
                        >
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]"
                          placeholder="City, State"
                          {...register("location", { required: true })}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="condition"
                        className="block text-gray-700 mb-1 text-sm"
                      >
                        Item Condition
                      </label>
                      <select
                        id="condition"
                        name="condition"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]"
                        {...register("itemCondition", { required: true })}
                      >
                        <option value="">Select condition</option>
                        <option value="new">New</option>
                        <option value="used">Used</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="image"
                        className="block text-gray-700 mb-1 text-sm"
                      >
                        Upload Image
                      </label>
                      <input
                        type="file"
                        name="images"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]"
                        accept="image/*"
                        {...register("images", { required: true })}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="contact"
                        className="block text-gray-700 mb-1 text-sm"
                      >
                        Contact Information
                      </label>
                      <input
                        type="text"
                        name="contact"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]"
                        placeholder="Email or phone number"
                        {...register("contact", { required: true })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1E3A8A] text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-[#152C66] transition-all duration-300 ease-in-out"
                    >
                      Post Item
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-12 px-6 bg-gradient-to-bl from-indigo-800 text-white text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Join Our Community Effort
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
          Together, we can make a difference. Your contribution helps build a
          better future for those in need.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/volunteer"
            className="bg-white text-[#1E3A8A] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 ease-in-out"
          >
            Volunteer
          </a>
          <a
            href="/donate"
            className="bg-[#A99FFF] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#8A7FFF] transition-all duration-300 ease-in-out"
          >
            Make a Donation
          </a>
        </div>
      </section>
    </div>
  );
}

export default Community;
