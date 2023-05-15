import React from 'react';
import styles from './ShoppingCart.module.scss';

interface ShoppingCartProps {}

const ShoppingCart = ({}: ShoppingCartProps) => (
  <div className={styles.shoppingCart}>
    ShoppingCart
  </div>
);

export default ShoppingCart;
