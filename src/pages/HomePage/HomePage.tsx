import React from 'react';
import styles from './HomePage.module.scss';
import { useGetProductsQuery } from '../../services/api';

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  const {data= [], isLoading} = useGetProductsQuery([]);
  if (isLoading) return (<div>Loading...</div>)

  const products = for (let item in data) {
    return (<li key={item.id}>
        {item.name}
      </li>
    )
  }


  return (
    <div className={styles.homePage}>
      <div>
        
      </div>
  </div>
  )
};

export default HomePage;
