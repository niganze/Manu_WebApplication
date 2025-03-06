import React from "react";

function Service() {
  return (
    <div className="bg-white text-black mt-16">
      {/* Hero Section */}
      <section className="bg-[#1E3A8A] py-12 text-center">
        <h1 className="text-4xl font-semibold text-white">Service Features</h1>
        <p className="text-lg mt-4 text-white max-w-2xl mx-auto">
          Discover how the Manu Project App helps manage surplus materials, reduce environmental degradation, and foster community engagement.
        </p>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center text-[#A99FFF] mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="text-center bg-[#F7F7F7] p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12 mx-auto text-[#A99FFF]">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 10V6a2 2 0 10-4 0v4H8l4 4 4-4h-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#1e3a8a]">Marketplace for Selling Items</h3>
            <p className="mt-4 text-gray-600">
              Sell surplus and unused construction materials to buyers in need, helping reduce waste and make a positive impact on the environment.
            </p>
          </div>

          {/* Service 2 */}
          <div className="text-center bg-[#F7F7F7] p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12 mx-auto text-[#A99FFF]">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 3h10M5 12l7-7 7 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#1e3a8a]">Community Projects for Donations</h3>
            <p className="mt-4 text-gray-600">
              Donate surplus materials to community projects that support schools, housing, and environmental sustainability efforts.
            </p>
          </div>

          {/* Service 3 */}
          <div className="text-center bg-[#F7F7F7] p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12 mx-auto text-[#A99FFF]">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4H4v14h5V4zm6 0h5v14h-5V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#1e3a8a]">Environmental Impact Tracking</h3>
            <p className="mt-4 text-gray-600">
              Track the environmental impact of your donations and purchases. See the tangible benefits, like reducing construction waste.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#fcfcfc] text-center py-12">
        <h2 className="text-3xl font-semibold text-[#A99FFF]">Join Us in Making a Difference</h2>
        <p className="mt-4 text-lg text-[#A99FFF] max-w-2xl mx-auto">
          Together, we can reduce environmental waste and create a more sustainable future. Whether you’re donating or purchasing, you’re making an impact.
        </p>
        <div className="mt-8">
          <a href="/marketplace" className="bg-white text-[#A99FFF] px-6 py-3 rounded-md font-semibold hover:bg-[#D0C8F2] transition-colors">
            Start Now
          </a>
        </div>
      </section>
    </div>
  );
}

export default Service;
