import React, { useEffect, useRef } from "react";
import styles from "./CatalogPage.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../components/hooks/store";
import Product from "../../components/Product/Product";
import getAllProducts from "../../store/slices/allProductsSlice";
import { useAppSelector } from "../../store";

interface CatalogPageProps {}

const CatalogPage = ({}: CatalogPageProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const data = useAppSelector((state) => state.allProducts)

  useEffect(() => {
    dispatch(getAllProducts());
    console.log(data)
  }, []);

  return (
    <div className={styles.catalogPage}>
      <div>
        {Object.keys(data.products).map((key, index) => {
          return (
            <div className={styles.catalogPage__item} key={index}>
              <Link to={`/product/${key}`} key={key}>
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
