import React from 'react';
import { Banner, SkipNav } from 'uswds-react';
import './layout.css';
import Header from './header';

const mainContent = 'main-content';

const Layout = ({ children }) => (
  <div>
    <SkipNav skipsTo={mainContent} />
    <Banner />
    <div className="usa-overlay" />
    <Header />
    <main id={mainContent}>{children}</main>
  </div>
);

export default Layout;
