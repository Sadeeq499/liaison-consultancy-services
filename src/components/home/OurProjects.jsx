import React from "react";
import { motion } from "framer-motion";

const notifications = [
  {
    id: 1,
    text: "The Transferable Development Rights (TDR) platform under the HMDA jurisdiction is now digitized. All TDRs will be processed exclusively through online only. Citizens can apply for and digitize their manual TDR certificates.",
    isNew: true,
  },
  {
    id: 2,
    text: "All types of Building Permissions, Occupancy Certificates (O.C), and Layout permissions, Group Housing Permission, (except Change of Land Use) falls within the limits of Grampanchayats under the jurisdiction of HMDA limits will now be exclusively processed through TG-bPASS only and any new applications except CLU will not be entertained in DPMS further. Citizens are requested to apply through TG-bPASS website with the following URL: http://tgbpass.telangana.gov.in from 24th April -2024",
    isNew: true,
  },
];

const clients = [
  {
    id: 1,
    name: "DLR",
    description: "Residential Projects",
    image:
      "https://img.freepik.com/premium-vector/building-logo-design_644408-164.jpg",
  },
  {
    id: 2,
    name: "ACE Constructions",
    image:
      "https://img.freepik.com/premium-vector/construction-logo-design_644408-163.jpg",
  },
  {
    id: 3,
    name: "Aparna Western Meadows Welfare Association",
    image:
      "https://img.freepik.com/premium-vector/real-estate-logo-design_644408-158.jpg",
  },
  {
    id: 4,
    name: "PMJ Jewellers",
    image:
      "https://img.freepik.com/premium-vector/luxury-jewelry-logo_644408-170.jpg",
  },
  {
    id: 5,
    name: "Sudhir Associates",
    image:
      "https://img.freepik.com/premium-vector/business-consulting-logo_644408-175.jpg",
  },
  {
    id: 6,
    name: "Spira Duck Industries",
    image:
      "https://img.freepik.com/premium-vector/industrial-logo-design_644408-180.jpg",
  },
  {
    id: 7,
    name: "Sri Chaitanya Education Institutes",
    image:
      "https://img.freepik.com/premium-vector/education-logo-design_644408-185.jpg",
  },
  {
    id: 8,
    name: "Sri Vanamali Agro Industries",
    image:
      "https://img.freepik.com/premium-vector/agriculture-logo-design_644408-190.jpg",
  },
];

function OurClients() {
  return (
    <section className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Projects</h2>
        <p className="text-center text-gray-600 mb-12">
          29 Years of Experience Since 1995
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client) => (
            <div key={client.id} className="flex flex-col items-center">
              <div className="relative group w-full flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-4">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {client.name}
                  </h3>
                  {client.description && (
                    <p className="text-sm text-gray-600">
                      {client.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurClients;
