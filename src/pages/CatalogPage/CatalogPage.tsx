import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./CatalogPage.module.scss";
import Product from "../../components/Product/Product";

interface CatalogPageProps {}

const CatalogPage = ({}: CatalogPageProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.catalogPage}>
      <div>
        {/* {Object.keys(data.products).map((key, index) => {
          return (
            <div className={styles.catalogPage__item} key={index}>
              <Link to={`/product/${key}`} key={key}>
                <Product product={data.products[key]} /> 
              </Link>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default CatalogPage;
