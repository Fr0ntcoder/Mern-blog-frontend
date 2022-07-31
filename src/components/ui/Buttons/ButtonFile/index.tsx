import React from "react";
import styles from "./ButtonFile.module.scss";
type ButtonFileProps = {
  title: string;
  handler: () => void;
};
export const ButtonFile: React.FC<ButtonFileProps> = ({ title, handler }) => {
  return (
    <button className={styles.btn} onClick={handler}>
      {title}
    </button>
  );
};
