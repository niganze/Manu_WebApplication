import React from "react";
import { Building, PackageCheck, RefreshCcw, SearchCheck, Wrench, BookOpenCheck, Leaf, ShieldCheck } from "lucide-react";
import { Card ,CardContent} from "../../components/card";

const services = [
  {
    icon: <Building className="w-10 h-10 text-blue-600" />,
    title: "Consulting & Reuse Studies",
    description:
      "Comprehensive consulting to integrate reuse and circular economy practices into construction projects from planning to execution.",
  },
  {
    icon: <RefreshCcw className="w-10 h-10 text-green-600" />,
    title: "Material Reconditioning",
    description:
      "Professional reconditioning of materials, ensuring high quality, insurance-compliant components for construction.",
  },
  {
    icon: <SearchCheck className="w-10 h-10 text-yellow-500" />,
    title: "Research & Supply",
    description:
      "Sourcing, reconditioning, and delivering reused materials from a wide network for your projects across Rwanda.",
  },
  {
    icon: <PackageCheck className="w-10 h-10 text-red-500" />,
    title: "Customizable Sales Support",
    description:
      "Flexible sales packages (INGENZI, IMENA, AGACIRO) to manage and optimize the sale of reused materials.",
  },
  {
    icon: <BookOpenCheck className="w-10 h-10 text-indigo-500" />,
    title: "Training & Capacity Building",
    description:
      "Empowering professionals with knowledge and tools for adopting sustainable and circular economy practices.",
  },
  {
    icon: <Leaf className="w-10 h-10 text-green-700" />,
    title: "Sustainable Design",
    description:
      "Eco-friendly planning and construction focusing on energy efficiency, durability, and environmental responsibility.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-orange-600" />,
    title: "Deconstruction Services",
    description:
      "Careful dismantling of structures to salvage reusable materials for new construction and renovations.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-sky-500" />,
    title: "Environmental Impact Assessments",
    description:
      "Conducting EIAs and circularity audits to align with regulations and discover sustainability opportunities.",
  },
];

function Service() {
  return (
    <div className="bg-white text-black mt-16">
      {/* Hero Section */}
      <section className="bg-[#1E3A8A] py-12 text-center px-4">
        <h1 className="text-4xl font-semibold text-white">Service Features</h1>
        <p className="mt-4 text-white max-w-2xl mx-auto">
          Discover how the Manu Project App helps manage surplus materials, reduce environmental degradation, and foster community engagement.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-2xl transition-all">
              <CardContent className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Service;
