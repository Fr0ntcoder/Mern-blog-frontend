import React, { useState } from "react";
import styles from "./Register.module.scss";
import { ButtonDefault } from "../../components";
import { FaUserCircle } from "react-icons/fa";
const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };
  const onRegister = () => {};
  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>Создание аккаунта</h3>
      <span className={styles.icon}>
        <FaUserCircle />
      </span>
      <form className={styles.form}>
        <div className={styles.group}>
          <input
            onBlur={onBlurHandler}
            className={`${styles.input} ${
              nameDirty && name === "" ? styles.error : ""
            }`}
            name="name"
            type="text"
            value={name}
            placeholder="Полное имя"
            onChange={(e) => setName(e.target.value)}
          />
          {nameDirty && name === "" && (
            <span className={styles.errorSpan}>Укажите имя</span>
          )}
        </div>
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
        <ButtonDefault handler={onRegister} title={"Зарегистрироваться"} />
      </form>
    </div>
  );
};

export default Register;
