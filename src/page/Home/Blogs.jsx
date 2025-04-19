import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
function Blogs() {

    const [property, setProperty ]= useState([]);
    useEffect(() => {
      const getAllProperty = async () => {
        try {
          const res = await axios.get(`https://manu-backend-6i7q.onrender.com/blog/getAllBlogs`);
          setProperty(res.data);
          console.log(res.data);
          
        } catch (error) {
          console.log(error);
        }
      };
      getAllProperty();
    }, []);
  return (
    <div className="bg-[#F7FBFC] text-gray-900 mt-5">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <h1 className="text-xl font-bold text-[#1E3A8A]">
          Latest Blogs and Updates
        </h1>
        <p className="mt-4  max-w-3xl mx-auto text-gray-600 opacity-75 hover:opacity-100 transition-opacity duration-300">
          Stay updated with our latest posts on environmental sustainability, community outreach, and other important topics!
        </p>
      </section>

      {/* Blog Cards Section */}
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 py-16">
        {/* Blog Card 1 */}
        {property.map((item)=>(
 <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
 <img
   src={item.images}
   alt="Blog 1"
   className="w-full h-64 object-cover rounded-md"
 />
 <h2 className="mt-4 text-xl font-semibold text-[#1E3A8A]">{item.title}</h2>
 <p className="mt-2 text-gray-600">
   {item.content}
 </p>
 <a
   href=""
   className="inline-block mt-4 text-[#A99FFF] font-semibold hover:text-[#1E3A8A] transition-colors duration-300"
 >
   Read More
 </a>
</div>

        ))}
       
 

     
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
