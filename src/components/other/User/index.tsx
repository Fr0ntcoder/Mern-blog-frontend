import React from "react";
import { Author } from "../../../redux/posts/fetchPost/types";
import styles from "./UserInfo.module.scss";

export const UserInfo: React.FC<Author> = ({
  avatarUrl,
  fullName,
  createData,
}) => {
  return (
    <div className={styles.wrap}>
      <span className={styles.img}>
        <img
          className={styles.img}
          src={avatarUrl || require("../../../assets/img/avatar-empty.jpg")}
          alt=""
        />
      </span>
      <div className={styles.content}>
        <h4 className={styles.title}>{fullName}</h4>
        <p className={styles.data}>{createData}</p>
      </div>
    </div>
  );
};
