import React, { useState, FormEventHandler, useEffect, useRef } from "react";
import styles from "./LoginPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../components/hooks/store";
import { ILoginRequest } from "../../store/slices/userSlice";
import { useLoginMutation } from "../../services/api";
import { setLogin } from "../../store/slices/authSlice";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [usernameVal, setUsernameVal] = useState<string>();
  const [passwordVal, setPasswordVal] = useState<string>();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  // const formData: ILoginRequest = {
  //   username: usernameVal,
  //   password: passwordVal,
  // };
  const formData: ILoginRequest = {
    username: usernameRef.current?.value,
    password: passwordRef.current?.value,
  };
  const [login] = useLoginMutation();

  const handleSubmit: FormEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    console.log(formData);
    if (
      (usernameVal !== "") && (usernameVal !== undefined) ||
      (passwordVal !== "") && (passwordVal !== undefined)
    )
      login(formData)
        .unwrap()
        .then((fulfilled) => dispatch(setLogin(fulfilled)))
        .catch((rejected) => console.error(rejected));
  };

  // useEffect(() => {

  // }, []);

  return (
    <div className={styles.loginPage}>
      <form id="form" onSubmit={handleSubmit}>
        <label>
          <span>Username</span>
          <input
            name="username"
            type="text"
            placeholder="Username"
            // ref={(input) => setUsernameVal(input?.value)}
            ref={usernameRef}
            required
          />
        </label>
        <label>
          <span>Password</span>
          <input
            name="password"
            type="password"
            placeholder="Password"
            // ref={(input) => setPasswordVal(input?.value)}
            ref={passwordRef}
            required
          />
        </label>
      </form>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default LoginPage;
