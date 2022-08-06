import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { fetchAuth } from "../../redux/Auth/acyncAction";
import { selectIsAuth } from "../../redux/Auth/selectors";
import { SubmitHandler, useForm } from "react-hook-form";
import { ButtonDefault } from "../../components";
import TextField from "@mui/material/TextField";

import styles from "./Login.module.scss";

type SubmitValue = {
  email: string;
  password: string | number;
};

const Login: React.FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<SubmitValue>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<SubmitValue> = async (values) => {
    const data = await dispatch(fetchAuth(values));
    if (!data.payload) {
      alert("Вы не авторизованы");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    } else {
      alert("Не удалось авторизоваться!");
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>Вход в аккаунт</h3>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="email"
          className={styles.field}
          {...register("email", { required: "Укажите почту" })}
          label="Email"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          fullWidth
        />
        <TextField
          className={styles.field}
          {...register("password", { required: "Укажите пароль" })}
          label="Password"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          fullWidth
        />
        <ButtonDefault type="submit" fullWidth color={"blue"} title={"Войти"} />
      </form>
    </div>
  );
};

export default Login;
