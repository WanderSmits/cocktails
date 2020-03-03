import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CocktailDetails() {
  const [page, setPage] = useState([]);

  // const [parameter, setParameter] = useState([]);

  useEffect(() => {
    async function details() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      ).then(r => r.json());

      console.log(response.drinks);
      setPage(response.drinks);
    }
    details();
  }, []);

  console.log(page);

  return (
    <div>
      <h1>Categories:</h1>
      <ul>
        {page.map(cat => {
          return (
            <li>
              <Link to={`/cocktails/${encodeURIComponent(cat.strCategory)}`}>
                {cat.strCategory}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
