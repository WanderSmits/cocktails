import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ListCocktails(props) {
  const [cocktails, setCocktail] = useState([]);

  const location = useParams();

  console.log("my Location: ", location);

  //set location.param
  useEffect(() => {
    async function updateCocktails() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${location.strCategory}`
      ).then(r => r.json());

      console.log(response);
      setCocktail(response.drinks);
    }
    updateCocktails();
  }, []);

  return (
    <div>
      <h1>A list of categories</h1>
      {props.categories}
      <ul>
        {cocktails.map(cock => {
          return <li>{cock.strDrink}</li>;
        })}
      </ul>
    </div>
  );
}
