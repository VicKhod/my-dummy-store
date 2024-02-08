import React from "react";
import styles from "./HomePage.module.scss";

// interface HomePageProps {}

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.banner}>
        <div className={styles.banner__text_title}>Offer products to make your interior Minimalist.</div>
        <div className={styles.banner__text}>we have helped more than 1000+ people to give perfect comfort to the interior of their home</div>
        <button>Find Product</button>
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
