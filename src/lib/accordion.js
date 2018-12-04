import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { accordion } from 'uswds_components';
import UswdsComponent from './uswds_component';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const Accordion = ({ className, tag, children }) => {
  const render = ref =>
    React.createElement(
      tag,
      { className: cx('usa-accordion', className), ref: ref },
      children
    );

  return <UswdsComponent uswdsComponent={accordion} render={render} />;
};

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

export default Accordion;
