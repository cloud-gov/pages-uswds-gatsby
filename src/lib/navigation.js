import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const Navigation = ({ className, children }) => (
  <nav role="navigation" className={cx('usa-nav', className)}>
    {children}
  </nav>
);

Navigation.propTypes = propTypes;

export default Navigation;
