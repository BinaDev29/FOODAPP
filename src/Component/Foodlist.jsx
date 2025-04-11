import React from "react";
import Fooditem from "./Fooditem";
import styles from "./foodlist.module.css"; // Make sure this path is correct

export default function Foodlist({ foodData, setFoodid }) {
  return (
    <div className={styles.listContainer}>
      {" "}
      {/* Use the class name defined in the CSS module */}
      {foodData && foodData.length > 0 ? (
        foodData.map((food) => (
          <Fooditem key={food.id} food={food} setFoodid={setFoodid} />
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
}
