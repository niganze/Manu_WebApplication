import React, { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";
import { useNavigate } from "react-router-dom";

function Register() {
  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // };
  const navigate=useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onsubmit = async (data) => {
    try {
      const { firstname, lastname, email, password } = data;
   const formData=new FormData();
      formData.append("firstname",firstname);
      formData.append("lastname",lastname);
      formData.append("email",email);
      formData.append("password",password);

      const res=await axios.post(`http://localhost:5000/user/register`,formData,
        {
          headers:{
            "Content-Type":"application/json"
          }
        }
      )
      Notify.success("registration succesfull");
      navigate("/login")
    } catch (error) {
      console.log(error);
      Notify.failure(error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side - Registration Form */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <Link to="/login" className="text-[#A99FFF] hover:text-[#876FFF]">
            <IoIosArrowRoundBack /> Back to Login
          </Link>

          <h1 className="text-2xl font-bold mb-2">Create Account</h1>
          <p className="text-gray-500 mb-8">
            Please fill in the details to get started
          </p>

          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Enter your email"
                {...register("email",{required:true})}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                FirstName
              </label>
              <input
                type="text"
                
                name="firstname"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Choose a username"
                {...register("firstname",{required:true})}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                LastName
              </label>
              <input
                type="text"
                id="username"
                name="lastname"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Choose a username"
                {...register("lastname",{required:true})}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Create a password"
                {...register("password",{required:true})}
              />
            </div>
            {/* <div className="mb-4">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select your role
                </option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
              </select>
            </div> */}

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                
              />
              <label
                htmlFor="agreeToTerms"
                className="ml-2 text-sm text-gray-600"
              >
                I agree to the{" "}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#A99FFF] text-white py-3 rounded-lg font-medium hover:bg-[#9380FF] transition duration-200 transform hover:scale-105"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>or register with</p>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition duration-200">
              <FaGoogle className="w-6 h-6 text-red-500" />
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition duration-200">
              <FaFacebook className="w-6 h-6 text-blue-600" />
            </button>
          </div>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/" className="text-blue-600 hover:text-blue-800">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden md:block md:w-1/2 bg-blue-900 p-8 cursor-pointer">
        <div className="h-full flex items-center justify-center">
          <div className="relative w-full max-w-md">
            {/* Main illustration - stylized monitor with registration form */}
            <div className="bg-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105">
              {/* User icon in a circle */}
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center transition-transform transform hover:scale-110 hover:bg-teal-200">
                <svg
                  className="w-8 h-8 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  ></path>
                </svg>
              </div>

              {/* Registration form mockup inside illustration */}
              <div className="space-y-3">
                <div className="h-2 bg-gray-200 rounded w-3/4 mx-auto"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-6 bg-teal-500 rounded w-full"></div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 transition-transform hover:rotate-45">
              <svg
                className="w-16 h-16 text-teal-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
              </svg>
            </div>

            {/* Person figure */}
            <div className="absolute bottom-0 left-0 transform -translate-x-8 translate-y-8 animate-bounce">
              <svg
                className="w-16 h-16"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="8" r="6" fill="#FFB6B6" />
                <path
                  d="M18 16C12.4772 16 8 20.4772 8 26V36H28V26C28 20.4772 23.5228 16 18 16Z"
                  fill="#FFB6B6"
                />
                <path
                  d="M19 25C19 24.4477 19.4477 24 20 24H22C22.5523 24 23 24.4477 23 25V32C23 32.5523 22.5523 33 22 33H20C19.4477 33 19 32.5523 19 32V25Z"
                  fill="#2F88FF"
                />
              </svg>
            </div>

            {/* Dollar sign */}
            <div className="absolute bottom-0 right-0 transform translate-x-12 translate-y-12 animate-pulse">
              <svg
                className="w-10 h-10 text-teal-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
