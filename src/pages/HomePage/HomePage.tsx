import React from "react";
import styles from "./HomePage.module.scss";
import { title } from "process";

// interface HomePageProps {}

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.banner}>
        <div className={styles.banner__text}>
          <p className={styles.title}>Offer products to make your interior <span>Minimalist.</span></p>
          <p>we have helped more than 1000+ people to give perfect comfort to the interior of their home</p>
          <button>Find Product</button> 
        </div>
      </div>
      <div>
        <div>
          <img src="" alt="carousel_image"/>
        </div>
        <div>
          <img src="" alt="carousel_image"/>
        </div>
        <div>
          <img src="" alt="carousel_image"/>
        </div>
      </div>
      <div>
      <div>
                <div className="circle another-color"></div>
              </div>
              <div>
                <div className="circle"></div>
              </div>
              <div>
                <div className="circle"></div>
              </div>
      </div>
    </div>
  );
};

export default HomePage;
