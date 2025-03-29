import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
function Home() {
   const [property, setProperty ]= useState([]);
    useEffect(() => {
      const getAllProperty = async () => {
        try {
          const res = await axios.get(`https://manu-backend-6i7q.onrender.com/marketItem/getAllMarkets`);
          setProperty(res.data);
          console.log(res.data);
          
        } catch (error) {
          console.log(error);
        }
      };
      getAllProperty();
    }, []);
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Animated Background and Improved Layout */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] to-[#2a4cad] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 relative z-10">
              <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full mb-2">
                <span className="text-sm font-medium text-[#A99FFF]">Sustainability in Construction</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Reducing Waste, <span className="text-[#A99FFF]">Building</span> a Sustainable Future
              </h1>
              <p className="text-lg md:text-xl">
                ManuApp connects construction companies, contractors, and individuals to repurpose and redistribute construction materials, reducing environmental impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/marketplace" 
                  className="bg-[#A99FFF] text-white px-6 py-3 rounded-md font-medium hover:bg-purple-400 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg text-center group"
                >
                  <span className="inline-flex items-center">
                    Explore Marketplace 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
                <Link 
                  to="/about" 
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-[#1e3a8a] transition-all duration-300 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative z-10">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 border-4 border-white/20">
                {/* Placeholder for hero image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/90 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block p-6 rounded-full bg-[#1e3a8a]/30 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#A99FFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <span className="text-xl font-medium text-white/90">Sustainable Construction</span>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#A99FFF]/30 rounded-full blur-xl z-0"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#A99FFF]/20 rounded-full blur-xl z-0"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </section>

      {/* Stats Section with Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-50 text-[#1e3a8a] rounded-full text-sm font-medium mb-4">Our Impact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Making a Difference Together</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Together we're making a significant impact in reducing construction waste and environmental degradation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm text-center transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-md group">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[#1e3a8a] transition-all group-hover:bg-[#1e3a8a] group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <span className="text-4xl font-bold text-[#1e3a8a] block mb-2">3,500+</span>
              <p className="text-gray-600">Materials Repurposed</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm text-center transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-md group">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[#1e3a8a] transition-all group-hover:bg-[#1e3a8a] group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-4xl font-bold text-[#1e3a8a] block mb-2">450+</span>
              <p className="text-gray-600">Active Companies</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm text-center transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-md group">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[#1e3a8a] transition-all group-hover:bg-[#1e3a8a] group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <span className="text-4xl font-bold text-[#1e3a8a] block mb-2">120T</span>
              <p className="text-gray-600">Waste Reduction</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm text-center transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-md group">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[#1e3a8a] transition-all group-hover:bg-[#1e3a8a] group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-4xl font-bold text-[#1e3a8a] block mb-2">27%</span>
              <p className="text-gray-600">Cost Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section with Enhanced Visual Flow */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-[url('/dot-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-50 text-[#1e3a8a] rounded-full text-sm font-medium mb-4">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform makes it easy to find, buy, sell, or donate unused construction materials.
            </p>
          </div>
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-[16.66%] right-[16.66%] h-1 bg-gradient-to-r from-[#1e3a8a] to-[#A99FFF] transform -translate-y-1/2 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="bg-white p-8 rounded-xl shadow-md text-center transform transition-all duration-300 hover:shadow-xl">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1e3a8a] to-[#2a4cad] text-white rounded-full mb-6 shadow-md">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">List Materials</h3>
                <p className="text-gray-600">
                  Register and list your unused construction materials with photos, descriptions, and quantities.
                </p>
                <div className="mt-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md text-center transform transition-all duration-300 hover:shadow-xl">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#2a4cad] to-[#5255a8] text-white rounded-full mb-6 shadow-md">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                <p className="text-gray-600">
                  Connect with buyers or sellers in your area who need or have materials you're interested in.
                </p>
                <div className="mt-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md text-center transform transition-all duration-300 hover:shadow-xl">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#5255a8] to-[#A99FFF] text-white rounded-full mb-6 shadow-md">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Transact</h3>
                <p className="text-gray-600">
                  Complete secure transactions and arrange for pickup or delivery of materials.
                </p>
                <div className="mt-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Materials Section with Enhanced Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <span className="inline-block px-4 py-1 bg-blue-50 text-[#1e3a8a] rounded-full text-sm font-medium mb-4">New Listings</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Featured Market Place</h2>
              <p className="text-gray-600">
                Browse our most recent high-quality listings
              </p>
            </div>
            <Link 
              to="/marketplace" 
              className="mt-6 md:mt-0 px-6 py-3 bg-[#1e3a8a] text-white rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-md flex items-center"
            >
              View All
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           
            {property.map((item)=>(
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group">
              <div className="h-52 bg-gray-100 relative overflow-hidden">
                {/* Placeholder for material image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  
                  <img src={item.images}/>
                </div>
                <div className="absolute top-3 left-3 bg-[#5255a8] text-white text-xs font-medium px-2 py-1 rounded">Featured</div>
              </div>
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <span className="text-xs font-medium bg-blue-50 text-[#1e3a8a] px-2 py-1 rounded">{item.itemDeliveryStatus}</span>
                  <span className="ml-2 text-xs text-gray-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                     {item.location}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.itemName}</h3>
                <p className="text-gray-600 text-sm mb-3">Reclaimed steel I-beams in excellent condition. Various sizes available.</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[#1e3a8a] font-bold text-lg">${item.itemPrice}</span>
                  <Link 
                    to="/material/steel-beams" 
                    className="text-sm font-medium text-gray-600 hover:text-[#1e3a8a] transition-colors flex items-center"
                  >
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            ))}
           
            
           
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied companies and individuals making a difference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">John Donovan</h3>
                  <p className="text-sm text-gray-600">GreenBuild Construction</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "ManuApp has dramatically reduced our waste and saved us thousands in disposal costs. Plus, we're helping the environment!"
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">Sarah Martinez</h3>
                  <p className="text-sm text-gray-600">Urban Restoration</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "We found high-quality reclaimed wood for our project at half the cost of new materials. ManuApp is now our first stop for supplies."
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">Michael Chen</h3>
                  <p className="text-sm text-gray-600">EcoHome Builders</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Our clients love that we source sustainable materials. ManuApp makes it easy to find unique items that give our projects character."
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-bl from-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Reduce Waste and Save Costs?</h2>
            <p className="text-xl mb-8">
              Join ManuApp today and be part of the construction waste solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/signup" 
                className="bg-[#A99FFF] text-white px-8 py-3 rounded-md font-medium hover:bg-purple-400 transition-colors text-center"
              >
                Get Started
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-[#1e3a8a] transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;