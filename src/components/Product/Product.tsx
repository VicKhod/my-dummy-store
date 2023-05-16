import { useEffect, useState } from "react";
import styles from "./Product.module.scss";
import { useGetProductQuery } from "../../services/api";
import { useParams } from "react-router-dom";

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

const Product: React.FC<{product: IProduct}> = ({product}) => {
  const productImg = {
    backgroundImage: `url(${product.images[0]})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#fff",
    marginBottom: "20px"
};

  return (
    <div className={styles.productWrapper}>
      <div className={styles.productImg} style={productImg}></div>
      <div className={styles.productTitle}>{product.title}</div>
      <div className={styles.productPrice}>{product.price}</div>
    </div>
  );
};

export default Product;
