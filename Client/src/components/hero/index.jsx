import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import Button from '../../commons/button'

// Image imports
import landing from '../../images/hero/landing.jpeg'
import marquee1 from '../../images/hero/marquee-1.jpeg'
import marquee2 from '../../images/hero/marquee-2.jpeg'
import marquee3 from '../../images/hero/marquee-3.jpeg'
import marquee4 from '../../images/hero/marquee-4.jpeg'

const Index = () => {
  const data = {
    Hero: {
      heroImage: landing,
      heading: 'The Lake Basin Development Authority.',
      tagline: 'Driving Sustainable Development in the Lake Victoria Basin',
    },
    Content: {
      heading: 'History',
      tagline: 'Established on 31st August 1979',
      excerpt:
        'The Lake Basin Development Authority (LBDA) is a national government development agency that was established by an Act of Parliament (Cap 442) on the 31st of August 1979 to provide an avenue for a quicker, more meaningful and coordinated development in the Kenyan portion of the Lake Victoria basin...',
    },
    Expertises: [
      {
        heading: 'Sustainable Development',
        url: marquee1,
      },
      {
        heading: 'Resource Management',
        url: marquee2,
      },
    ],
    Gallery: {
      imageUrls: [
        { url: marquee1 },
        { url: marquee2 },
        { url: marquee3 },
      ],
    },
    SectionImageOverlay: {
      heading: 'Our Vision',
      imageOverlay: landing,
    },
  };

  const { Hero, Content, Expertises, Gallery, SectionImageOverlay } = data;

  return (
    <div
      className="w-full bg-center bg-cover h-[38rem]"
      style={{
        backgroundImage: `url(${Hero.heroImage})`,
      }}
    >
      <div className="flex items-center justify-start w-full h-full bg-gray-900/40 p-8">
        <div className="lg:max-w-lg mt-23">
          <h1 className="text-2xl leading-none font-semibold text-gray-800 dark:text-white lg:text-2xl">
            {Hero.heading}
          </h1>
          <p className="mt-4 text-sm text-white">
            {Hero.tagline}
          </p>
          {/* <button className="px-6 py-3 mt-6 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-emerald-600  hover:bg-emerald-500 focus:outline-none focus:bg-emerald-500">
            Learn More
          </button> */}
          <Button><p>Learn More</p></Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
