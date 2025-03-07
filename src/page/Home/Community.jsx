import React, { useState } from "react";
import Shelterimage from '../../assets/shelter.jpeg';
import  Beginnings from '../../assets/construction.jpeg';

function Community() {

  // Handle file upload for clarity posts


  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
    posterName: '',
    location: '',
    condition: '',
    contact: '',
    image: null
  });
  
  
  
  const handleFileChange = (e) => {
    setNewPost({
      ...newPost,
      image: e.target.files[0]
    });
  };
  
    // Tab state to control which content is displayed
  const [activeTab, setActiveTab] = useState("shelter"); // "shelter" or "clarity"
  
  // Sample shelter data
  const shelters = [
    {
      id: 1,
      title: "Hope Haven Shelter",
      image:Shelterimage,
      description: "Emergency housing and support services for families displaced by recent flooding.",
      location: "123 Main Street, Riverdale",
      telephone: "(555) 123-4567",
      needs: ["Blankets", "Non-perishable food", "Toiletries"]
    },
    {
      id: 2,
      title: "New Beginnings Center",
      image: Beginnings,
      description: "Temporary shelter providing meals, showers, and resources for individuals affected by the downtown fire.",
      location: "456 Oak Avenue, Westside",
      telephone: "(555) 987-6543",
      needs: ["Clothing", "Personal hygiene items", "Volunteers"]
    }
  ];

  // Sample clarity posts
  const [clarityPosts, setClarityPosts] = useState([
    {
      id: 1,
      title: "Children's Clothing (Ages 4-6)",
      description: "Gently used children's clothing in good condition. Various items including shirts, pants, and jackets.",
      contact: "clara@example.com",
      postedDate: "March 1, 2025"
    },
    {
      id: 2,
      title: "Working Refrigerator",
      description: "Functional refrigerator, approximately 5 years old. Moving and cannot take it with me.",
      contact: "(555) 234-5678",
      postedDate: "March 3, 2025"
    }
  ]);

  

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, you would send this data to your backend
    const post = {
      id: clarityPosts.length + 1,
      ...newPost,
      postedDate: new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})
    };
    
    setClarityPosts(prev => [post, ...prev]);
    
    // Reset form
    setNewPost({
      title: "",
      description: "",
      contact: ""
    });
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen mt-12">
      {/* Hero Section */}
      <section className="py-16 text-center transition-all duration-700 ease-in-out">
        <h1 className="text-3xl font-semibold text-[#1E3A8A] hover:text-[#A99FFF] transition-colors duration-300">
          Community Shelter & Clarity
        </h1>
        <p className="mt-4  max-w-3xl mx-auto opacity-75 hover:opacity-100 transition-opacity duration-300">
          Join hands with us in making a difference. By supporting shelters and clarity initiatives, we aim to provide safe spaces and transparent operations that help communities thrive.
        </p>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="flex border-b border-gray-300">
          <button
            className={`py-3 px-6 font-medium text-lg transition-all duration-300 ${
              activeTab === "shelter" 
                ? "text-[#1E3A8A] border-b-2 border-[#1E3A8A]" 
                : "text-gray-500 hover:text-[#A99FFF]"
            }`}
            onClick={() => setActiveTab("shelter")}
          >
            Community Shelter
          </button>
          <button
            className={`py-3 px-6 font-medium text-lg transition-all duration-300 ${
              activeTab === "clarity" 
                ? "text-[#1E3A8A] border-b-2 border-[#1E3A8A]" 
                : "text-gray-500 hover:text-[#A99FFF]"
            }`}
            onClick={() => setActiveTab("clarity")}
          >
            Clarity
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Always shows Community Shelter */}
          <div className="bg-[#F7F7F7] rounded-xl p-6">
            <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">Community Shelters</h2>
            <p className="text-gray-600 mb-8">
              These shelters are currently providing assistance to those in need. Contact them directly or donate to support their mission.
            </p>
            
            <div className="space-y-8">
              {shelters.map(shelter => (
                <div key={shelter.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:shadow-xl duration-300 ease-in-out">
                  <img
                    src={shelter.image}
                    alt={shelter.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">{shelter.title}</h3>
                    <p className="text-sm text-gray-700 mb-3">{shelter.description}</p>
                    
                    <div className="flex flex-col gap-1 mb-3 text-sm">
                      <div className="flex items-start">
                        <svg className="w-4 h-4 mt-1 text-[#1E3A8A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span>{shelter.location}</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-4 h-4 mt-1 text-[#1E3A8A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <span>{shelter.telephone}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-[#1E3A8A] mb-1 text-sm">Current Needs:</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm">
                        {shelter.needs.map((need, index) => (
                          <li key={index}>{need}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-[#A99FFF] text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-[#8A7FFF] transition-all duration-300 ease-in-out flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
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
            {activeTab === "shelter" ? (
              /* Additional Shelter Information */
              <div>
                <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">Disaster Relief</h2>
                <p className="text-gray-600 mb-8">
                  Current disaster relief efforts that need immediate support and resources.
                </p>
                
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                  <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg text-sm font-medium mb-4 inline-block">
                    Urgent Need
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">Riverside Flood Response</h3>
                  <p className="text-gray-700 mb-4">
                    Over 200 families have been displaced by recent flooding in the Riverside area. Immediate shelter, food, and medical supplies are needed.
                  </p>
                  <div className="flex flex-col gap-2 mb-6 text-sm">
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Location:</span>
                      <span>Riverside Community Center, 789 River Road</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Coordinator:</span>
                      <span>Emergency Response Team</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Contact:</span>
                      <span>(555) 911-HELP</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#1E3A8A] mb-2 text-sm">Most Needed Items:</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm">
                      <li>Clean drinking water</li>
                      <li>Non-perishable food</li>
                      <li>Blankets and bedding</li>
                      <li>First aid supplies</li>
                      <li>Baby formula and diapers</li>
                    </ul>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-[#1E3A8A] text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-[#152C66] transition-all duration-300 ease-in-out flex items-center justify-center">
                      Volunteer
                    </button>
                    <button className="flex-1 bg-[#A99FFF] text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-[#8A7FFF] transition-all duration-300 ease-in-out flex items-center justify-center">
                      Donate
                    </button>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <a href="/all-shelters" className="text-[#1E3A8A] hover:text-[#A99FFF] font-medium transition-colors duration-300">
                    View All Shelters →
                  </a>
                </div>
              </div>
            ) : (
              /* Clarity Section - Free Items */
              <div>
                <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">Clarity Corner</h2>
                <p className="text-gray-600 mb-8">
                  Have something you no longer need? Post it here for someone who might find it useful.
                </p>
                
                {/* Form to post new items */}
                <div className="bg-white p-6 rounded-xl shadow mb-8">
  <h3 className="text-xl font-semibold text-[#1E3A8A] mb-4">Post an Item</h3>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="title" className="block text-gray-700 mb-1 text-sm">Item Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={newPost.title}
        onChange={handleInputChange}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]"
        required
      />
    </div>
    
    <div className="mb-4">
      <label htmlFor="description" className="block text-gray-700 mb-1 text-sm">Description</label>
      <textarea
        id="description"
        name="description"
        value={newPost.description}
        onChange={handleInputChange}
        rows="3"
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]"
        required
      ></textarea>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label htmlFor="posterName" className="block text-gray-700 mb-1 text-sm">Your Name</label>
        <input
          type="text"
          id="posterName"
          name="posterName"
          value={newPost.posterName}
          onChange={handleInputChange}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]"
          required
        />
      </div>
      
      <div>
        <label htmlFor="location" className="block text-gray-700 mb-1 text-sm">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={newPost.location}
          onChange={handleInputChange}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]"
          placeholder="City, State"
          required
        />
      </div>
    </div>
    
    <div className="mb-4">
      <label htmlFor="condition" className="block text-gray-700 mb-1 text-sm">Item Condition</label>
      <select
        id="condition"
        name="condition"
        value={newPost.condition}
        onChange={handleInputChange}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]"
        required
      >
        <option value="">Select condition</option>
        <option value="new">New</option>
        <option value="used">Used</option>
      </select>
    </div>
    
    <div className="mb-4">
      <label htmlFor="image" className="block text-gray-700 mb-1 text-sm">Upload Image</label>
      <input
        type="file"
        id="image"
        name="image"
        onChange={handleFileChange}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]"
        accept="image/*"
      />
    </div>
    
    <div className="mb-4">
      <label htmlFor="contact" className="block text-gray-700 mb-1 text-sm">Contact Information</label>
      <input
        type="text"
        id="contact"
        name="contact"
        value={newPost.contact}
        onChange={handleInputChange}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A99FFF]"
        placeholder="Email or phone number"
        required
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
                
                {/* Display existing posts */}
                <h3 className="text-xl font-semibold text-[#1E3A8A] mb-4">Available Items</h3>
                <div className="space-y-4">
                  {clarityPosts.map(post => (
                    <div key={post.id} className="bg-white p-4 rounded-xl shadow-md transition-transform hover:shadow-lg duration-300 ease-in-out">
                      <h4 className="text-lg font-semibold text-[#1E3A8A] mb-1">{post.title}</h4>
                      <p className="text-gray-700 text-sm mb-2">{post.description}</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <div>Posted: {post.postedDate}</div>
                        <div className="flex items-center">
                          <svg className="w-3 h-3 text-[#A99FFF] mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                          </svg>
                          <span>{post.contact}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-12 px-6 bg-[#1E3A8A] text-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Join Our Community Effort</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
          Together, we can make a difference. Your contribution helps build a better future for those in need.
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