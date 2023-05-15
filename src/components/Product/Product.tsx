import { useEffect, useState } from "react";
import styles from "./Product.module.scss";
import { useGetProductQuery } from "../../services/api";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [string];
}

const Product = () => {
  const product = useGetProductQuery();

  return <div className={styles.product}>Product</div>;
};

export default Product;
