import styles from './MainLayout.module.scss';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';



interface MainLayoutProps {}

const MainLayout = ({}: MainLayoutProps) => (
  <div className={styles.mainLayout}>
    <Header/>
    <Outlet/>
  </div>
);

export default MainLayout;
