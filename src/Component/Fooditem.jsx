import React from "react";
import styles from "./fooditem.module.css";

export default function Fooditem({ food, setFoodid }) {
  return (
    <div className={styles.itemcontainer} onClick={() => setFoodid(food.id)}>
      <img
        className={styles.imagecontainer}
        src={food.image}
        alt={food.title}
      />
      <div className={styles.titlecontainer}>
        <p className={styles.title}>{food.title}</p>
      </div>
      <div className={styles.buttoncon}>
        <button className={styles.button}>View Recipe</button>
      </div>
    </div>
  );
}
