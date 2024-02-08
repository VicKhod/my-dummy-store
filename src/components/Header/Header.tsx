import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Search from '../Search/Search';
import iconCart from "../../assets/img/cart.png"

// interface HeaderProps {}

const Header = () => (
  <div className={styles.header}>
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/catalog'>Catalog</Link>
        <Link to='/user'>Profile</Link>
        <Search/>
        <Link to='/cart'><img src={iconCart} alt="cart" /></Link>
        
      </nav>

    </header>
  </div>
);

export default Header;
