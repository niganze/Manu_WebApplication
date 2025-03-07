import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Impact() {
  // Carbon dioxide impact data
  const carbonData = [
    { year: '2019', emissions: 1200, reduction: 200 },
    { year: '2020', emissions: 1100, reduction: 350 },
    { year: '2021', emissions: 950, reduction: 500 },
    { year: '2022', emissions: 800, reduction: 650 },
    { year: '2023', emissions: 650, reduction: 800 },
    { year: '2024', emissions: 500, reduction: 950 },
  ];

  // Waste reduction data
  const wasteData = [
    { year: '2019', tonnes: 120 },
    { year: '2020', tonnes: 180 },
    { year: '2021', tonnes: 250 },
    { year: '2022', tonnes: 320 },
    { year: '2023', tonnes: 420 },
    { year: '2024', tonnes: 520 },
  ];

  // Trees conserved data
  const treeData = [
    { year: '2019', trees: 1500 },
    { year: '2020', trees: 2200 },
    { year: '2021', trees: 3100 },
    { year: '2022', trees: 4200 },
    { year: '2023', trees: 5500 },
    { year: '2024', trees: 7000 },
  ];

  // Community cost reduction
  const communityCostData = [
    { year: '2019', savings: 25000 },
    { year: '2020', savings: 42000 },
    { year: '2021', savings: 68000 },
    { year: '2022', savings: 95000 },
    { year: '2023', savings: 130000 },
    { year: '2024', savings: 175000 },
  ];

  // Economic impact data
  const economicImpactData = [
    { name: 'Direct Savings', value: 450000 },
    { name: 'Job Creation', value: 250000 },
    { name: 'Reduced Import Costs', value: 320000 },
    { name: 'Infrastructure Benefits', value: 180000 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Materials reused data
  const materialsReusedData = [
    { year: '2019', concrete: 80, metal: 40, wood: 60, other: 30 },
    { year: '2020', concrete: 100, metal: 55, wood: 75, other: 45 },
    { year: '2021', concrete: 130, metal: 70, wood: 95, other: 60 },
    { year: '2022', concrete: 170, metal: 90, wood: 120, other: 80 },
    { year: '2023', concrete: 210, metal: 115, wood: 155, other: 105 },
    { year: '2024', concrete: 260, metal: 145, wood: 190, other: 135 },
  ];

  // Cumulative statistics
  const totalTreesSaved = 23500;
  const totalWasteReduced = 1810;
  const totalCarbonReduction = 3450;
  const totalEconomicBenefit = 1200000;

  return (
    <div className="bg-[#F7FBFC] text-gray-500 py-12 mt-12">
      {/* Hero Section */}
      <section className="text-center mb-12 px-4">
        <h1 className="text-2xl font-bold text-[#1E3A8A]">
          Environmental & Economic Impact
        </h1>
        <p className="mt-4  max-w-3xl mx-auto text-gray-600">
          See how the Manu Project is making a difference by repurposing construction materials, 
          reducing waste, and creating lasting environmental and economic benefits.
        </p>
      </section>

      {/* Key Statistics Summary */}
      <section className="mb-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-xl font-bold text-[#1E3A8A] mb-2">{totalTreesSaved.toLocaleString()}</div>
            <div className="text-lg font-medium">Trees Saved</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-xl font-bold text-[#1E3A8A] mb-2">{totalWasteReduced.toLocaleString()}</div>
            <div className="text-lg font-medium">Tonnes of Waste Reduced</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-xl font-bold text-[#1E3A8A] mb-2">{totalCarbonReduction.toLocaleString()}</div>
            <div className="text-lg font-medium">Tonnes of CO₂ Reduced</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-xl font-bold text-[#1E3A8A] mb-2">${(totalEconomicBenefit/1000000).toFixed(1)}M</div>
            <div className="text-lg font-medium">Economic Benefits</div>
          </div>
        </div>
      </section>

      {/* Carbon Impact Section */}
      <section className="mb-16 px-4">
        <h2 className="text-3xl text-center font-semibold text-[#1E3A8A] mb-6">Carbon Dioxide Impact</h2>
        <div className="max-w-5xl mx-auto">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={carbonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis label={{ value: 'Tonnes of CO₂', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="emissions" name="CO₂ Emissions" stroke="#FF6347" strokeWidth={2} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="reduction" name="CO₂ Reduction" stroke="#32CD32" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
          <p className="mt-4 text-center text-gray-600">
            By reusing construction materials, we've achieved a significant reduction in carbon emissions. 
            The chart shows how our platform has contributed to decreasing the carbon footprint in the construction industry.
          </p>
        </div>
      </section>

      {/* Waste Reduction and Trees Conserved Section */}
      <section className="mb-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl text-center font-semibold text-[#1E3A8A] mb-6">Waste Reduction</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={wasteData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="tonnes" name="Tonnes of Waste Reduced" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4 text-center text-gray-600">
              Our platform has helped divert construction waste from landfills, with increasing amounts each year.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-center font-semibold text-[#1E3A8A] mb-6">Trees Conserved</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={treeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="trees" name="Trees Saved" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4 text-center text-gray-600">
              By reusing wood and reducing the need for new lumber, we've helped save thousands of trees.
            </p>
          </div>
        </div>
      </section>

      {/* Materials Reused Section */}
      <section className="mb-16 px-4">
        <h2 className="text-3xl text-center font-semibold text-[#1E3A8A] mb-6">Materials Reused (Tonnes)</h2>
        <div className="max-w-5xl mx-auto">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={materialsReusedData} barGap={0} barCategoryGap="15%">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="concrete" name="Concrete & Bricks" stackId="a" fill="#8884d8" />
              <Bar dataKey="metal" name="Metal" stackId="a" fill="#82ca9d" />
              <Bar dataKey="wood" name="Wood" stackId="a" fill="#ffc658" />
              <Bar dataKey="other" name="Other Materials" stackId="a" fill="#ff8042" />
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-4 text-center text-gray-600">
            Our platform has facilitated the reuse of various construction materials that would otherwise end up in landfills.
          </p>
        </div>
      </section>

      {/* Economic Impact Section */}
      <section className="mb-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl text-center font-semibold text-[#1E3A8A] mb-6">Community Cost Savings</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={communityCostData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Savings']} />
                <Line type="monotone" dataKey="savings" name="Cost Savings ($)" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
            <p className="mt-4 text-center text-gray-600">
              Community projects have saved significantly on material costs by using donated and repurposed items.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-center font-semibold text-[#1E3A8A] mb-6">Economic Benefits Breakdown</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={economicImpactData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {economicImpactData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Value']} />
              </PieChart>
            </ResponsiveContainer>
            <p className="mt-4 text-center text-gray-600">
              Our platform generates economic benefits through direct savings, job creation, and reduced import costs.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="mb-16 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">Impact Stories</h2>
          <div className="italic text-gray-600 mb-4">
            "The Manu Project has transformed how we source materials for our community center. We saved over $30,000 on building materials and reduced our environmental footprint significantly."
          </div>
          <div className="font-medium text-right">- Community Project Leader</div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center px-4">
        <h2 className="text-xl font-semibold text-[#1E3A8A] mb-4">Be Part of the Change</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-6">
          Join our platform to contribute to environmental sustainability, support community projects, and make a positive impact on our planet.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/marketplace"
            className="inline-block  font-semibold bg-[#1E3A8A] text-white py-2 px-5 rounded-md hover:bg-[#152a62] transition-colors duration-300"
          >
            Browse Marketplace
          </a>
          <a
            href="/community"
            className="inline-block  font-semibold bg-[#A99FFF] text-white py-3 px-8 rounded-md hover:bg-[#8a7ff5] transition-colors duration-300"
          >
            Support Community Projects
          </a>
        </div>
      </section>
    </div>
  );
}

export default Impact;