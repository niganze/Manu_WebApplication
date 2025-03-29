import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

// This component can be imported and used on any page
const DonateForm = ({ handleDonation, ProjectId }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [userId, setUserId] = useState(null);
  const [donorEmail, setDonorEmail] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state

  useEffect(() => {
    // Get user details from localStorage
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    if (userToken?.user) {
      setUserId(userToken.user._id);
      setDonorEmail(userToken.user.email);
      setToken(userToken?.user?.tokens?.accessToken || "");
    }
  }, []);

  const onSubmit = async (data) => {
    setLoading(true); // Start loading
    try {
      const formData = {
        AmountDonated: data.AmountDonated,
        Comment: data.Comment,
        PhoneNum: data.PhoneNum,
        donorEmail,
        userId,
        ProjectId, 
      };

      console.log("Submitting Form Data:", formData);
      const Key = JSON.parse(localStorage.getItem("userToken"));
      const token=Key?.user?.tokens?.accessToken ;
      console.log(token);
      

      // Send to API
      const response = await axios.post("https://manu-backend-6i7q.onrender.com/donation/createDonation", formData,
        {
            headers:{
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`,
            }
        }
      );
      console.log("Response:", response.data);

      // Close modal on success
      handleDonation();
    } catch (error) {
      console.error("Error submitting donation:", error);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
          {/* Close button for the modal */}
          <button
            onClick={handleDonation}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Make a Donation
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount Donated ($)
              </label>
              <input
                {...register("AmountDonated", { required: true })}
                type="number"
                min="1"
                placeholder="100"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.AmountDonated && (
                <span className="text-red-500 text-sm">Amount is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Comment
              </label>
              <textarea
                {...register("Comment")}
                rows="3"
                placeholder="Tell us why you're donating..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                {...register("PhoneNum")}
                type="tel"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                placeholder="1234567890"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={donorEmail}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Hidden fields */}
            <input type="hidden" value={userId} />
            <input type="hidden" value={ProjectId} />

            <button
              type="submit"
              className={`w-full bg-[#A99FFF] text-white py-3 rounded-lg font-medium transition duration-200 transform hover:scale-105 flex items-center justify-center ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#9380FF]"
              }`}
              disabled={loading}
            >
              {loading ? (
                <>
                  Loading ...
                </>
              ) : (
                "Donate"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DonateForm;
