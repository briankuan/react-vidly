import React from 'react';
import _ from 'lodash';

const Pagination = props => {
  const { pageSize, itemsCount } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);
  return (
    <ul className="pagination">
      {pages.map(page => (
        <li key={page} className="page-item">
          <a className="page-link" href="http://#">
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
