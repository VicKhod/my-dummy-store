import { useLocation, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import { useAppDispatch } from "../../components/hooks/store";
import React, {
  FormEventHandler,
  HTMLInputTypeAttribute,
  useEffect,
  useState,
} from "react";
import { LoginRequest } from "../../store/slices/userSlice";
import { useLoginMutation } from "../../services/api";
import { setLogin } from "../../store/slices/authSlice";
import { isRejectedWithValue } from "@reduxjs/toolkit";

interface LoginPageProps {
  onSubmit: (data: LoginRequest) => void;
}

type FormFields = {
  username: HTMLInputElement;
  password: HTMLInputElement;
};

const LoginPage = ({ onSubmit }: LoginPageProps) => {
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const [usernameVal, setUsernameVal] = useState<string>();
  const [passwordVal, setPasswordVal] = useState<string>();

  const handleSubmit: FormEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const formData: LoginRequest = {
      username: usernameVal,
      password: passwordVal,
    };
    console.log(formData);
    
  };

  return (
    <div className={styles.loginPage}>
      <form id="form" onSubmit={handleSubmit}>
        <label>
          <span>Username</span>
          <input
            name="username"
            type="text"
            placeholder="Username"
            ref={(input) => setUsernameVal(input?.value)}
            required
          />
        </label>
        <label>
          <span>Password</span>
          <input
            name="password"
            type="password"
            placeholder="Password"
            ref={(input) => setPasswordVal(input?.value)}
            required
          />
        </label>
      </form>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default LoginPage;
