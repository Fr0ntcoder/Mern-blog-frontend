import React from "react";
import styles from "./ButtonDefault.module.scss";
type ButtonFileProps = {
  title: string;
  handler: () => void;
};
export const ButtonDefault: React.FC<ButtonFileProps> = ({
  title,
  handler,
}) => {
  return (
    <button className={styles.btn} onClick={handler}>
      {title}
    </button>
  );
};
