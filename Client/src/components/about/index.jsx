import React from 'react';

const index = () => {
  return (
    <section className="grid grid-cols-1 gap-20 px-4 py-24 mx-auto max-w-7xl lg:px-16 xl:px-24 md:grid-cols-2 lg:grid-cols-3">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-12 h-12 mb-4 text-green-700"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">
          Our Mission
        </h3>
        <p className="text-sm leading-relaxed text-gray-600">
          At LBDA, our mission is to spearhead sustainable development in the
          Lake Basin region. We aim to enhance the quality of life for our
          communities through strategic investments in agriculture,
          infrastructure, and environmental conservation.
        </p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-12 h-12 mb-4 text-green-700"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          />
        </svg>
        <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">
          Our Vision
        </h3>
        <p className="text-sm leading-relaxed text-gray-600">
          We envision a thriving, resilient Lake Basin region where natural
          resources are harnessed responsibly, and economic opportunities are
          accessible to all. Our goal is to foster a region that exemplifies
          balanced development and environmental stewardship.
        </p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-12 h-12 mb-4 text-green-700"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
          />
        </svg>
        <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">
          Our Mandate
        </h3>
        <p className="text-sm leading-relaxed text-gray-600">
          LBDA is mandated to plan, coordinate, and implement integrated
          development projects within the Lake Basin region. We focus on water
          resources management, agricultural productivity, and infrastructure
          development to drive economic growth and improve livelihoods.
        </p>
      </div>
    </section>
  );
};

export default index;
