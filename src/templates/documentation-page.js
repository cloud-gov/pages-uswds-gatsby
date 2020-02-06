import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sidenav from '../components/sidenav';

/*
  This template is for a single page that does not have a date associated with it. For example, an about page.
*/

const DocumentationPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="usa-layout-docs usa-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            {frontmatter.sidenav && <Sidenav />}

            <div
              className="usa-layout-docs__main desktop:grid-col-9 usa-prose"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(
      fields: { sourceName: { eq: "documentation-pages" } }
      frontmatter: { path: { eq: $path } }
    ) {
      html
      frontmatter {
        title
        sidenav
      }
    }
  }
`;

export default DocumentationPage;
