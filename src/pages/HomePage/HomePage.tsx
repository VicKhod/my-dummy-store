import {
  useGetAllCategoriesQuery,
  useGetCategoryQuery,
} from "../../services/api";
import styles from "./HomePage.module.scss";

export interface ICategory  {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}
// interface HomePageProps {}

const HomePage = () => {
  const { data = [], isLoading } = useGetCategoryQuery('smartphones');
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
