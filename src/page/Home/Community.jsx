import React from "react";

function Community() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-16 text-center transition-all duration-700 ease-in-out">
        <h1 className="text-5xl font-semibold text-[#1E3A8A] hover:text-[#A99FFF] transition-colors duration-300">
          Community Shelter & Clarity
        </h1>
        <p className="mt-4 text-xl max-w-3xl mx-auto opacity-75 hover:opacity-100 transition-opacity duration-300">
          Join hands with us in making a difference. By supporting shelters and clarity initiatives, we aim to provide safe spaces and transparent operations that help communities thrive.
        </p>
      </section>

      {/* Shelter Information */}
      <section className="py-16 px-6 bg-[#F7F7F7]">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Shelter Overview */}
          <div className="bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
            <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">Our Shelters</h2>
            <p className="text-gray-600">
              Our shelters provide a safe haven for individuals and families in need. We are committed to offering both immediate relief and long-term support to help people rebuild and thrive.
            </p>
            <a
              href="/donate"
              className="inline-block bg-[#A99FFF] text-white px-6 py-3 mt-6 rounded-md font-semibold hover:bg-[#D0C8F2] transition-all duration-300 ease-in-out"
            >
              Donate to a Shelter
            </a>
          </div>

          {/* Clarity Initiatives */}
          <div className="bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
            <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">Clarity in Action</h2>
            <p className="text-gray-600">
              Transparency is key to building trust. We provide full visibility into how donations and resources are allocated, ensuring that every contribution has a measurable impact.
            </p>
            <a
              href="/transparency"
              className="inline-block bg-[#A99FFF] text-white px-6 py-3 mt-6 rounded-md font-semibold hover:bg-[#D0C8F2] transition-all duration-300 ease-in-out"
            >
              Learn About Our Process
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action - Get Involved */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">Get Involved</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8 opacity-75 hover:opacity-100 transition-opacity duration-300">
          Be a part of something greater. Whether you’re looking to donate, volunteer, or spread awareness, your contribution makes a difference in building a better future for those in need.
        </p>
        <a
          href="/get-involved"
          className="inline-block bg-[#A99FFF] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#D0C8F2] transition-all duration-300 ease-in-out"
        >
          Join the Movement
        </a>
      </section>
    </div>
  );
}

export default Community;
