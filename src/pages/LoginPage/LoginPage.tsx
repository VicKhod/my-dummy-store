import {useLocation, useNavigate} from 'react-router-dom';
import styles from './LoginPage.module.scss';
import { useAppDispatch } from '../../components/hooks/store';
import React from 'react';
import { LoginRequest } from '../../store/slices/userSlice';
import { useLoginMutation } from '../../services/api';
import { setLogin } from '../../store/slices/authSlice';
import { isRejectedWithValue } from '@reduxjs/toolkit';

interface LoginPageProps {
  onSubmit: (data: LoginRequest) => void;
}

type FormFields = {
  username: HTMLInputElement;
  password: HTMLInputElement;
};

const LoginPage = ({onSubmit}: LoginPageProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';
  const [login, { isLoading }] = useLoginMutation();
  const [formState, setFormState] = React.useState<LoginRequest>({
    username: '',
    password: '',
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { username, password } = form;

    onSubmit({
      username: username.value,
      password: password.value,
    })
  };

  return (
    <div className={styles.loginPage}>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Username</span>
          <input name="username" type="text" placeholder="Username" required/>
        </label>
        <label>
          <span>Password</span>
          <input name="password" type="password" placeholder="Password"  required/>
        </label>
      </form>
      <button onClick={async () => {
        try {
          const user = await login(formState).unwrap()
          dispatch(setLogin(user))
          navigate(fromPage, {replace: true})
        } catch (error: any) {
          if (isRejectedWithValue(error)) {
            console.log(error.data)
          }
        } 
      }}>
        Login   
      </button>
    </div>
  )
};

export default LoginPage;
