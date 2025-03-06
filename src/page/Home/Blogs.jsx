import React from "react";
import BlogsImage from "../../assets/year.jpeg";
import EnvironmentImage from "../../assets/Environment.jpeg";
import communityimage from "../../assets/community.jpeg";
import EducationImage from "../../assets/Education.jpeg";
function Blogs() {
  return (
    <div className="bg-[#F7FBFC] text-gray-900 mt-5">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <h1 className="text-3xl font-bold text-[#1E3A8A]">
          Latest Blogs and Updates
        </h1>
        <p className="mt-4 text-xl max-w-3xl mx-auto text-gray-600 opacity-75 hover:opacity-100 transition-opacity duration-300">
          Stay updated with our latest posts on environmental sustainability, community outreach, and other important topics!
        </p>
      </section>

      {/* Blog Cards Section */}
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 py-16">
        {/* Blog Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <img
            src={BlogsImage}
            alt="Blog 1"
            className="w-full h-64 object-cover rounded-md"
          />
          <h2 className="mt-4 text-2xl font-semibold text-[#1E3A8A]">The Future of Sustainable Construction</h2>
          <p className="mt-2 text-gray-600">
            Discover how the future of construction is evolving with sustainable materials and green technologies...
          </p>
          <a
            href="/blog1"
            className="inline-block mt-4 text-[#A99FFF] font-semibold hover:text-[#1E3A8A] transition-colors duration-300"
          >
            Read More
          </a>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <img
            src={EnvironmentImage}
            alt="Blog 2"
            className="w-full h-64 object-cover rounded-md"
          />
          <h2 className="mt-4 text-2xl font-semibold text-[#1E3A8A]">How Community Initiatives Are Changing Lives</h2>
          <p className="mt-2 text-gray-600">
            Join us as we explore the transformative power of community-driven projects that support those in need...
          </p>
          <a
            href="/blog2"
            className="inline-block mt-4 text-[#A99FFF] font-semibold hover:text-[#1E3A8A] transition-colors duration-300"
          >
            Read More
          </a>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <img
            src={communityimage}
            alt="Blog 3"
            className="w-full h-64 object-cover rounded-md"
          />
          <h2 className="mt-4 text-2xl font-semibold text-[#1E3A8A]">The Impact of Waste Management on the Environment</h2>
          <p className="mt-2 text-gray-600">
            Understanding the vital role that waste management plays in preserving the planet’s resources and reducing pollution...
          </p>
          <a
            href="/blog3"
            className="inline-block mt-4 text-[#A99FFF] font-semibold hover:text-[#1E3A8A] transition-colors duration-300"
          >
            Read More
          </a>
        </div>

        {/* Blog Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <img
            src={EducationImage}
            alt="Blog 4"
            className="w-full h-64 object-cover rounded-md"
          />
          <h2 className="mt-4 text-2xl font-semibold text-[#1E3A8A]">Empowering Local Communities Through Education</h2>
          <p className="mt-2 text-gray-600">
            Education is a powerful tool that transforms communities. Learn how community education programs are impacting local economies...
          </p>
          <a
            href="/blog4"
            className="inline-block mt-4 text-[#A99FFF] font-semibold hover:text-[#1E3A8A] transition-colors duration-300"
          >
            Read More
          </a>
        </div>
      </section>

      {/* Pagination or Call to Action */}
      {/* <section className="py-12 text-center"> */}
        {/* <a
          href="/all-blogs"
          className="inline-block text-xl font-semibold bg-[#A99FFF] text-white py-3 px-8 rounded-md hover:bg-[#1E3A8A] transition-colors duration-300"
        >
          View All Blogs
        </a>
      </section> */}
    </div>
  );
}

export default Blogs;
