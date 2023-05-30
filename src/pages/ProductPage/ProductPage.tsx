// import React, { useEffect, useState } from "react";
import styles from "./ProductPage.module.scss";
import { useParams } from "react-router";
import { useGetProductQuery } from "../../services/api";

// interface ProductPageProps {}

const ProductPage = () => {
  const { id } = useParams<string>();
  let key
  
  if (id !== undefined) {
    key = +id + 1;
  };
  const { data, isLoading } = useGetProductQuery(String(key));

  return (
    <>
      {!isLoading && data !== undefined ? (
        <div className={styles.productPage}>
          ProductPage
          <img src={data.images[0]} alt="product-pic"/>
          <h1>{data?.title || "Product"}</h1>
          <p>{data?.brand || "Product"}</p>
          <p>{data?.category || "Product"}</p>
          <p>{data?.description || "Product"}</p>
          <p>{data?.discountPercentage || "Product"}</p>
          <p>{data?.price || "Product"}</p>
          <p>{data?.rating || "Product"}</p>
          <p>{data?.stock || "Product"}</p>
          <p>{data?.thumbnail || "Product"}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ProductPage;
