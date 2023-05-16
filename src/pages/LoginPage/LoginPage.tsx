import {useLocation, useNavigate} from 'react-router-dom';
import styles from './LoginPage.module.scss';

interface LoginPageProps {}

const LoginPage = ({}: LoginPageProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';
  
  return (
    <div className={styles.loginPage}>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
      </form>
      <button onClick={() => navigate(fromPage, {replace: true})}>Login</button>
    </div>
  )
};

export default LoginPage;
