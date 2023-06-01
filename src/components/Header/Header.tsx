import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Search from '../Search/Search';

interface HeaderProps {}

const Header = ({}: HeaderProps) => (
  <div className={styles.header}>
    <header>
      <nav>
        <Link to='/'>Главная</Link>
        <Link to='/catalog'>Каталог</Link>
        <Search/>
        <Link to='/cart'>Корзина</Link>
        <Link to='/user'>Личный кабинет</Link>
      </nav>

    </header>
  </div>
);

export default Header;
