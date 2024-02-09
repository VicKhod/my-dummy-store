import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Search from '../Search/Search';
import iconCart from "../../assets/img/cart.png"
import logo from "../../assets/img/logo.png"

// interface HeaderProps {}

const Header = () => (
  <div className={styles.header}>
    <header>
      <nav>
        <div className={styles.header__nav_links}>
        <img src={logo} alt="logo" />
        </div>
        <div className={styles.header__nav_links}>
          <Link to='/'>Home</Link>
        <Link to='/catalog'>Catalog</Link>
        <Link to='/user'>Profile</Link>
        </div>
        <div className={styles.header__nav_links}>
          <Search/>
        <Link to='/cart'><img src={iconCart} alt="cart" /></Link>
        </div>
      </nav>

    </header>
  </div>
);

export default Header;
