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
          className="usa-hero__image"
          fadeIn={false}
        />
        <div className="grid-container">
          <div className="usa-hero__callout">
            <h2 className="usa-hero__heading">{callout.title}</h2>
            <p>{callout.text}</p>
            <Link className="usa-button" to={callout.cta.link}>
              {callout.cta.text}
            </Link>
          </div>
        </div>
      </section>

      <section className="grid-container usa-section">
        <div className="grid-row grid-gap">
          <div className="tablet:grid-col-4">
            <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">{tagline.title}</h2>
          </div>
          <div className="tablet:grid-col-8 usa-prose">
            {tagline.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="usa-graphic-list usa-section usa-section--dark">
        <div className="grid-container">
          {chunk(2, media).map((pairs, idx) => (
            <div key={idx} className="usa-graphic-list__row grid-row grid-gap">
              {pairs.map(({ title, text }, idx) => (
                <div key={idx} className="usa-media-block tablet:grid-col">
                  <img
                    className="usa-media-block__img"
                    src={circle}
                    alt="circle"
                  />
                  <div className="usa-media-block__body">
                    <h3 className="usa-graphic-list__heading">{title}</h3>
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
          <h2 className="font-heading-xl margin-y-0">{section.title}</h2>
          <p className="usa-intro">{section.text}</p>
          <Link className="usa-button usa-button--big" to={section.cta.link}>
            {section.cta.text}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    file(base: { eq: "hero.png" }) {
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
