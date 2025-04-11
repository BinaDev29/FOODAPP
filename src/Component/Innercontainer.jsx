import React from "react";
import styles from "./innercontainer.module.css";

export default function Innercontainer({ children }) {
  return <div className={styles.innercontainer}>{children}</div>;
}
