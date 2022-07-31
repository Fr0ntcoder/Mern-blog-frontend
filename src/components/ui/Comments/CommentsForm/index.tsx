import React, { useState } from "react";
import styles from "./CommentsForm.module.scss";
export const CommentsForm: React.FC = () => {
  const [value, setValue] = useState("");
  const addComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setValue("");
    console.log(value);
  };
  return (
    <form className={styles.form}>
      <span className={styles.avatar}>
        <img src="https://mui.com/static/images/avatar/5.jpg" alt="" />
      </span>
      <div className={styles.wrap}>
        <input
          className={styles.input}
          type="text"
          placeholder="Написать комментарий"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        <button className={styles.btn} onClick={addComment}>
          Отправить
        </button>
      </div>
    </form>
  );
};
