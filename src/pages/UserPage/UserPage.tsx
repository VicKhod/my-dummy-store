import React from "react";
import styles from "./UserPage.module.scss";
import { useAppSelector } from "../../hooks";

interface UserPageProps {}

const UserPage = ({}: UserPageProps) => {
  const user = useAppSelector((state) => state.auth.user);
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  return (
    <div className={styles.userPage}>
      UserPage
      <img src={user.image} width={100} height={100} alt="user-pic"/>
      <div>{user.username}</div>
      <div>{user.id}</div>
      <div>{user.gender}</div>
      <div>{user.firstName}</div>
      <div>{user.lastName}</div>
      <div>{user.email}</div>
    </div>
  );
};

export default UserPage;
