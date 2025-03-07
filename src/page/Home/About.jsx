import React from "react";

function About() {
  return (
    <div className="bg-white text-gray-900 mt-4">
      {/* Hero Section */}
      <section className="py-16 text-center transition-all duration-700 ease-in-out">
        <h1 className="text-3xl font-semibold text-[#1E3A8A] hover:text-[#A99FFF] transition-colors duration-300">
          About Manu Project
        </h1>
        <p className="mt-4  max-w-3xl mx-auto opacity-75 hover:opacity-100 transition-opacity duration-300">
          The Manu Project App is dedicated to reducing environmental degradation and combating climate change by repurposing surplus and idle construction materials. We aim to ensure that materials are reused for better purposes, not wasted.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-[#F7F7F7] p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
            <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to connect individuals, organizations, and businesses to reduce waste. By repurposing materials for sustainable development, we empower local projects and foster a circular economy.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#F7F7F7] p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
            <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">Our Vision</h2>
            <p className="text-gray-600">
              We envision a world where no construction material is wasted, where every item is either sold, donated, or reused to support communities and reduce environmental harm. Our platform is a catalyst for positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 text-center transition-all duration-700 ease-in-out">
        <h2 className="text-xl font-semibold text-[#1E3A8A] mb-6">Get Involved</h2>
        <p className="max-w-3xl mx-auto mb-8 opacity-75 hover:opacity-100 transition-opacity duration-300">
          Whether you're looking to donate, buy, or sell surplus materials, we welcome you to join our growing community. Together, we can make a lasting impact on sustainability and the environment.
        </p>
        <a
          href="/marketplace"
          className="inline-block bg-[#A99FFF] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#D0C8F2] transition-all duration-300 ease-in-out"
        >
          Join the Movement
        </a>
      </section>
    </div>
  );
}

export default About;
