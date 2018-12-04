import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { search } from 'uswds_components';
import UswdsComponent from './uswds_component';

const propTypes = {
  big: PropTypes.bool,
  className: PropTypes.string,
  small: PropTypes.bool,
  srText: PropTypes.string,
};

const defaultProps = {
  srText: 'Search',
};

const fieldName = 'extended-search-field-small'; // should generate something page-unique

const Search = ({ big, className, small, srText }) => {
  const classNames = cx(
    'usa-search',
    { 'usa-search-small': small, 'usa-search-big': big },
    className
  );

  const render = ref => (
    <form className={classNames} ref={ref}>
      <div role="search">
        <label className="usa-sr-only" htmlFor={fieldName}>
          {srText}
        </label>
        <input
          className="usa-input"
          id={fieldName}
          type="search"
          name="search"
        />
        <button className="usa-button" type="submit">
          <span className="usa-sr-only">{srText}</span>
        </button>
      </div>
    </form>
  );

  return <UswdsComponent uswdsComponent={search} render={render} />;
};

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
