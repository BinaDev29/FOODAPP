import React from "react";
import Item from "./Item";
import styles from "./itemlist.module.css"; // Import CSS module

export default function Itemlist({ food, isLoading }) {
  return (
    <div className={styles.list}>
      {" "}
      {/* Apply the list style */}
      {isLoading ? (
        <p>Loading ingredients...</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <Item key={item.id} item={item} />
        ))
      )}
    </div>
  );
}
