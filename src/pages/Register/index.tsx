import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { selectIsAuth } from "../../redux/Auth/selectors";
import { fetchRegister } from "../../redux/Auth/acyncAction";
import { SubmitHandler, useForm } from "react-hook-form";
import { ButtonDefault } from "../../components";
import { FaUserCircle } from "react-icons/fa";
import { TextField } from "@mui/material";

import styles from "./Register.module.scss";

type RegisterProps = {
  fullName: string;
  email: string;
  password: string | number;
};

const Register: React.FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<RegisterProps>({
    defaultValues: {
      fullName: "Илья Пупкин",
      email: "jambox767@mail.ru",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<RegisterProps> = async (values) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      alert("Не удалось зарегистрироваться!");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>Создание аккаунта</h3>
      <span className={styles.icon}>
        <FaUserCircle />
      </span>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          {...register("fullName", { required: "Укажите имя" })}
          label="Имя"
          error={Boolean(errors.fullName?.message)}
          helperText={errors.fullName?.message}
          fullWidth
        />
        <TextField
          className={styles.field}
          {...register("email", { required: "Укажите email" })}
          label="Email"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          fullWidth
        />
        <TextField
          className={styles.field}
          {...register("password", { required: "Укажите пароль" })}
          label="Пароль"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          fullWidth
        />
        <ButtonDefault
          fullWidth
          disabled={!isValid}
          type="submit"
          color={"blue"}
          title={"Зарегистрироваться"}
        />
      </form>
    </div>
  );
};

export default Register;
