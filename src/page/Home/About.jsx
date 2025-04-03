import React from "react";

function About() {
  return (
    <div className="bg-white text-gray-900 mt-4">
      {/* Hero Section */}
      <section className="py-16 text-center transition-all duration-700 ease-in-out">
  <h1 className="text-3xl font-semibold text-[#1E3A8A] hover:text-[#A99FFF] transition-colors duration-300">
    About Manu Project
  </h1>
  <div className="mt-4 max-w-3xl mx-auto opacity-75 hover:opacity-100 transition-opacity duration-300">
    <p className="mb-4">
      Manu is a leading innovator in the built environment sector, dedicated to accelerating the transition to a circular economy. We develop cutting-edge tools and services that empower developers, architects, policymakers, and industry professionals to integrate sustainable, reuse-driven practices into their projects.
    </p>
    <p className="mb-4">
      By leveraging innovation and data-driven insights, we help reduce reliance on virgin materials, lower greenhouse gas emissions, and minimize waste generation. Our mission is to reshape construction and urban development, bridging the gap between traditional practices and regenerative design.
    </p>
    <p>
      At Manu, we believe the built environment should contribute to a healthier, more circular, and equitable future. Through collaboration with forward-thinking partners, we continue to refine and expand our solutions, driving sustainability, resilience, and positive environmental impact.
    </p>
  </div>
</section>

      {/* Mission and Vision */}
      <section className="py-16 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Mission & Vision */}
    <div className="grid md:grid-cols-2 gap-12 mb-16">
      {/* Mission */}
      <div className="bg-[#F7F7F7] p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">Our Mission</h2>
        <p className="text-gray-600">
          To lead the transition from a wasteful, linear construction model to a regenerative, circular one by enabling and accelerating the reuse of construction materials, changing the mentality of the construction industry, and fostering sustainable building practices that support environmental, social, and economic resilience.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-[#F7F7F7] p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">Our Vision</h2>
        <p className="text-gray-600">
          The circular-oriented construction industry that coexists in harmony with the natural environment, sourcing materials entirely from existing buildings.
        </p>
      </div>
    </div>

    {/* Core Values */}
    <div className="mb-16">
      <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-8 text-center">Core Values</h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Our values light the way to achieving our mission. They reflect our identity and shape our collaborative spirit: We are an innovative, digitally-driven organization that puts customers at the heart of everything we do, proactively driving the transformation they expect and deserve.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Value 1 */}
        <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Own It</h3>
          <p className="text-gray-600">
            We step up, take charge, and turn vision into reality.
          </p>
        </div>

        {/* Value 2 */}
        <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Human-Centered Culture</h3>
          <p className="text-gray-600">
            We foster a diverse, inclusive, and supportive workplace where everyone thrives.
          </p>
        </div>

        {/* Value 3 */}
        <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Better Together</h3>
          <p className="text-gray-600">
            We combine our unique strengths to achieve what no one could alone.
          </p>
        </div>

        {/* Value 4 */}
        <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Think Big</h3>
          <p className="text-gray-600">
            Potential knows no bounds – we always find a way forward.
          </p>
        </div>

        {/* Value 5 */}
        <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Customer-Centric Approach</h3>
          <p className="text-gray-600">
            We don't just meet needs - we foresee and exceed them.
          </p>
        </div>

        {/* Value 6 */}
        <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Act with Integrity</h3>
          <p className="text-gray-600">
            Integrity is non-negotiable. We always walk our talk, choosing the right path with unwavering ethical commitment.
          </p>
        </div>
      </div>
    </div>

    {/* Pillars of MANU */}
    <div>
      <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-8 text-center">Pillars of MANU</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Pillar 1 */}
        <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Sustainability</h3>
          <p className="text-gray-600">
            We are committed to reducing environmental impact by promoting the reuse of construction materials, minimizing waste, and fostering low-carbon building practices.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Innovation</h3>
          <p className="text-gray-600">
            We develop cutting-edge tools and services to support a circular construction industry, continuously seeking new ways to enhance material reuse and resource efficiency.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Collaboration</h3>
          <p className="text-gray-600">
            We work closely with industry stakeholders, from architects to builders, to create a shared ecosystem that values sustainable construction and material exchange.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Resilience</h3>
          <p className="text-gray-600">
            We support environmental, social, and economic resilience by transforming the construction industry into a regenerative, circular model that benefits communities and the planet.
          </p>
        </div>

        {/* Pillar 5 */}
        <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 md:col-span-2 max-w-xl mx-auto">
          <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Education & Awareness</h3>
          <p className="text-gray-600">
            We empower industry professionals and communities through training, capacity building, and awareness campaigns to drive the shift towards circular and sustainable construction.
          </p>
        </div>
      </div>
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
