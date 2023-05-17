import React, { useEffect, useState } from "react";
import styles from "./ProductPage.module.scss";
import { useParams } from "react-router-dom";
// import { useGetProductQuery } from "../../services/api";
import { IProduct } from "../../store/slices/productSlice";

interface ProductPageProps {}

const ProductPage = ({}: ProductPageProps) => {
  const { paramsId } = useParams();
  const [id, setId] = useState<string>("");
  // const { data, isLoading, isError, error } = useGetProductQuery(id);
  useEffect(() => {
    console.log();
    if (paramsId) {
      setId(paramsId);
    }
  }, []);

  return (
    <div className={styles.ProductPage}>
      {/* <h1>{data?.title || "Product"}</h1> */}
      {/* <img src={data?.image} alt="Картинка" /> */}
      <p>{id}</p>
      {/* <p>{data?.description || "Нет описания"}</p> */}
      {/* <p>{data?.price || "Нет цены"}</p> */}
    </div>
  );
};

export default ProductPage;
