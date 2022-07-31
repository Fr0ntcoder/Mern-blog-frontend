import React from "react";
import SimpleMDE from "react-simplemde-editor";

import "easymde/dist/easymde.min.css";
import styles from "./Tabs.module.scss";
export const Tabs: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <a href="#" className={`${styles.link} ${styles["link--active"]} `}>
        Новые
      </a>
      <a href="#" className={styles.link}>
        Популярные
      </a>
    </div>
  );
};
