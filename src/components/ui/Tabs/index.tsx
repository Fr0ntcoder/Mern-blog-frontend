import React, { useState } from "react";
import {
  fetchPosts,
  fetchPostsPopulate,
} from "../../../redux/posts/fetchPosts/asyncActions";

import { useAppDispatch } from "../../../redux/store";

import styles from "./Tabs.module.scss";

export const Tabs: React.FC = () => {
  const dispatch = useAppDispatch();
  const [tab, setTab] = useState(true);

  const tabHanler = (e: any) => {
    e.preventDefault();
    const data = e.target.dataset.tab;
    if (data === "new") {
      setTab(true);
      dispatch(fetchPosts());
    } else {
      setTab(false);
      dispatch(fetchPostsPopulate());
    }
  };

  return (
    <div className={styles.wrap} onClick={tabHanler}>
      <a
        href="#"
        className={`${styles.link} ${tab ? styles["link--active"] : ""} `}
        data-tab="new"
      >
        Новые
      </a>
      <a
        href="#"
        className={`${styles.link} ${!tab ? styles["link--active"] : ""} `}
        data-tab="populate"
      >
        Популярные
      </a>
    </div>
  );
};
