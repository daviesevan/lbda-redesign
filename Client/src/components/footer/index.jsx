import React from 'react';
import { Link } from 'react-router-dom';
import getYear from './date';
import logo from '../../images/hero/logo_lbda.png';
import 'remixicon/fonts/remixicon.css';

const Footer = () => {
  const year = getYear();
  return (
    <>
      <footer className="px-4 py-20 text-black bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 mb-3 md:grid-cols-5">
            <Link
              to="/"
              title="Go to LBDA Home Page"
              className="col-span-2 mb-12 md:col-span-1"
            >
              <img src={logo} className="w-12 h-12 sm:w-16 sm:h-16" />
            </Link>
            <nav className="mb-8">
              <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">
                Company
              </p>
              <Link
                to="/about"
                className="flex items-center mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
              >
                <i className="ri-information-line mr-2"></i>
                About Us
              </Link>
              <Link
                to="/projects"
                className="flex items-center mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
              >
                <i className="ri-building-line mr-2"></i>
                Projects
              </Link>
              <Link
                to="/services"
                className="flex items-center mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
              >
                <i className="ri-apps-2-line mr-2"></i>
                Services
              </Link>
              <Link
                to="/expertise"
                className="flex items-center mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
              >
                <i className="ri-lightbulb-line mr-2"></i>
                Expertise
              </Link>
            </nav>
            <nav className="mb-8">
              <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">
                Resources
              </p>
              <Link
                to="/news"
                className="flex items-center mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
              >
                <i className="ri-newspaper-line mr-2"></i>
                News & Events
              </Link>
              <Link
                to="/gallery"
                className="flex items-center mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
              >
                <i className="ri-image-line mr-2"></i>
                Gallery
              </Link>
            </nav>
            <nav className="mb-8">
              <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">
                Legal
              </p>
              <Link
                to="/terms"
                className="flex items-center mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
              >
                <i className="ri-file-text-line mr-2"></i>
                Terms of Service
              </Link>
              <Link
                to="/privacy"
                className="flex items-center mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
              >
                <i className="ri-shield-user-line mr-2"></i>
                Privacy Policy
              </Link>
              <Link
                to="/cookie-policy"
                className="flex items-center mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
              >
                <i className="ri-cookie-line mr-2"></i>
                Cookie Policy
              </Link>
            </nav>
            <nav className="mb-8">
              <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">
                Contact
              </p>
              <Link
                to="/contact"
                className="flex items-center mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
              >
                <i className="ri-mail-line mr-2"></i>
                Contact Us
              </Link>
              <Link
                to="#"
                className="flex items-center mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
              >
                <i className="ri-twitter-line mr-2"></i>
                Twitter
              </Link>
              <Link
                to="#"
                className="flex items-center mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
              >
                <i className="ri-instagram-line mr-2"></i>
                Instagram
              </Link>
              <Link
                to="#"
                className="flex items-center mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
              >
                <i className="ri-mail-open-line mr-2"></i>
                Email
              </Link>
            </nav>
          </div>
          <p className="text-sm font-medium text-left text-gray-600 md:text-center">
            © Copyright {year} Lake Basin Development Authority. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
