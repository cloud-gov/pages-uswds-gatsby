import React from 'react';
import PropTypes from 'prop-types';
import navigateBefore from 'uswds/img/usa-icons/navigate_before.svg';
import navigateNext from 'uswds/img/usa-icons/navigate_next.svg';
import { Link } from 'gatsby';

function PageLink({ current, pageNumber, path }) {
  const isCurrent = current ? 'usa-current' : '';
  const normalizedPath = path.endsWith('/')
    ? path.substring(0, path.length - 1)
    : path;
  const href =
    pageNumber === 1 ? normalizedPath : `${normalizedPath}/${pageNumber}`;

  return (
    <li className="usa-pagination__item usa-pagination__page-no">
      <Link
        to={href}
        className={`usa-pagination__button ${isCurrent}`}
        aria-label={`Page ${pageNumber}`}
      >
        {pageNumber}
      </Link>
    </li>
  );
}

PageLink.propTypes = {
  current: PropTypes.bool.isRequired,
  pageNumber: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
};

function listCenterPages(currentPage, totalPages) {
  const listOfPages = [];

  for (let x = currentPage - 2; x <= currentPage + 2; x++) {
    if (x <= 1) continue;

    if (x === totalPages) break;

    listOfPages.push(x);
  }

  return listOfPages;
}

function Pagination({ collectionPath, pageContext }) {
  const { humanPageNumber, nextPagePath, numberOfPages, previousPagePath } =
    pageContext;
  const pagesFromStart = humanPageNumber - 1;
  const pagesToEnd = numberOfPages - humanPageNumber;

  return (
    <nav aria-label="Pagination" className="usa-pagination">
      <ul className="usa-pagination__list">
        {previousPagePath && (
          <li className="usa-pagination__item usa-pagination__arrow">
            <Link
              to={previousPagePath}
              className="usa-pagination__link usa-pagination__previous-page"
              aria-label="Previous page"
            >
              <img
                className="usa-icon"
                role="img"
                src={navigateBefore}
                alt="Navigate previous icon"
              />
              <span className="usa-pagination__link-text"> Previous </span>
            </Link>
          </li>
        )}

        <PageLink
          current={humanPageNumber === 1}
          pageNumber={1}
          path={collectionPath}
        />

        {pagesFromStart > 3 && (
          <li
            className="usa-pagination__item usa-pagination__overflow"
            role="presentation"
          >
            <span> … </span>
          </li>
        )}

        {listCenterPages(humanPageNumber, numberOfPages).map((pageNumber) => (
          <PageLink
            key={`page-button-${pageNumber}`}
            current={humanPageNumber === pageNumber}
            pageNumber={pageNumber}
            path={collectionPath}
          />
        ))}

        {pagesToEnd > 3 && (
          <li
            className="usa-pagination__item usa-pagination__overflow"
            role="presentation"
          >
            <span> … </span>
          </li>
        )}

        <PageLink
          current={humanPageNumber === numberOfPages}
          pageNumber={numberOfPages}
          path={collectionPath}
        />
        {nextPagePath && (
          <li className="usa-pagination__item usa-pagination__arrow">
            <Link
              to={nextPagePath}
              className="usa-pagination__link usa-pagination__next-page"
              aria-label="Next page"
            >
              <span className="usa-pagination__link-text"> Next </span>
              <img
                className="usa-icon"
                role="img"
                src={navigateNext}
                alt="Navigate next icon"
              />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  collectionPath: PropTypes.string.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default Pagination;
