import React from 'react';
import styles from './Product.module.scss';

interface ProductProps {}

const Product = ({}: ProductProps) => (
  <div className={styles.product}>
    Product
  </div>
);

export default Product;
