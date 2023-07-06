import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import search from 'uswds/img/usa-icons-bg/search--white.svg';

const SearchForm = ({ navigation, secondaryLinks }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          pathPrefix
          siteMetadata {
            searchgov {
              affiliate
              endpoint
            }
          }
        }
      }
    `
  );
  const { affiliate, endpoint } = site.siteMetadata.searchgov;

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.currentTarget.query.value;
    window.location.replace(
      `${endpoint}/search?utf8=✓&affiliate=${affiliate}&query=${query}`
    );
  };

  return (
    <form className="usa-search usa-search--small" onSubmit={handleSubmit}>
      <div role="search">
        <label className="usa-sr-only" htmlFor="extended-search-field-small">
          Search small
        </label>
        <input
          className="usa-input usagov-search-autocomplete"
          id="extended-search-field-small"
          type="search"
          name="query"
          autoComplete="off"
        />
        <button className="usa-button" type="submit">
          <img src={search} className="usa-search__submit-icon" alt="Search" />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
