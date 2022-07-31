import React from "react";
import styles from "./CommentsBlock.module.scss";

type CommentsUser = {
  fullName: string;
  avatarUrl: string;
};

interface CommentsProps {
  commentsList: {
    user: CommentsUser;
    text: string;
  }[];
  isLoading: boolean;
  children?: React.ReactNode;
}

export const CommentsBlock: React.FC<CommentsProps> = ({
  commentsList,
  isLoading,
  children,
}) => {
  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>Комментарии</h3>
      <ul className={styles.list}>
        {commentsList.map((item, i) => (
          <li className={styles.item} key={i}>
            <span className={styles.avatar}>
              <img src={item.user.avatarUrl} alt="" />
            </span>
            <div className={styles.content}>
              <h4 className={styles.contentTitle}>{item.user.fullName}</h4>
              <p className={styles.contentText}>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
};
