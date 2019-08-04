import React from 'react';
import { connect } from 'react-redux';

import { paginationActions, paginationSelectors } from '../../redux/pagination';

import styles from './Pagination.module.css';

const Pagination = ({ prev, next, currentPage = 1, maxPage }) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.btn}
        type="button"
        disabled={currentPage <= 1}
        onClick={prev}
      >
        Prev
      </button>
      <span className={styles.pageNumber}>{currentPage}</span>
      <button
        className={styles.btn}
        type="button"
        disabled={currentPage >= maxPage}
        onClick={next}
      >
        Next
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  currentPage: paginationSelectors.getCurrentPage(state),
  maxPage: paginationSelectors.getMaxPage(state),
});

const mapDispatchToProp = {
  prev: paginationActions.paginationPrev,
  next: paginationActions.paginationNext,
};

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(Pagination);
