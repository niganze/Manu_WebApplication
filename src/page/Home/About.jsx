import React from "react";
import about from "../../assets/about.png"
function About() {
  return (
    <div className="bg-white text-gray-900 mt-4">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Company name and headline */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1E3A8A] mb-4">Manu</h2>
              <p className="text-xl text-gray-700 font-medium">
                Leading Innovator in the Built Environment Sector
              </p>
            </div>

            {/* Main content with styling */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <p className="text-gray-700 mb-6">
                Manu is a leading innovator in the built environment sector,
                developing cutting-edge tools and services designed to support
                stakeholders in the built environment sector, enabling them to
                address their specific needs and accelerate the adoption of
                reuse practices and embed Circular Economy practices within the
                built environment.
              </p>

              <p className="text-gray-700 mb-6">
                With a mission to accelerate the transition toward circularity,
                Manu supports developers, architects, policymakers, and industry
                professionals in integrating environmentally responsible
                solutions into their projects to minimize reliance on virgin
                materials, reduce greenhouse gas emissions, and lower embodied
                ecological impacts and waste generation, to name a few.
              </p>

              <p className="text-gray-700 mb-6">
                We collaborate with forward-thinking partners, leveraging
                innovation and data-driven insights to reshape the future of
                construction and urban development. Our mission is to transform
                the way materials are sourced, used, and repurposed, ensuring
                that the built environment contributes positively to both people
                and the planet.
              </p>

              <p className="text-gray-700 mb-6">
                By bridging the gap between traditional practices and
                regenerative design, we enable stakeholders to meet
                sustainability goals while fostering economic resilience. At
                Manu, we believe that the built environment should not only
                serve present needs but also contribute to a healthier, more
                circular, and equitable future.
              </p>

              <p className="text-gray-700">
                As the industry evolves, we continue to adapt, refine, and
                expand our solutions to support a more sustainable, low-carbon,
                and waste-free world.
              </p>
            </div>

            {/* Call to action */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Ready to Transform the Built Environment?
              </h3>
              {/* <div className="flex justify-center gap-4">
                <a
                  href="#contact"
                  className="[bg-#A99FFF]
 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="#services"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  Our Services
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <div className="bg-[#F7F7F7] p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
              <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To lead the transition from a wasteful, linear construction
                model to a regenerative, circular one by enabling and
                accelerating the reuse of construction materials, changing the
                mentality of the construction industry, and fostering
                sustainable building practices that support environmental,
                social, and economic resilience.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#F7F7F7] p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
              <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">
                Our Vision
              </h2>
              <p className="text-gray-600">
                The circular-oriented construction industry that coexists in
                harmony with the natural environment, sourcing materials
                entirely from existing buildings.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-8 text-center">
              Core Values
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Our values light the way to achieving our mission. They reflect
              our identity and shape our collaborative spirit: We are an
              innovative, digitally-driven organization that puts customers at
              the heart of everything we do, proactively driving the
              transformation they expect and deserve.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">
                  Own It
                </h3>
                <p className="text-gray-600">
                  We step up, take charge, and turn vision into reality.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">
                  Human-Centered Culture
                </h3>
                <p className="text-gray-600">
                  We foster a diverse, inclusive, and supportive workplace where
                  everyone thrives.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">
                  Better Together
                </h3>
                <p className="text-gray-600">
                  We combine our unique strengths to achieve what no one could
                  alone.
                </p>
              </div>

              {/* Value 4 */}
              <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">
                  Think Big
                </h3>
                <p className="text-gray-600">
                  Potential knows no bounds – we always find a way forward.
                </p>
              </div>

              {/* Value 5 */}
              <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">
                  Customer-Centric Approach
                </h3>
                <p className="text-gray-600">
                  We don't just meet needs - we foresee and exceed them.
                </p>
              </div>

              {/* Value 6 */}
              <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">
                  Act with Integrity
                </h3>
                <p className="text-gray-600">
                  Integrity is non-negotiable. We always walk our talk, choosing
                  the right path with unwavering ethical commitment.
                </p>
              </div>
            </div>
          </div>

          {/* Pillars of MANU */}
          <div>
            <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-8 text-center">
              Pillars of MANU
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pillar 1 */}
              <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  We are committed to reducing environmental impact by promoting
                  the reuse of construction materials, minimizing waste, and
                  fostering low-carbon building practices.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We develop cutting-edge tools and services to support a
                  circular construction industry, continuously seeking new ways
                  to enhance material reuse and resource efficiency.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">
                  Collaboration
                </h3>
                <p className="text-gray-600">
                  We work closely with industry stakeholders, from architects to
                  builders, to create a shared ecosystem that values sustainable
                  construction and material exchange.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">
                  Resilience
                </h3>
                <p className="text-gray-600">
                  We support environmental, social, and economic resilience by
                  transforming the construction industry into a regenerative,
                  circular model that benefits communities and the planet.
                </p>
              </div>

              {/* Pillar 5 */}
              <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 md:col-span-2 max-w-xl mx-auto">
                <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">
                  Education & Awareness
                </h3>
                <p className="text-gray-600">
                  We empower industry professionals and communities through
                  training, capacity building, and awareness campaigns to drive
                  the shift towards circular and sustainable construction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Activities Section */}
<div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-12">Our Main Activities</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 bg-[#A99FFF] rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1E3A8A]">Digital Tools Administration</h3>
              <p className="text-black">Connecting available building materials on the secondary market with those looking for secondary building products and diverting surplus to community projects.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 bg-[#A99FFF] rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1E3A8A]">Training & Capacity Building</h3>
              <p className="text-black">Providing education in the reuse of materials and circular economy principles for the construction industry.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 bg-[#A99FFF] rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1E3A8A]">Material Recovery & Deconstruction</h3>
              <p className="text-black">Specialized services for recovering materials from buildings and careful deconstruction to preserve reusable components.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 bg-[#A99FFF] rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1E3A8A]">Material Reconditioning</h3>
              <p className="text-black">Restoring and reconditioning salvaged materials through specialized workshops and channels to prepare them for reuse.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 bg-[#A99FFF] rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1E3A8A]">Consulting & Studies</h3>
              <p className="text-black">Expert consulting on material reuse, sales and supply assistance for all construction industry stakeholders.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 bg-[#A99FFF] rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1E3A8A]">Environmental Impact Assessments</h3>
              <p className="text-black">Conducting EIAs and Circularity Audits to measure and improve the environmental performance of projects.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why We Need To Save Building Materials */}
      <div className="bg-black bg-opacity-5 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-8">Why We Need to Save Building Materials</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                {/* <h3 className="text-xl font-semibold mb-4 text-[#1E3A8A]">The Construction Sector's Impact</h3> */}
                <p className="text-black mb-4">
                  The construction sector is the major resource-consuming, greenhouse gas-emitting, and waste-producing sector in our modern society, using—on average—more than 40% of the total raw materials extracted from the earth worldwide, contributing 11% of global emissions, and at the same time, being responsible for 50% of the world's waste, making it one of the largest sources of waste in the world.
                </p>
              </div>
              
              <div className="mb-6">
                {/* <h3 className="text-xl font-semibold mb-4 text-[#1E3A8A]">The Waste Problem</h3> */}
                <p className="text-black mb-4">
                  Every year, several million tons of usable building materials end up directly in landfills throughout Rwanda. A large part of this is created in demolition and dismantling projects, but also on construction sites for new buildings, of which 10-15% of all materials are disposed of that are not used due to miscalculations before the end of their useful life.
                </p>
                <p className="text-black mb-4">
                  Accordingly, only 6% of these construction materials are recycled and reused, which means the principles of circularity are only applied in isolated instances. Transport, disposal, as well as the new production of the resulting missing building materials, create huge amounts of excess waste with huge consequences for our overall public health and the environment.
                </p>
              </div>
              
              <div>
                {/* <h3 className="text-xl font-semibold mb-4 text-[#1E3A8A]">Rwanda's Growing Challenge</h3> */}
                <p className="text-black">
                  Accommodating Rwanda's rapid population growth, which is projected to increase from 13.6 million to 17.6 million by 2035, coupled with the emergence of a growing middle class and increasing urbanization, will undoubtedly drive a demand for additional buildings and infrastructure, with respective knock-on effects in terms of the volumes of waste generated, posing a pressing challenge for waste management and environmental sustainability. There is, therefore, an urgent need to transition from a linear construction model to a more sustainable and regenerative one based on circular economy principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-12">The Team</h2>
          
          <div className="max-w-4xl mx-auto mb-10">
            <p className="text-black text-center text-lg mb-8">
              Whatever your reuse project, the Manu team is always here to assist. Our diversity represents one of our most significant strengths. Our talents come from all walks of life: engineers, salespeople, architects or e-commerce specialists... We pool our skills and experience to best meet your objectives.
            </p>
            <p className="text-black text-center text-lg">
              We approach our work with energy and, above all, a profound passion for excellence. Each day, we are all guided by a collective determination to drive meaningful progress and get things done.
            </p>
          </div>
          
          {/* Team Photos Grid */}
         {/* Team Section */}
<div className="bg-white py-16">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-12">The Team</h2>
    
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
      {/* Single Team Image */}
      <div className="w-full md:w-1/2">
        <div className="aspect-square bg-black bg-opacity-5 rounded-lg overflow-hidden shadow-md">
          <img src={about} alt="Our Team" className="w-full h-full object-cover" />
        </div>
      </div>
      
      {/* Team Description */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4">Meet Our Experts</h3>
        <p className="text-black mb-4">
          Our diverse team brings together engineers, architects, and circular economy specialists passionate about sustainable construction.
        </p>
        <p className="text-black mb-6">
          We approach each project with creativity and determination to maximize material reuse and minimize environmental impact.
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-[#A99FFF] text-white rounded-full text-sm">Architects</span>
          <span className="px-3 py-1 bg-[#A99FFF] text-white rounded-full text-sm">Engineers</span>
          <span className="px-3 py-1 bg-[#A99FFF] text-white rounded-full text-sm">Specialists</span>
          <span className="px-3 py-1 bg-[#A99FFF] text-white rounded-full text-sm">Consultants</span>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-[#1E3A8A] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Call to Action</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-black mb-6">
                In spite of high environmental ambitions and advanced recycling technologies, we reduce entire pyramids of building materials to rubble every year, and the amount is continually increasing. For millennia, the main construction material was common sense. Every usable rock, brick or piece of timber was precious, and used and reused as long as possible.
              </p>
              
              <p className="text-black mb-6">
                In today's cities, a good location has far more value than the building on it. When a building no longer fits its purpose, too often it is demolished and newly built. Investment-wise, this might make sense. But the collateral impact is huge. Most construction materials weigh heavily on the environment. Raw materials are extracted, ecosystems affected and greenhouse gases emitted throughout production and the entire logistics chain.
              </p>
              
              <p className="text-black mb-6">
                Recycling only solves part of the problem. It consumes energy too, and most recycled materials have limited applications. Not all types of waste can be recycled, some of it is incinerated, while another fraction is still landfilled. And yet it doesn't have to be that way.
              </p>
              
              <p className="text-black mb-6">
                Preserving and improving existing buildings is certainly the best way to go. But when this is not possible, there is another alternative to straightforward demolition. To carefully dismantle buildings that really need to go, so that their components become available for reuse not only recycling.
              </p>
              
              <p className="text-black mb-6">
                The list of materials that can be fully removed and locally refurbished, is almost endless. Bricks, natural stone and timber can be salvaged from small residential buildings, while bigger office buildings can yield doors, glass partitions, sanitary equipment, tiles, metallic profiles, insulation materials, technical equipment, and more.
              </p>
              
              <p className="text-black mb-6">
                Applying dismantling more widely means a larger array of second hand building components become available. And these can be reintegrated in new constructions or refurbishments. As a result, less raw materials are consumed, less waste is produced. Moreover, selective dismantling supports local economic activities and helps preserve our cultural heritage.
              </p>
              
              <p className="text-black mb-8">
                Today, only 1% of all building materials are reused. Making that amount grow will require a concerted effort. ALL stakeholders within the building industry will have a role to play. Erecting buildings that contain the highest possible percentage of reused elements is "common sense", as our ancestors have proven. Making this possible again might well be the most impressive construction feat of our age. In any case, it's the way to go.
              </p>
              
              <div className="text-center">
                <a href="#contact" className="inline-block bg-[#A99FFF] hover:bg-[#1E3A8A] text-white font-medium px-8 py-4 rounded-lg transition-colors duration-300 text-lg">
                  Join Our Movement
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-12 text-center transition-all duration-700 ease-in-out">
        <h2 className="text-xl font-semibold text-[#1E3A8A] mb-6">Get Involved</h2>
        <p className="max-w-3xl mx-auto mb-8 text-black opacity-75 hover:opacity-100 transition-opacity duration-300">
          Whether you're looking to donate, buy, or sell surplus materials, we welcome you to join our growing community. Together, we can make a lasting impact on sustainability and the environment.
        </p>
        <a
          href="/marketplace"
          className="inline-block bg-[#A99FFF] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#1E3A8A] transition-all duration-300 ease-in-out"
        >
          Join the Movement
        </a>
      </section>
    </div>
  );
}

export default About;
