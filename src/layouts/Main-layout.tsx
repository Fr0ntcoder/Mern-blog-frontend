import React from "react";
import { Outlet } from "react-router-dom";

import { Header, Sidebar, Tabs } from "../components";
import styles from "./layouts.module.scss";
const MainLayout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrap}>
          <div className={styles.content}>
            <Outlet />
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
