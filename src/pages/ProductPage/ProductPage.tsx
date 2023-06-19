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
          <h1>{data?.title || "product-title"}</h1>
          <p>{data?.brand || "product-brand"}</p>
          <p>{data?.category || "product-category"}</p>
          <p>{data?.description || "product-description"}</p>
          <p>{data?.discountPercentage || "product-discount-percentage"}</p>
          <p>{data?.price || "product-price"}</p>
          <p>{data?.rating || "product-rating"}</p>
          <p>{data?.stock || "product-stock"}</p>
          <p>{data?.thumbnail || "product-thumbnail"}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ProductPage;
