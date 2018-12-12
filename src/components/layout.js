import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Banner, SkipNav } from 'uswds-react';
import './layout.css';
import Header from './header';

const mainContent = 'main-content';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <SkipNav skipsTo={mainContent} />
        <Banner />
        <div className="usa-overlay" />
        <Header title={data.site.siteMetadata.title} />
        <main id={mainContent}>{children}</main>
      </div>
    )}
  />
);

export default Layout;
