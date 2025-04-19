import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const DonateForm = ({ handleDonation, ProjectId }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();

  const [userId, setUserId] = useState(null);
  const [donorEmail, setDonorEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const donationKind = watch("DonationKind");

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    if (userToken?.user) {
      setUserId(userToken.user._id);
      setDonorEmail(userToken.user.email);
      setLastname(userToken.user.lastname);
      setToken(userToken?.user?.tokens?.accessToken || "");
    }
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);

    if (
      (data.DonationKind === "Money" && !data.AmountDonated) ||
      (data.DonationKind === "Materials" && !data.Comment)
    ) {
      alert("Please provide the required donation details.");
      setLoading(false);
      return;
    }

    const formData = {
      AmountDonated: data.DonationKind === "Money" ? data.AmountDonated : 0,
      Comment: data.DonationKind === "Materials" ? data.Comment : "",
      PhoneNum: data.PhoneNum || "",
      donorEmail,
      DonorName: lastname,
      userId,
      ProjectId,
      DonationKind: data.DonationKind,
    };
    

    try {
      const response = await axios.post(
        `http://localhost:5000/donation/createDonation`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Donation submitted:", response.data);
      handleDonation(); // closes the modal or refreshes UI
    } catch (error) {
      console.error("Error submitting donation:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
        <button
          onClick={handleDonation}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
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
          {/* Donation Kind */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Donation Kind
            </label>
            <select
              {...register("DonationKind", { required: true })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              defaultValue=""
            >
              <option value="" disabled>
                -- Select Donation Type --
              </option>
              <option value="Money">Money</option>
              <option value="Materials">Materials</option>
            </select>
          </div>

          {/* Amount Donated */}
          {donationKind === "Money" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount Donated (Rwf)
              </label>
              <input
                {...register("AmountDonated")}
                type="number"
                min="1"
                placeholder="100"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          )}

          {/* Materials Comment */}
          {donationKind === "Materials" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                List of Materials
              </label>
              <textarea
                {...register("Comment")}
                rows="3"
                placeholder="List your materials here..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          )}

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              {...register("PhoneNum", { required: true })}
              type="tel"
              pattern="[0-9]{10}"
              placeholder="078xxxxxxx"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Email (read-only) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={donorEmail}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#A99FFF] text-white py-3 rounded-lg font-medium transition duration-200 transform hover:scale-105 flex items-center justify-center ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#9380FF]"
            }`}
          >
            {loading ? "Processing..." : "Donate"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonateForm;
