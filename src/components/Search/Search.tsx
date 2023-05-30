import React from 'react';
import styles from './Search.module.scss';

interface SearchProps {}

const Search = ({}: SearchProps) => {
  return (
    <div className={styles.search}>
      Search
    </div>
  )
};

export default Search;
