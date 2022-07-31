import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { ButtonDefault } from "../../../components";

export const Header: React.FC = () => {
  const isAuth = true;
  const navigate = useNavigate();
  const onCreateAccount = () => {
    navigate("/register");
  };
  const onLogin = () => {
    navigate("/login");
  };
  return (
    <header className={styles.root}>
      <div className={styles.wrap}>
        <Link to="/" className={styles.logo}>
          React Blog
        </Link>
        <div className={styles.btns}>
          <button onClick={onLogin} className={styles.btn}>
            Войти
          </button>
          <ButtonDefault handler={onCreateAccount} title={"Создать аккаунт"} />
        </div>
      </div>
    </header>
  );
};
