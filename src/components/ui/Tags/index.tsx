import { Skeleton } from "@mui/material";
import React from "react";
import styles from "./Tags.module.scss";

interface TagsListProps {
  tagsList: string[];
  title: string;
  isLoading: boolean;
}

export const Tags: React.FC<TagsListProps> = ({
  tagsList,
  title,
  isLoading,
}) => {
  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {(isLoading ? [...Array(2)] : tagsList).map((item, i) =>
          isLoading ? (
            <Skeleton key={i} width={100} height={20} />
          ) : (
            <li className={styles.item} key={i}>
              #{item}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
