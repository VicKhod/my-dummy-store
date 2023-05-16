import React from 'react';
import styles from './CatalogPage.module.scss';
import { useGetProductsQuery } from '../../services/api';
import Product from '../../components/Product/Product';

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
              <Product product={data.products[key]}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CatalogPage;
