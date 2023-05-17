import React, { useState } from "react";
import styles from "./LoginPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../components/hooks/store";
import { useAppSelector } from "../../store";
import { getAccess } from "../../store/slices/authSlice";
import setLogin from "../../store/slices/userSlice";

interface LoginPageProps {}

const LoginPage = ({}: LoginPageProps) => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();
  const [usernameVal, setUsernameVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const data: [string, string] = [usernameVal, passwordVal];

  const handler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getAccess(data)).then((res) => {
      const data = res.payload;
      // dispatch(setLogin(data));
      navigate("/profile");
    });
  };

  return (
    <div className={styles.loginPage}>
      <form className="auth" onSubmit={handler}>
        <h1>Войти</h1>
        <input
          type="username"
          placeholder="username"
          name="username"
          value={usernameVal}
          required
          onInput={(e) => setUsernameVal(e.currentTarget.value)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={passwordVal}
          required
          onInput={(e) => setPasswordVal(e.currentTarget.value)}
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;
