import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Search from '../Search/Search';
import iconCart from "../../assets/img/cart.png"

// interface HeaderProps {}

const Header = () => (
  <div className={styles.header}>
    <header>
      <nav>
        <Link to='/'>Главная</Link>
        <Link to='/catalog'>Каталог</Link>
        <Search/>
        <Link to='/cart'><img src={iconCart} alt="cart" /></Link>
        <Link to='/user'>Личный кабинет</Link>
      </nav>

    </header>
  </div>
);

export default Header;
