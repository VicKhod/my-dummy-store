import React from 'react';
import styles from './ProductCard.module.scss';

interface ProductCardProps {}

const ProductCard = ({}: ProductCardProps) => {
  return (
    <div className={styles.productCard}>
      ProductCard
    </div>
  )
};

export default ProductCard;
