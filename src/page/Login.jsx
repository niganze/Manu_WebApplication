import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Notify } from "notiflix";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false); // Added loading state

  const onsubmit = async (data) => {
    setLoading(true); // Start loading
    try {
      
      const { email, password } = data;
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const res = await axios.post(`http://localhost:5000/user/login`, formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      const userToken = res.data;
      localStorage.setItem("userToken", JSON.stringify(userToken));

      const userRole = userToken?.user?.role;
      if (userRole === "Admin") {
        navigate("/admindashboard");
        Notify.success("Admin Login Successful");
      } else if (userRole === "user") {
        navigate("/user-dashboard");
        Notify.success("User Login Successful");
      } else {
        navigate("/landing");
      }
    } catch (error) {
      console.error(error);
      Notify.failure("Login failed");
    } finally {
      setLoading(false); // Stop loading after response
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center animate-fade-in">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl font-bold mb-2 transition-transform transform hover:scale-105">
            Sign in
          </h1>

          <Link to="/" className="text-[#A99FFF] hover:text-[#876FFF]">
            <IoIosArrowRoundBack /> Back to Home
          </Link>

          <p className="text-gray-500 mb-8">
            Welcome back! Please enter your details
          </p>

          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-transform transform hover:scale-105"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-transform transform hover:scale-105"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className={`w-full bg-[#A99FFF] text-white py-3 rounded-lg font-medium transition duration-200 transform hover:scale-105 flex items-center justify-center ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#9380FF]"
              }`}
              disabled={loading}
            >
              {loading ? (
                <>
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:text-blue-800 font-medium">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
