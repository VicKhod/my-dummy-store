import React from "react";
import { Link } from "react-router-dom";
import styles from "./CatalogPage.module.scss";
import Product from "../../components/Product/Product";
import { useGetProductsQuery } from "../../services/api";

interface CatalogPageProps {}

const CatalogPage = ({}: CatalogPageProps) => {
  const { data = [], isLoading } = useGetProductsQuery([]);
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.catalogPage}>
      <div>
        {Object.keys(data.products).map((key, index) => {
          return (
            <div className={styles.catalogPage__item} key={index}>
              <Link to={`/product/${index}`} key={key}>
                <Product product={data.products[key]} /> 
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CatalogPage;
