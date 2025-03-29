import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Notify } from 'notiflix';

function Footer() {

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset, // Use reset instead of resetField
  } = useForm();
  
  const onsubmit = async (data) => {
    try {
      const { email } = data;
      const formData = new FormData();
      formData.append("email", email);
  
      const res = await axios.post(
        `https://manu-backend-6i7q.onrender.com/sub/createSubscription`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      reset(); // Resets the entire form
      Notify.success("Your subscription has been submitted");
    } catch (error) {
      console.log(error);
      Notify.failure("An error occurred while submitting your subscription");
    }
  };
  
  return (
    <footer className="bg-[#1e3a8a] text-white pt-10 pb-6 w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">ManuApp</h3>
            <p className="text-sm mb-4 break-words">
              Reducing environmental degradation and combating climate change through 
              repurposing and redistributing construction materials.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-[#A99FFF]" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="hover:text-[#A99FFF]" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="hover:text-[#A99FFF]" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" className="hover:text-[#A99FFF]" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-[#A99FFF] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-[#A99FFF] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-sm hover:text-[#A99FFF] transition-colors">Market Place</Link>
              </li>
              <li>
                <Link to="/community" className="text-sm hover:text-[#A99FFF] transition-colors">Community Shelter & Clarity</Link>
              </li>
              <li>
                <Link to="/impact" className="text-sm hover:text-[#A99FFF] transition-colors">Impact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-sm hover:text-[#A99FFF] transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/faqs" className="text-sm hover:text-[#A99FFF] transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:text-[#A99FFF] transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm hover:text-[#A99FFF] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-[#A99FFF] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest news and offers.</p>
            <form className="flex flex-col w-full"  onSubmit={handleSubmit(onsubmit)}>
              <input
                type="email"
                name='email'
                placeholder="Your email address"
                className="px-4 py-2 mb-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#A99FFF] w-full"
             {...register("email",{required:true})}
              />
              <button
                type="submit"
                className="bg-[#A99FFF] text-white px-4 py-2 rounded-md hover:bg-purple-400 transition-colors w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300 text-center md:text-left">
              &copy; {new Date().getFullYear()} ManuApp. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 justify-center md:justify-start">
                <li>
                  <Link to="/terms" className="text-xs text-gray-300 hover:text-[#A99FFF] transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-xs text-gray-300 hover:text-[#A99FFF] transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-xs text-gray-300 hover:text-[#A99FFF] transition-colors">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;