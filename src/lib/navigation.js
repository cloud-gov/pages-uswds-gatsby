import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { navigation } from 'uswds_components';
import UswdsComponent from './uswds_component';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const Navigation = ({ className, children }) => {
  const render = ref => (
    <nav role="navigation" className={cx('usa-nav', className)} ref={ref}>
      {children}
    </nav>
  );

  return <UswdsComponent uswdsComponent={navigation} render={render} />;
};

Navigation.propTypes = propTypes;

export default Navigation;
