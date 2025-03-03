import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcNext } from "react-icons/fc";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side - Login Form */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center animate-fade-in">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl font-bold mb-2 transition-transform transform hover:scale-105">
            Sign in
          </h1> 

        <Link to="/register" className="text-[#A99FFF] hover:text-[#876FFF"><FcNext />Be Ready for Registeration</Link>
         
          <p className="text-gray-500 mb-8">
            Welcome back! Please enter your details
          </p>

          <form onSubmit={handleSubmit}>
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-transform transform hover:scale-105"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-transform transform hover:scale-105"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                Forgot Password?
              </a>
            </div>

            <button
  type="submit"
  className="w-full bg-[#A99FFF] text-white py-3 rounded-lg font-medium hover:bg-[#9380FF] transition duration-200 transform hover:scale-105"
>
  <Link to="/admindashboard">Sign In</Link>
</button>

          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>or continue with</p>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <button className="p-2 border border-gray-300 rounded-full transition-transform transform hover:scale-105">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_52)">
                  <path
                    d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.24 24.0008C15.4764 24.0008 18.2058 22.9382 20.1944 21.1039L16.3274 18.1055C15.2516 18.8375 13.8626 19.252 12.2444 19.252C9.11376 19.252 6.45934 17.1399 5.50693 14.3003H1.5166V17.3912C3.55371 21.4434 7.70128 24.0008 12.24 24.0008Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.50253 14.3003C5.00232 12.8099 5.00232 11.1961 5.50253 9.70575V6.61481H1.51726C-0.185481 10.0056 -0.185481 14.0004 1.51726 17.3912L5.50253 14.3003Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.24 4.74966C13.9508 4.7232 15.6043 5.36697 16.8433 6.54867L20.2694 3.12262C18.1 1.0855 15.2207 -0.034466 12.24 0.000808666C7.70128 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50187 9.70575C6.45428 6.86173 9.1143 4.74966 12.24 4.74966Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_52">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button className="p-2 border border-gray-300 rounded-full transition-transform transform hover:scale-105">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0002 2C6.47715 2 2.00024 6.477 2.00024 12C2.00024 16.991 5.65724 21.128 10.4382 21.879V14.89H7.89824V12H10.4382V9.797C10.4382 7.291 11.9312 5.907 14.2152 5.907C15.3082 5.907 16.4542 6.102 16.4542 6.102V8.562H15.1922C13.9502 8.562 13.5622 9.333 13.5622 10.124V12H16.3362L15.8942 14.89H13.5622V21.879C18.3432 21.129 22.0002 16.99 22.0002 12C22.0002 6.477 17.5232 2 12.0002 2Z"
                  fill="#1877F2"
                />
              </svg>
            </button>
          </div>

          {/* Don't have an account? Register */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Register
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

export default Login;
