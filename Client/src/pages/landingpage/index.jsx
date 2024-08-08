import React from 'react';
import Landing from '../../components/hero';
import Faq from '../../components/faqs'
import BlogList from '../../components/bloglist'
import AboutLbda from '../../components/about'
const index = () => {
  return (
    <>
      <Landing />
      <AboutLbda />
      <BlogList />
      <Faq />
    </>
  );
};

export default index;
