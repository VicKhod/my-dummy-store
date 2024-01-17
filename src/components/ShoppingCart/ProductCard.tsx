import { ICartProduct } from "./ShoppingCart";

const ProductCard: React.FC<{ product: ICartProduct }> = ({ product }) => {
  return (
    <div>
      <div>{product.title} {product.quantity}</div>
      <div>Цена {product.total}</div>
    </div>
  );
};

export default ProductCard;
