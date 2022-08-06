import React from "react";
import styles from "./ButtonDefault.module.scss";

type ButtonFileProps = {
  title: string;
  color: string;
  type?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  handler?: (e: React.MouseEvent<HTMLInputElement>) => void;
};
export const ButtonDefault: React.FC<ButtonFileProps> = ({
  title,
  color,
  disabled,
  fullWidth,
  handler,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={handler}
      className={
        fullWidth
          ? `${styles.fullWidth} ${styles.btn}  ${styles[color]}`
          : `${styles.btn}  ${styles[color]}`
      }
    >
      {title}
    </button>
  );
};
