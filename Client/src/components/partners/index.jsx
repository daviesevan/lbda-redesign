import React from 'react';
// Import images
import kalro from '../../images/partners/kalro_logo.jpg';
import vision from '../../images/partners/vision_2030.png';
import kenya from '../../images/partners/kenya.png';
import cda from '../../images/partners/cda_logo.jpg';

const Index = () => {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <h1 className="mb-12 text-sm font-bold tracking-wide text-center text-gray-800 uppercase">
        We’re proud to have played a part in these amazing journeys.
      </h1>
      <div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
        <div className="flex items-center justify-center">
          <img src={kalro} alt="KALRO Logo" className="block object-contain h-12" />
        </div>
        <div className="flex items-center justify-center">
          <img src={vision} alt="Vision 2030 Logo" className="block object-contain h-12" />
        </div>
        <div className="flex items-center justify-center">
          <img src={kenya} alt="Kenya Logo" className="block object-contain h-12" />
        </div>
        <div className="flex items-center justify-center">
          <img src={cda} alt="CDA Logo" className="block object-contain h-12" />
        </div>
      </div>
    </section>
  );
};

export default Index;
