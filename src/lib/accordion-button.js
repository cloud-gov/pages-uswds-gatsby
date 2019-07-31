import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const propTypes = {
  className: PropTypes.string,
  controls: PropTypes.string.isRequired,
  defaultExpanded: PropTypes.bool,
  children: PropTypes.node,
};

const defaultProps = {
  defaultExpanded: false,
};

const AccordionButton = ({
  className,
  controls,
  defaultExpanded,
  children,
}) => (
  <button
    className={cx('usa-accordion__button', className)}
    aria-expanded={defaultExpanded ? 'true' : 'false'}
    aria-controls={controls}
  >
    {children}
  </button>
);

AccordionButton.propTypes = propTypes;
AccordionButton.defaultProps = defaultProps;

export default AccordionButton;
