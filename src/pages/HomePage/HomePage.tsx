import React from "react";
import styles from "./HomePage.module.scss";
import bcgImg from "../../assets/img/background_home_page.png"

// interface HomePageProps {}

const HomePage = () => {
  return (
    <>
      <div>
        <img src={bcgImg} alt='banner_image'/>
        <div>Offer products to make your interior Minimalist.</div>
        <div>we have helped more than 1000+ people to give perfect comfort to the interior of their home</div>
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
    </>
  );
};

export default HomePage;
