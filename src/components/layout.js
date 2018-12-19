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
            header {
              navigation {
                title
                items {
                  text
                  link
                }
              }
              secondaryLinks {
                text
                link
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <SkipNav skipsTo={mainContent} />
        <Banner />
        <div className="usa-overlay" />
        <Header {...data.site.siteMetadata} />
        <main id={mainContent}>{children}</main>
      </div>
    )}
  />
);

export default Layout;
