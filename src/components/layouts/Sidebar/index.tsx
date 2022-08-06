import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../redux/store";
import { fetchTags } from "../../../redux/posts/fetchTags/asyncActions";
import { selectorTagsItems } from "../../../redux/posts/fetchTags/selectors";
import { Tags, CommentsBlock } from "../..";
import styles from "./Sidebar.module.scss";
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
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectorTagsItems);
  const isLoading = status === "loading";

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  return (
    <aside className={styles.sidebar}>
      <Tags tagsList={items} title={"Тэги"} isLoading={isLoading} />
      <CommentsBlock commentsList={comments} isLoading={false} />
    </aside>
  );
};
