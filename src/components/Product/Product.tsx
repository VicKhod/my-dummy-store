import React from 'react';
import styles from './Product.module.scss';

export interface IProduct {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: [ string ]
}

const Product = () => {
  

  return (
    <div className={styles.product}>
      Product
    </div>
  )
};

export default Product;
