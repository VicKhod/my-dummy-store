import { Link } from "react-router-dom";
import {
  useGetAllCategoriesQuery,
  useGetCategoryQuery,
} from "../../services/api";
import styles from "./HomePage.module.scss";
import Product from "../../components/Product/Product";

export interface ICategory {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
}
// interface HomePageProps {}

const HomePage = () => {
  const { data = [], isLoading } = useGetAllCategoriesQuery();
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.homePage}>
      <div className={styles.banner}>
        <div className={styles.banner__text}>
          <p className={styles.title}>
            Offer products to make your interior <span>Minimalist.</span>
          </p>
          <p>
            we have helped more than 1000+ people to give perfect comfort to the
            interior of their home
          </p>
          <button>Find Product</button>
        </div>
      </div>
      <div className={styles.carousel}>
        
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
