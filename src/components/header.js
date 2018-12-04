import React from 'react';
import close from 'uswds_images/close.svg';
import {
  Accordion,
  AccordionButton,
  AccordionContent,
  Navigation,
  Search,
} from 'uswds-react';

const Header = () => (
  <header className="usa-header usa-header-extended" role="banner">
    <div className="usa-navbar">
      <div className="usa-logo" id="extended-logo">
        <em className="usa-logo-text">
          <a href="/" title="Home" aria-label="Home">
            Project title
          </a>
        </em>
      </div>
      <button className="usa-menu-btn">Menu</button>
    </div>

    <Navigation>
      <div className="usa-nav-inner">
        <button className="usa-nav-close">
          <img src={close} alt="close" />
        </button>
        <Accordion className="usa-nav-primary" tag="ul">
          <li className="usa-nav-primary-item">
            <AccordionButton
              className="usa-nav-link usa-current"
              controls="extended-nav-section-one"
            >
              <span>Current section</span>
            </AccordionButton>
            <AccordionContent
              id="extended-nav-section-one"
              tag="ul"
              className="usa-nav-submenu"
            >
              <li className="usa-nav-submenu-item">
                <a href="/">Navigation link</a>
              </li>
              <li className="usa-nav-submenu-item">
                <a href="/">Navigation link</a>
              </li>
              <li className="usa-nav-submenu-item">
                <a href="/">Navigation link</a>
              </li>
            </AccordionContent>
          </li>
          <li className="usa-nav-primary-item">
            <AccordionButton
              className="usa-nav-link"
              controls="extended-nav-section-two"
            >
              <span>Section</span>
            </AccordionButton>
            <AccordionContent
              id="extended-nav-section-two"
              tag="ul"
              className="usa-nav-submenu"
            >
              <li className="usa-nav-submenu-item">
                <a href="/">Navigation link</a>
              </li>
              <li className="usa-nav-submenu-item">
                <a href="/">Navigation link</a>
              </li>
              <li className="usa-nav-submenu-item">
                <a href="/">Navigation link</a>
              </li>
            </AccordionContent>
          </li>
          <li className="usa-nav-primary-item">
            <a className="usa-nav-link" href="/">
              <span>Simple link</span>
            </a>
          </li>
        </Accordion>
        <div className="usa-nav-secondary">
          <ul className="usa-nav-secondary-links">
            <li className="usa-nav-secondary-item">
              <a href="/">Secondary link</a>
            </li>
            <li className="usa-nav-secondary-item">
              <a href="/">Another secondary link</a>
            </li>
          </ul>
          <Search small />
        </div>
      </div>
    </Navigation>
  </header>
);

export default Header;
