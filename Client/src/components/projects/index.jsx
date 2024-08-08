import React from 'react';
import projectimage2 from "../../images/projects/marquee-2.jpeg";
import projectimage1 from "../../images/projects/marquee-1.jpeg";
import projectimage3 from "../../images/projects/marquee-3.jpeg";

const projects = [
  {
    id: 1,
    image: projectimage1,
    endDate: "August 31, 2024",
    title: "Water Resource Management in Nyanza",
    description: "This project focuses on sustainable water resource management to support agriculture and local communities in the Nyanza region. The initiative aims to ensure clean and reliable water supply through innovative technologies and conservation efforts.",
    location: "Kisumu, Nyanza",
  },
  {
    id: 2,
    image: projectimage2,
    endDate: "December 15, 2023",
    title: "Agroforestry Development in Migori",
    description: "A project aimed at enhancing agricultural productivity and environmental sustainability through agroforestry practices. This initiative supports local farmers in Migori by providing resources and training on integrating trees into their farming systems.",
    location: "Migori, Nyanza",
  },
  {
    id: 3,
    image: projectimage3,
    endDate: "March 10, 2025",
    title: "Fisheries Enhancement in Lake Victoria",
    description: "An initiative to improve the livelihoods of communities around Lake Victoria by enhancing fishery practices. The project promotes sustainable fishing methods, better fish processing facilities, and market access for local fishermen.",
    location: "Homa Bay, Nyanza",
  },
];

const index = () => {
  return (
    <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
      <div className="mb-12 text-left md:text-center">
        <h2 className="mb-2 text-xl font-extrabold leading-tight text-green-900">Our Ongoing Projects</h2>
        <p className="text-sm text-gray-500">
          Discover our key initiatives aimed at sustainable development in the Lake Victoria Basin, focusing on socio-economic growth and environmental conservation.
        </p>
      </div>
      <div className="flex flex-col space-y-12 divide-y divide-gray-200">
        {projects.map((project) => (
          <div key={project.id}>
            <p className="pt-12 mb-3 text-sm font-normal text-gray-500">Projected end date: {project.endDate}</p>
            <h2 className="mb-2 text-[16px] font-extrabold leading-snug tracking-tight text-gray-800 md:text-2xl">
              <a href="#" className="text-gray-900 hover:text-green-700">{project.title}</a>
            </h2>
            <p className="mb-4 text-base font-normal text-gray-600">
              {project.description}
            </p>
            <p className="mb-4 text-sm font-normal text-gray-600">Location: {project.location}</p>
            <a href="#" className="btn btn-light btn-sm">Continue Reading</a>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center pt-12 mt-12 space-x-0 space-y-2 border-t border-gray-200 md:space-x-2 md:space-y-0 md:flex-row">
        <a href="#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">View all</a>
      </div>
    </section>
  );
}

export default index;
