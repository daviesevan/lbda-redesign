import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import 'remixicon/fonts/remixicon.css';
import logo from '../../../images/hero/logo_lbda.png'

const Index = () => {
  useEffect(() => {
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);

      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('show-menu');
          toggle.classList.toggle('show-icon');
        });
      }
    };

    showMenu('nav-toggle', 'nav-menu');

    const dropdownItems = document.querySelectorAll('.dropdown__item');

    dropdownItems.forEach((item) => {
      const dropdownButton = item.querySelector('.dropdown__button');

      dropdownButton.addEventListener('click', () => {
        const showDropdown = document.querySelector('.show-dropdown');
        toggleItem(item);

        if (showDropdown && showDropdown !== item) {
          toggleItem(showDropdown);
        }
      });
    });

    const toggleItem = (item) => {
      const dropdownContainer = item.querySelector('.dropdown__container');

      if (item.classList.contains('show-dropdown')) {
        dropdownContainer.removeAttribute('style');
        item.classList.remove('show-dropdown');
      } else {
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
        item.classList.add('show-dropdown');
      }
    };

    const mediaQuery = matchMedia('(min-width: 1118px)');
    const dropdownContainers = document.querySelectorAll(
      '.dropdown__container'
    );

    const removeStyle = () => {
      if (mediaQuery.matches) {
        dropdownContainers.forEach((e) => {
          e.removeAttribute('style');
        });

        dropdownItems.forEach((e) => {
          e.classList.remove('show-dropdown');
        });
      }
    };

    addEventListener('resize', removeStyle);
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <a href="#" className="nav__logo">
            <img src={logo} className="w-16 h-16" />
          </a>

          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-line nav__toggle-menu"></i>
            <i className="ri-close-line nav__toggle-close"></i>
          </div>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li>
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>

            <li className="dropdown__item">
              <div className="nav__link dropdown__button">
                About Us <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>
              <div className="dropdown__container">
                <div className="dropdown__content">
                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i className="ri-information-line"></i>
                    </div>
                    <span className="dropdown__title">About Us</span>
                    <ul className="dropdown__list">
                      <li>
                        <Link to="/about/background" className="dropdown__link">
                          Background
                        </Link>
                      </li>
                      <li>
                        <Link to="/about/jurisdiction" className="dropdown__link">
                          Area of Jurisdiction
                        </Link>
                      </li>
                      <li>
                        <Link to="/about/structure" className="dropdown__link">
                          Organizational Structure
                        </Link>
                      </li>
                      <li>
                        <Link to="/about/quality" className="dropdown__link">
                          Quality Policy Statement
                        </Link>
                      </li>
                      <li>
                        <Link to="/about/charter" className="dropdown__link">
                          Service Charter Board
                        </Link>
                      </li>
                      <li>
                        <Link to="/about/leadership" className="dropdown__link">
                          Leadership Team
                        </Link>
                      </li>
                      <li>
                        <Link to="/about/history" className="dropdown__link">
                          History and Milestones
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="dropdown__item">
              <div className="nav__link dropdown__button">
                Products & Services <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>
              <div className="dropdown__container">
                <div className="dropdown__content">
                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i className="ri-apps-2-line"></i>
                    </div>
                    <span className="dropdown__title">Products & Services</span>
                    <ul className="dropdown__list">
                      <li>
                        <Link to="/products" className="dropdown__link">
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" className="dropdown__link">
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/innovations" className="dropdown__link">
                          Innovations
                        </Link>
                      </li>
                      <li>
                        <Link to="/success-stories" className="dropdown__link">
                          Success Stories
                        </Link>
                      </li>
                      <li>
                        <Link to="/testimonials" className="dropdown__link">
                          Client Testimonials
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="dropdown__item">
              <div className="nav__link dropdown__button">
                Projects <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>
              <div className="dropdown__container">
                <div className="dropdown__content">
                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i className="ri-building-line"></i>
                    </div>
                    <span className="dropdown__title">Projects</span>
                    <ul className="dropdown__list">
                      <li>
                        <Link to="/projects/planned" className="dropdown__link">
                          Planned Projects
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/ongoing" className="dropdown__link">
                          Ongoing Projects
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/completed" className="dropdown__link">
                          Completed Projects
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/proposed" className="dropdown__link">
                          Proposed Projects
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/concepts" className="dropdown__link">
                          Project Concept Proposals
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/impact" className="dropdown__link">
                          Project Impact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="dropdown__item">
              <div className="nav__link dropdown__button">
                Company <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>
              <div className="dropdown__container">
                <div className="dropdown__content">
                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i className="ri-building-2-line"></i>
                    </div>
                    <span className="dropdown__title">Company</span>
                    <ul className="dropdown__list">
                      <li>
                        <Link to="/company/staff-portal" className="dropdown__link">
                          Staff Portal
                        </Link>
                      </li>
                      <li>
                        <Link to="/company/careers" className="dropdown__link">
                          Careers
                        </Link>
                      </li>
                      <li>
                        <Link to="/company/csr" className="dropdown__link">
                          Corporate Social Responsibility (CSR)
                        </Link>
                      </li>
                      <li>
                        <Link to="/company/partners" className="dropdown__link">
                          Partners
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="dropdown__item">
              <div className="nav__link dropdown__button">
                Tenders <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>
              <div className="dropdown__container">
                <div className="dropdown__content">
                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i className="ri-file-list-2-line"></i>
                    </div>
                    <span className="dropdown__title">Tenders</span>
                    <ul className="dropdown__list">
                      <li>
                        <Link to="/tenders/notices" className="dropdown__link">
                          Tender Notices
                        </Link>
                      </li>
                      <li>
                        <Link to="/tenders/awarded" className="dropdown__link">
                          Awarded Tenders
                        </Link>
                      </li>
                      <li>
                        <Link to="/tenders/documents" className="dropdown__link">
                          Tender Documents
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link to="/contact" className="nav__link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Index;
