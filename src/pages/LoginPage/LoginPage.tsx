import React, { useState, FormEventHandler } from "react";
import styles from "./LoginPage.module.scss";
import { useAppDispatch } from "../../hooks";
import { ILoginRequest, IUser } from "../../store/slices/userSlice";
import { useLoginMutation } from "../../services/api";
import { setLogin } from "../../store/slices/authSlice";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [usernameVal, setUsernameVal] = useState<string>();
  const [passwordVal, setPasswordVal] = useState<string>();
  const formData: ILoginRequest = {
    username: usernameVal,
    password: passwordVal,
  };
  const [login] = useLoginMutation();

  const handleSubmit: FormEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    console.log(formData);
    login(formData)
      .unwrap()
      .then((fulfilled: IUser) => {
        console.log(fulfilled);
        dispatch(setLogin(fulfilled));
      })
      .catch((rejected) => console.error(rejected));
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
