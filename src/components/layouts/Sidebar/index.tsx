import React from "react";
import { Tabs, Tags, CommentsBlock } from "../..";
import styles from "./Sidebar.module.scss";
const tags = ["react", "typescript", "заметки"];
const comments = [
  {
    user: {
      fullName: "Вася Пупкин",
      avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
    },
    text: "Это тестовый комментарий",
  },
  {
    user: {
      fullName: "Иван Иванов",
      avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
    },
    text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
  },
];
export const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <Tags tagsList={tags} title={"Тэги"} isLoading={false} />
      <CommentsBlock commentsList={comments} isLoading={false} />
    </aside>
  );
};
