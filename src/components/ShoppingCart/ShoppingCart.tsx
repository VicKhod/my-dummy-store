import React from "react";
import styles from "./ShoppingCart.module.scss";
import { useGetAllCartsQuery } from "../../services/api";

export interface ICartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
}
export interface ICart {
  id: number;
  products: ICartProduct;
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}
export interface IAllCarts {
  carts: ICart[];
  total: number;
  skip: number;
  limit: number;
}

// interface ShoppingCartProps {}

const ShoppingCart = () => {
  const { data, isLoading } = useGetAllCartsQuery();

  return (
    <div className={styles.shoppingCart}>
      ShoppingCart
      {!isLoading && data !== undefined ? (
        <>
          <div>
            {Object.keys(data?.carts).map((key, index) => {
              return (
                <div className={styles.catalogPage__item} key={key}>
                  <div>{data.carts[index].total}</div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ShoppingCart;
