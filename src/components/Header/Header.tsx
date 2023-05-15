import styles from './Header.module.scss';

interface HeaderProps {}

const Header = ({}: HeaderProps) => (
  <div className={styles.header}>
    <header>
      <nav>
        <ul>
          <li><a href="#">Главная</a></li>
          <li><a href="#">Каталог</a></li>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Header;
