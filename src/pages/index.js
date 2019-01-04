import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import chunk from 'lodash/fp/chunk';
import circle from 'uswds_images/circle-124.png';
import Layout from '../components/layout';

const Index = ({ data }) => {
  const { callout, media, section, tagline } = data.dataYaml;
  return (
    <Layout>
      <section className="usa-hero">
        <Img
          fluid={data.file.childImageSharp.fluid}
          className="usa-hero-image"
          fadeIn={false}
        />
        <div className="grid-container">
          <div className="usa-hero-callout">
            <h2 className="usa-hero-heading">{callout.title}</h2>
            <p>{callout.text}</p>
            <Link className="usa-button" to={callout.cta.link}>
              {callout.cta.text}
            </Link>
          </div>
        </div>
      </section>

      <section className="grid-container usa-section">
        <div className="usa-width-one-third">
          <h2>{tagline.title}</h2>
        </div>
        <div className="usa-width-two-thirds">
          {tagline.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </section>

      <section className="usa-graphic_list usa-section usa-section-dark">
        <div className="grid-container">
          {chunk(2, media).map((pairs, idx) => (
            <div key={idx} className="usa-graphic_list-row grid-row grid-gap">
              {pairs.map(({ title, text }, idx) => (
                <div key={idx} className="usa-media_block tablet:grid-col">
                  <img
                    className="usa-media_block-img"
                    src={circle}
                    alt="circle"
                  />
                  <div className="usa-media_block-body">
                    <h3 className="usa-graphic_list-heading">{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="usa-section">
        <div className="grid-container">
          <h2 className="font-heading-xl">{section.title}</h2>
          <p className="usa-font-lead">{section.text}</p>
          <Link className="usa-button usa-button-big" to={section.cta.link}>
            {section.cta.text}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    file(relativePath: { eq: "images/hero.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dataYaml(page: { eq: "index" }) {
      callout {
        title
        text
        cta {
          text
          link
        }
      }
      media {
        title
        text
      }
      section {
        title
        text
        cta {
          text
          link
        }
      }
      tagline {
        title
        content
      }
    }
  }
`;

export default Index;
