import React from 'react';
import Landing from '../../components/hero';
import Faq from '../../components/faqs'
import BlogList from '../../components/bloglist'
import AboutLbda from '../../components/about'
import OurProjects from '../../components/projects'
import Partners from '../../components/partners'
const index = () => {
  return (
    <>
      <Landing />
      <Partners />
      <AboutLbda />
      <OurProjects />
      <BlogList />
      <Faq />
    </>
  );
};

export default index;
