import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { banner } from 'uswds_components';
import flag from 'uswds_images/favicons/favicon-57.png';
import dotGov from 'uswds_images/icon-dot-gov.svg';
import https from 'uswds_images/icon-https.svg';
import UswdsComponent from './uswds_component';
import Accordion from './accordion';
import AccordionButton from './accordion-button';
import AccordionContent from './accordion-content';

const propTypes = {
  className: PropTypes.string,
};

const Banner = ({ className }) => {
  const render = ref => (
    <div className={cx('usa-banner', className)} ref={ref}>
      <Accordion>
        <header className="usa-banner-header">
          <div className="usa-banner-inner">
            <div className="grid-col-auto">
              <img
                className="usa-banner-header-flag"
                src={flag}
                alt="U.S. flag"
              />
            </div>
            <div className="grid-col-fill tablet:grid-col-auto">
              <p className="usa-banner-header-text">
                An official website of the United States government
              </p>
              <p className="usa-banner-header-action" aria-hidden="true">
                Here’s how you know
              </p>
            </div>
            <AccordionButton
              controls="gov-banner"
              className="usa-banner-button"
            >
              <span className="usa-banner-button-text">
                Here's how you know
              </span>
            </AccordionButton>
          </div>
        </header>
        <AccordionContent id="gov-banner" className="usa-banner-content">
          <div className="grid-row grid-gap-lg">
            <div className="usa-banner-guidance-gov tablet:grid-col-6">
              <img
                className="usa-banner-icon usa-media_block-img"
                src={dotGov}
                alt="Dot gov"
              />
              <div className="usa-media_block-body">
                <p>
                  <strong>The .gov means it’s official.</strong>
                  <br />
                  Federal government websites often end in .gov or .mil. Before
                  sharing sensitive information, make sure you’re on a federal
                  government site.
                </p>
              </div>
            </div>
            <div className="usa-banner-guidance-ssl tablet:grid-col-6">
              <img
                className="usa-banner-icon usa-media_block-img"
                src={https}
                alt="Https"
              />
              <div className="usa-media_block-body">
                <p>
                  <strong>The site is secure.</strong>
                  <br />
                  The <strong>https://</strong> ensures that you are connecting
                  to the official website and that any information you provide
                  is encrypted and transmitted securely.
                </p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </Accordion>
    </div>
  );

  return <UswdsComponent uswdsComponent={banner} render={render} />;
};

Banner.propTypes = propTypes;

export default Banner;
