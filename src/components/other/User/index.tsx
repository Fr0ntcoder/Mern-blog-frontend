import React from "react";
import styles from "./UserInfo.module.scss";

type UserInfoProps = {
  avatarUrl: string;
  fullName: string;
  createData: string;
};
export const UserInfo: React.FC<UserInfoProps> = ({
  avatarUrl,
  fullName,
  createData,
}) => {
  return (
    <div className={styles.wrap}>
      <img className={styles.img} src={avatarUrl} alt="" />
      <div className={styles.content}>
        <h4 className={styles.title}>{fullName}</h4>
        <p className={styles.data}>{createData}</p>
      </div>
    </div>
  );
};
