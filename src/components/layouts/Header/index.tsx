import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../redux/store";
import { logout } from "../../../redux/Auth/slice";
import { selectIsAuth } from "../../../redux/Auth/selectors";

import { ButtonDefault } from "../../../components";

import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const onLogout = () => {
    if (window.confirm("Вы действительно хотите выйти из аккаунта?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  return (
    <header className={styles.root}>
      <div className={styles.wrap}>
        <Link to="/" className={styles.logo}>
          React Blog
        </Link>
        {isAuth ? (
          <div className={styles.btns}>
            <Link to="/add-post">
              <ButtonDefault color={"blue"} title={"Написать статью"} />
            </Link>
            <span onClick={onLogout}>
              <ButtonDefault color={"red"} title={"Выйти"} />
            </span>
          </div>
        ) : (
          <div className={styles.btns}>
            <Link to="/login">
              <ButtonDefault color={"white"} title={"Войти"} />
            </Link>
            <Link to="/register">
              <ButtonDefault color={"blue"} title={"Создать аккаунт"} />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
