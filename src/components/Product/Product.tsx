import styles from "./Product.module.scss";
import { IProduct } from "../../store/slices/productSlice";
import addBtn from '../../assets/img/add-btn.png';

const Product: React.FC<{ product: IProduct }> = ({ product }) => {
  const productImg = {
    backgroundImage: `url(${product.images[0]})`
  };

  return (
    <div className={styles.productWrapper}>
      <div className={styles.productImg} style={productImg}></div>
      <div className={styles.productDescription}>
        <div className={styles.productCat}>{product.category}</div>
        <div className={styles.productTitle}>{product.title}</div>
        <div className={styles.productPrice}>${product.price}</div>
        <div className={styles.productChooseBtn}><img src={addBtn} alt="cart" /></div>
      </div>
    </div>
  );
};

export default Product;
