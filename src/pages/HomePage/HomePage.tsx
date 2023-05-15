import React from "react";
import styles from "./HomePage.module.scss";
import { useGetProductsQuery } from "../../services/api";

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  const { data = [], isLoading } = useGetProductsQuery([]);
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.homePage}>
      <div>
        {Object.keys(data.products).map((key, index) => {
          return (
            <li key={index}>
              {key}: {data[key]}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
