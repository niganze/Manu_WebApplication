import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Notify } from "notiflix";

const PasswordResetForm = ({ handleReset }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();
const onsubmit=async(data)=>{
  try{
    const{email}=data;
  const formData =new FormData();
  formData.append("email",email);
  const res=await axios.post(`https://manu-backend-6i7q.onrender.com/reseting/send-otp`,formData,
    {
      headers:{
        "Content-Type":"application/json"
      }
    }
  );
  sessionStorage.setItem('resetEmail', email); 
  Notify.success("Action Success")
  navigate("/ActionReset")
}catch(error)
{
console.log(error);
Notify.failure("Action Failed")
}
  
}

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden relative">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-200 focus:outline-none"
          aria-label="Close"
          onClick={handleReset}
        >
          <svg
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

        <div className="bg-blue-900 p-4" style={{ backgroundColor: "#1E3A8A" }}>
          <h2 className="text-xl font-bold text-white pr-8">
            Reset Your Password
          </h2>
        </div>

        <div className="p-6">
          <>
            <p className="mb-4 text-gray-600">
              Enter your email address and we'll send you instructions to reset
              your password.
            </p>

            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                  {...register("email",{required:true})}
                />
                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  onClick={handleReset}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 disabled:opacity-50"
                  style={{ backgroundColor: "#1E3A8A" }}
                >
                  {isSubmitting ? "Sending..." : "Send Reset Link"}
                </button>
              </div>
            </form>
          </>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetForm;
