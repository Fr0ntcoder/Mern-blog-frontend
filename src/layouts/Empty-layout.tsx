import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components";
import styles from "./layouts.module.scss";
const EmptyLayout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrap}>
          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmptyLayout;
