import React from "react"
import close from "../images/uswds/close.svg"

export default () => (
  <header className="usa-header usa-header-extended" role="banner">
    <div className="usa-navbar">
      <div className="usa-logo" id="extended-logo">
        <em className="usa-logo-text">
          <a href="/" title="Home" aria-label="Home">Project title</a>
        </em>
      </div>
      <button className="usa-menu-btn">Menu</button>
    </div>

    <nav role="navigation" className="usa-nav">
      <div className="usa-nav-inner">
        <button className="usa-nav-close">
          <img src={close} alt="close"/>
        </button>
        <ul className="usa-nav-primary usa-accordion">
          <li className="usa-nav-primary-item">
            <button className="usa-accordion-button usa-nav-link usa-current" aria-expanded="false" aria-controls="extended-nav-section-one">
              <span>Current section</span>
            </button>
            <ul id="extended-nav-section-one" className="usa-nav-submenu">
              <li className="usa-nav-submenu-item">
                <a href="#">Navigation link</a>
              </li>
              <li className="usa-nav-submenu-item">
                <a href="#">Navigation link</a>
              </li>
              <li className="usa-nav-submenu-item">
                <a href="#">Navigation link</a>
              </li>
            </ul>
          </li>
          <li className="usa-nav-primary-item">
            <button className="usa-accordion-button usa-nav-link" aria-expanded="false" aria-controls="extended-nav-section-two">
              <span>Section</span>
            </button>
            <ul id="extended-nav-section-two" className="usa-nav-submenu">
              <li className="usa-nav-submenu-item">
                <a href="#">Navigation link</a>
              </li>
              <li className="usa-nav-submenu-item">
                <a href="#">Navigation link</a>
              </li>
              <li className="usa-nav-submenu-item">
                <a href="#">Navigation link</a>
              </li>
            </ul>
          </li>
          <li className="usa-nav-primary-item">
            <a className="usa-nav-link" href="javascript:void(0)">
              <span>Simple link</span>
            </a>
          </li>
        </ul>
        <div className="usa-nav-secondary">
          <ul className="usa-nav-secondary-links">
            <li className="usa-nav-secondary-item">
              <a href="">Secondary link</a>
            </li>
            <li className="usa-nav-secondary-item">
              <a href="">Another secondary link</a>
            </li>
          </ul>
          <form className="usa-search usa-search-small ">
            <div role="search">
              <label className="usa-sr-only" htmlFor="extended-search-field-small">Search small</label>
              <input className="usa-input" id="extended-search-field-small" type="search" name="search"/>
              <button className="usa-button" type="submit">
                <span className="usa-sr-only">Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </header>
)
