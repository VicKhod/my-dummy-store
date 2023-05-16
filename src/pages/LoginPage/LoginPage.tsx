import {useLocation, useNavigate} from 'react-router-dom';
import styles from './LoginPage.module.scss';

interface LoginPageProps {}

const LoginPage = ({}: LoginPageProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || '/';

  // const handleLogin = () => {
  //   navigate(fromPage, {replace: true});
  //    // navigate('/home', {replace: true});
  // }
  
  return (
    <div className={styles.loginPage}>
      LoginPage
      {fromPage}
    </div>
  )
};

export default LoginPage;
