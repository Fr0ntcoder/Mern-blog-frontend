import React from "react";
import styles from "./Tags.module.scss";

type TagsListProps = {
  tagsList: string[];
  title: string;
  isLoading: boolean;
};

export const Tags: React.FC<TagsListProps> = ({
  tagsList,
  title,
  isLoading,
}) => {
  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {tagsList.map((item, i) => (
          <li className={styles.item} key={i}>
            <span>#</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
