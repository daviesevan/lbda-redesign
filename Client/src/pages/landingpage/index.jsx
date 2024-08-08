import React from 'react';
import Landing from '../../components/hero';
import Faq from '../../components/faqs'
import BlogList from '../../components/bloglist'
import AboutLbda from '../../components/about'
import OurProjects from '../../components/projects'
const index = () => {
  return (
    <>
      <Landing />
      <AboutLbda />
      <OurProjects />
      <BlogList />
      <Faq />
    </>
  );
};

export default index;
