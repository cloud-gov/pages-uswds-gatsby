import React from 'react';
import PropTypes from 'prop-types';
import { skipnav } from 'uswds_components';
import UswdsComponent from './uswds_component';

const propTypes = {
  className: PropTypes.string,
  skipsTo: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const defaultProps = {
  children: 'Skip to main content',
};

const SkipNav = ({ className, skipsTo, children }) => {
  const render = ref => (
    <a className={`usa-skipnav ${className}`} href={`#${skipsTo}`} ref={ref}>
      {children}
    </a>
  );

  return <UswdsComponent uswdsComponent={skipnav} render={render} />;
};

SkipNav.propTypes = propTypes;
SkipNav.defaultProps = defaultProps;

export default SkipNav;
