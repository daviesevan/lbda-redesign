import React from 'react';
import blogimage1 from "../../images/blogs/marquee-1.jpeg";
import blogimage2 from "../../images/blogs/marquee-2.jpeg";
import blogimage3 from "../../images/blogs/marquee-3.jpeg";
import blogimage4 from "../../images/blogs/marquee-4.jpeg";
import blogimage6 from "../../images/blogs/marquee-6.jpeg";
import Button from '../../commons/button'
const blogs = [
  {
    image: blogimage1,
    title: "The Impact of Sustainable Agriculture on Lake Basin Ecosystems",
    subtitle:
      "Learn how sustainable agricultural practices are preserving the Lake Basin's delicate ecosystems and supporting local communities.",
    date: "August 8, 2024",
    author: "Davies Evan",
  },
  {
    image: blogimage2,
    title: "Innovations in Water Management: LBDA's Approach",
    subtitle:
      "Discover the innovative water management techniques being implemented by the Lake Basin Development Authority to combat water scarcity.",
    date: "July 25, 2024",
    author: "Benta Joy",
  },
  {
    image: blogimage3,
    title: "Empowering Local Communities Through Livelihood Projects",
    subtitle:
      "Explore the various livelihood projects initiated by LBDA to empower local communities and foster sustainable development.",
    date: "July 10, 2024",
    author: "Daniel Sam",
  },
];

const index = () => {
  return (
    <section className="px-4 py-24 mx-auto max-w-full bg-blue-50">
      <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900">Our Blogs</h2>
      <p className="mb-20 text-lg text-gray-500">
        Insights and updates from the Lake Basin Development Authority.
      </p>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {blogs.map((blog, index) => (
          <div key={index}>
            <a href="#">
              <img
                src={blog.image}
                className="object-cover w-full h-56 mb-5 bg-center rounded"
                alt={blog.title}
                loading="lazy"
              />
            </a>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              <a href="#" className="text-gray-900 hover:text-green-700">
                {blog.title}
              </a>
            </h2>
            <p className="mb-3 text-sm font-normal text-gray-500">
              {blog.subtitle}
            </p>
            <p className="mb-3 text-sm font-normal text-gray-500">
              <a href="#" className="font-medium text-gray-900 hover:text-green-700">
                {blog.author}
              </a>{" "}
              • {blog.date}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
        <a href="#" className="w-full btn btn-light btn-xl md:w-auto hover:text-green-700">View all</a>
      </div>
    </section>
  );
};

export default index;
