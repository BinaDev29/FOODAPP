import React, { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import Itemlist from "./Itemlist";

export default function Fooddetails({ foodid }) {
  const [food, setFood] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodid}/information`;
  const API_KEY = "faa6a1b900394dd9adaf93fddde0499e";

  useEffect(() => {
    async function fetchFood() {
      setIsLoading(true);
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setFood(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching food details:", error);
        setIsLoading(false);
        setFood(null);
      }
    }

    if (foodid) {
      fetchFood();
    } else {
      setFood(null);
      setIsLoading(false);
    }
  }, [foodid]);

  if (isLoading) {
    return <div>Loading food details...</div>;
  }

  if (!food) {
    return (
      <div>
        {foodid
          ? "Failed to load food details."
          : "Select a recipe to view details."}
      </div>
    );
  }

  return (
    <div className={styles.detailsContainer}>
      {" "}
      {/* Added a main container */}
      <div className={styles.recipecard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeimage} src={food.image} alt={food.title} />
        <div className={styles.recipedetails}>
          <span>
            <strong>⏱️ {food.readyInMinutes} Min</strong>
          </span>
          <span>
            <strong>👨‍👩‍👧‍👦 Servings: {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          {food.vegan && (
            <span>
              <strong>🌱 Vegan</strong>
            </span>
          )}{" "}
          {/* Conditional rendering */}
        </div>
        <span>
          <strong>
            Price per serving: ${(food.pricePerServing / 100).toFixed(2)}
          </strong>
        </span>
      </div>
      <div>
        <h2>Ingredients</h2>
        <Itemlist food={food} isLoading={isLoading} />
        <h2>Instructions:</h2>
        <div className={styles.recipeinstruction}>
          <ol>
            {isLoading ? (
              <p>Loading instructions...</p>
            ) : food.analyzedInstructions &&
              food.analyzedInstructions.length > 0 ? (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            ) : (
              <p>No instructions found for this recipe.</p>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
