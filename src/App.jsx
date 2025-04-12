import React, { useState } from "react";
import "./App.css";
import Header from "./Component/Header";
import Search from "./Component/Search";
import Container from "./Component/Container";
import Innercontainer from "./Component/Innercontainer";
import Fooddetails from "./Component/Fooddetails";
import Foodlist from "./Component/Foodlist";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodid, setFoodid] = useState(null); // Changed to null for clarity

  return (
    <div className="App">
      <Header />
      <Search setFoodData={setFoodData} />
      <Container>
        <Innercontainer>
          {foodData.length > 0 ? (
            <Foodlist foodData={foodData} setFoodid={setFoodid} />
          ) : (
            <p>
              No recipes found. Start <strong><em>searching </em></strong>to discover delicious meals!
            </p>
          )}
        </Innercontainer>
        <Innercontainer>
          {foodid ? (
            <Fooddetails foodid={foodid} />
          ) : (
            <p>Click on a-- <strong><em>recipe view </em></strong>  to see its mouthwatering details!</p>
          )}
        </Innercontainer>
      </Container>
    </div>
  );
}

export default App;
