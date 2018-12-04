import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  defaultHidden: PropTypes.bool,
  tag: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  defaultHidden: true,
  tag: 'div',
};

const AccordionContent = ({ className, id, defaultHidden, tag, children }) =>
  React.createElement(
    tag,
    {
      className: cx('usa-accordion-content', className),
      id: id,
      hidden: defaultHidden,
    },
    children
  );

AccordionContent.propTypes = propTypes;
AccordionContent.defaultProps = defaultProps;

export default AccordionContent;
