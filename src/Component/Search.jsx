import React, { useEffect, useState } from "react";
import styles from "./search.module.css";

const API_KEY = "faa6a1b900394dd9adaf93fddde0499e"; // Your API key
const URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search({ setFoodData }) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchFood = async () => {
      if (!search.trim()) {
        setFoodData([]);
        return;
      }

      try {
        const response = await fetch(
          `${URL}?query=${search}&apiKey=${API_KEY}`
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            `HTTP error! status: ${response.status}, message: ${errorData.message}`
          );
        }
        const data = await response.json();
        setFoodData(data.results || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setFoodData([]);
      }
    };

    const debounceFetch = setTimeout(() => {
      fetchFood();
    }, 300); // Debounce for 300ms

    return () => clearTimeout(debounceFetch);
  }, [search, setFoodData]);

  return (
    <div className={styles.search}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search for recipes..."
          value={search}
          onChange={handleSearchChange}
        />
      </form>
    </div>
  );
}
