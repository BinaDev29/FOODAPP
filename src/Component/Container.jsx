import React from "react";
import styles from "./container.module.css";

export default function Container({ children }) {
  return <div className={styles.parentcontainer}>{children}</div>;
}
