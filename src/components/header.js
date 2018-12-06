import React from 'react';
import PropTypes from 'prop-types';
import close from 'uswds_images/close.svg';
import {
  Accordion,
  AccordionButton,
  AccordionContent,
  Navigation,
  Search,
  Header as UswdsHeader,
} from 'uswds-react';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const Header = ({ title }) => (
  <UswdsHeader title={title} extended>
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
  </UswdsHeader>
);

Header.propTypes = propTypes;

export default Header;
