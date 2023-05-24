import styles from "./Product.module.scss";
import { IProduct } from "../../store/slices/productSlice";

const Product: React.FC<{product: IProduct}> = ({product}) => {
  const productImg = {
    backgroundImage: `url(${product.images[0]})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#fff",
    marginBottom: "20px"
};

  return (
    <div className={styles.productWrapper}>
      <div className={styles.productImg} style={productImg}></div>
      <div className={styles.productTitle}>{product.title}</div>
      <div className={styles.productPrice}>{product.price}</div>
    </div>
  );
};

export default Product;
