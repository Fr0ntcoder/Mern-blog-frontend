import React, { useState } from "react";
import styles from "./Login.module.scss";
import { ButtonDefault } from "../../components";
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };
  const onLogin = () => {};
  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>Вход в аккаунт</h3>
      <form className={styles.form}>
        <div className={styles.group}>
          <input
            onBlur={onBlurHandler}
            className={`${styles.input} ${
              emailDirty && email === "" ? styles.error : ""
            }`}
            name="email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailDirty && email === "" && (
            <span className={styles.errorSpan}>Неверно указана почта</span>
          )}
        </div>
        <div className={styles.group}>
          <input
            onBlur={onBlurHandler}
            className={`${styles.input} ${
              passwordDirty && password === "" ? styles.error : ""
            }`}
            name="password"
            type="password"
            value={password}
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordDirty && password === "" && (
            <span className={styles.errorSpan}>Введите пароль</span>
          )}
        </div>
        <ButtonDefault handler={onLogin} title={"Войти"} />
      </form>
    </div>
  );
};

export default Login;
