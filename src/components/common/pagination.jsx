import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = props => {
  const { pageSize, itemsCount, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <ul className="pagination">
      {pages.map(page => (
        <li
          key={page}
          className={page === currentPage ? 'page-item active' : 'page-item'}
        >
          <a
            style={{ cursor: 'pointer' }}
            className="page-link"
            onClick={() => onPageChange(page)}
          >
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
