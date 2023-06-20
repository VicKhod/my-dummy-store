import React from "react";
import styles from "./ShoppingCart.module.scss";
import { useGetAllCartsQuery } from "../../services/api";
import ProductCard from "./ProductCard";

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
  products: ICartProduct[];
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
                <div key={key}>
                  <h2>user {data.carts[index].userId} Shopping Cart</h2>
                  <div>Всего {data.carts[index].total}</div>
                  <div>
                    {data.carts[index].products.map((product) => (
                      <ProductCard key={product.id} product={{...product}}/>
                    ))}
                  </div>
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
