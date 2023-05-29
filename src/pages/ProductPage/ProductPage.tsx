import React, { useEffect, useState } from "react";
import styles from "./ProductPage.module.scss";
import { useParams } from "react-router";
import { useGetProductQuery } from "../../services/api";

interface ProductPageProps {}

const ProductPage = ({}: ProductPageProps) => {
  const { id } = useParams<string>();
  const 

  return (
    <div className={styles.productPage}>
      ProductPage
      <h1>{product.name || "Product"}</h1>
      <p>{id}</p>
    </div>
  );
};

export default ProductPage;
