import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Impact() {
  // Sample data for environmental impact (before vs after)
  const data = [
    { name: '2019', before: 80, after: 20 },
    { name: '2020', before: 75, after: 30 },
    { name: '2021', before: 70, after: 40 },
    { name: '2022', before: 60, after: 50 },
    { name: '2023', before: 50, after: 60 },
    { name: '2024', before: 40, after: 70 },
  ];

  return (
    <div className="bg-[#F7FBFC] text-gray-500 py-12 mt-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#1E3A8A]">
          The Impact of Our Platform on the Environment
        </h1>
        <p className="mt-4 text-xl max-w-3xl mx-auto text-gray-600 opacity-75 hover:opacity-100 transition-opacity duration-300">
          Discover how our platform has been transforming the way we approach environmental sustainability and how we are working to make a positive impact.
        </p>
      </section>

      {/* Statistics Section */}
      <section className="flex justify-center mb-12">
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl text-center font-semibold text-[#1E3A8A]">Environmental Impact (Before vs After)</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="before" stroke="#FF6347" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="after" stroke="#32CD32" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Impact Description Section */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">Our Platform's Impact Over Time</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          Before the launch of our platform, environmental challenges were more severe, with higher pollution levels and less efficient resource usage. Through our innovative solutions, we have reduced waste, energy consumption, and contributed to a cleaner, greener world. The statistics above show how far we've come and the continued progress we're making.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <a
          href="/get-involved"
          className="inline-block text-xl font-semibold bg-[#A99FFF] text-white py-3 px-8 rounded-md hover:bg-[#1E3A8A] transition-colors duration-300"
        >
          Join the Movement - Get Involved!
        </a>
      </section>
    </div>
  );
}

export default Impact;
